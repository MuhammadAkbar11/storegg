/* eslint-disable @typescript-eslint/no-explicit-any */
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import TrashIcon from "@atoms/icons/trashIcon";
import UploadIcon from "@atoms/icons/uploadIcon";
import Sidebar from "@organisms/sidebar";
import {
  PrivateAuthProvider,
  usePrivateAuthContext,
} from "@utility/context/PrivateAuthContext";
import { IUserAuth } from "@utility/types";
import { GetServerSidePropsContext } from "next";
import { uNotAuthRedirect } from "@utility/index.utils";
import { getAuthService } from "@services/auth.service";
import MemberPageTitle from "@components/molecules/memberPageTitle";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToastContext } from "@utility/context/ToastContext";
import {
  ProfileUpdateFormData,
  profileUpdateSchema,
} from "@utility/schema/profile.schema";
import {
  getUserToken,
  putMemberProfileService,
} from "@services/member.service";
import { useMutation } from "react-query";
import useOnMount from "@hooks/useOnMount";
import { API_URI, ROOT_API } from "@utility/constant.utils";

type Props = {
  userAuth: IUserAuth;
};

function Profile({ userAuth }: Props) {
  const privateAuthCtx = usePrivateAuthContext();
  const { onAddToast } = useToastContext();
  const userData = privateAuthCtx?.user;

  const [avatarPreview, setAvatarPreview] = useState<string>(
    userData?.avatar || "/img/avatar-1.png"
  );
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProfileUpdateFormData>({
    resolver: zodResolver(profileUpdateSchema),
    defaultValues: {
      name: userAuth?.name || "",
      email: userAuth?.email || "",
      phoneNumber: userAuth?.phoneNumber || "",
    },
  });

  const mutation = useMutation(putMemberProfileService);

  useOnMount(() => {
    if (userAuth) {
      privateAuthCtx.onSetUser(userAuth);
    }
  }, [userAuth]);

  React.useEffect(() => {
    setAvatarPreview(userData?.avatar || "/img/avatar-1.png");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userAuth, userData?.avatar]);

  // Handle avatar preview
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files.length > 0) {
      const file = files[0];
      setSelectedFile(file);
      // Create preview
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setAvatarPreview(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle avatar delete/reset
  const handleResetAvatar = () => {
    setAvatarPreview(userData?.avatar || "/img/avatar-1.png");
    setSelectedFile(null);
  };

  // Form submission handler
  const onSubmit = (values: ProfileUpdateFormData) => {
    const token = getUserToken();
    if (!token) {
      onAddToast({
        variant: "error",
        title: "Error",
        message: "Authentication token not found. Please log in again.",
      });
      return;
    }

    // Create FormData for multipart upload
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("phoneNumber", values.phoneNumber);

    // Add avatar if selected
    if (selectedFile) {
      formData.append("image", selectedFile);
    }

    // Create FormData for multipart upload

    mutation.mutate(
      { formData, token },
      {
        onSuccess(dataSuccess) {
          privateAuthCtx.onUpdateUser({
            avatar: `${ROOT_API}${dataSuccess.avatar}`,
            name: dataSuccess.name,
            email: dataSuccess.email,
            phoneNumber: dataSuccess.phone_number,
            playerId: dataSuccess.player_id,
            userId: dataSuccess.user_id,
            username: dataSuccess.username,
            favorite: dataSuccess.favorite,
          });
          onAddToast({
            variant: "success",
            title: "Success!",
            message: "Profile updated successfully.",
          });

          // Reset form state
          reset(dataSuccess);
          setSelectedFile(null);
        },
        onError(error: any) {
          onAddToast({
            variant: "error",
            title: "Error",
            message:
              error?.message || "Failed to update profile. Please try again.",
          });
        },
      }
    );
  };

  return (
    <>
      <Head>
        <title>Settings | StoreGG</title>;
      </Head>
      <section className="edit-profile overflow-auto">
        <Sidebar activePath="/member/settings" />
        <main className="main-wrapper">
          <div className="ps-lg-0">
            <MemberPageTitle title="Settings" />

            <div className="bg-card pt-30 ps-30 pe-30 pb-30">
              <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="photo d-flex">
                  <div className="position-relative me-20">
                    <div
                      style={{ height: 90, width: 90 }}
                      className="position-relative rounded-circle overflow-hidden"
                    >
                      <Image
                        alt={avatarPreview}
                        src={avatarPreview}
                        layout="fill"
                        className="avatar object-fit-cover"
                      />
                    </div>

                    <button
                      className="avatar-overlay position-absolute top-0 d-flex justify-content-center align-items-center"
                      onClick={handleResetAvatar}
                      type="button"
                      style={{ cursor: "pointer" }}
                      aria-label="Reset avatar"
                    >
                      <TrashIcon />
                    </button>
                  </div>
                  <div className="image-upload">
                    <label htmlFor="avatar">
                      <div
                        style={{
                          height: 90,
                          width: 90,
                        }}
                      >
                        <UploadIcon />
                      </div>
                    </label>
                    <input
                      id="avatar"
                      type="file"
                      accept="image/png, image/jpeg"
                      {...register("avatar")}
                      onChange={handleAvatarChange}
                    />
                  </div>
                </div>
                {errors.avatar && (
                  <div className="text-danger mt-2">
                    <small>
                      {typeof errors?.avatar?.message === "string"
                        ? errors.avatar.message
                        : ""}
                    </small>
                  </div>
                )}
                <Form.Group className="pt-30">
                  <Form.Label
                    htmlFor="name"
                    className="text-lg fw-medium color-palette-1 mb-10"
                  >
                    Full Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className={`rounded-pill text-lg ${
                      errors.name ? "is-invalid" : ""
                    }`}
                    id="name"
                    placeholder="Enter your name"
                    {...register("name")}
                  />
                  {errors.name && (
                    <Form.Text className="text-danger">
                      {errors.name.message}
                    </Form.Text>
                  )}
                </Form.Group>
                <Form.Group className="pt-30">
                  <Form.Label
                    htmlFor="email"
                    className=" text-lg fw-medium color-palette-1 mb-10"
                  >
                    Email Address
                  </Form.Label>
                  <Form.Control
                    type="email"
                    className={`rounded-pill text-lg ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    id="email"
                    placeholder="Enter your email address"
                    {...register("email")}
                  />
                  {errors.email && (
                    <Form.Text className="text-danger">
                      {errors.email.message}
                    </Form.Text>
                  )}
                </Form.Group>
                <Form.Group className="pt-30">
                  <Form.Label
                    htmlFor="phone"
                    className=" text-lg fw-medium color-palette-1 mb-10"
                  >
                    Phone
                  </Form.Label>
                  <Form.Control
                    type="tel"
                    className={`rounded-pill text-lg ${
                      errors.phoneNumber ? "is-invalid" : ""
                    }`}
                    id="phone"
                    placeholder="Enter your phone number"
                    {...register("phoneNumber")}
                  />
                  {errors.phoneNumber && (
                    <Form.Text className="text-danger">
                      {errors.phoneNumber.message}
                    </Form.Text>
                  )}
                </Form.Group>
                <div className=" button-group d-flex flex-column pt-50">
                  <Button
                    type="submit"
                    className="btn-save fw-medium text-lg text-white rounded-pill"
                    disabled={mutation.isLoading}
                  >
                    {mutation.isLoading ? "Saving..." : "Save My Profile"}
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const token = ctx.req.cookies?.userToken;
  if (!token) {
    return uNotAuthRedirect(`/auth/sign-in?redirect=${ctx.req.url}`);
  }
  const jwtToken = Buffer.from(token, "base64").toString("ascii");
  try {
    const userAuth = await getAuthService(jwtToken);
    if (!userAuth)
      return uNotAuthRedirect(`/auth/sign-in?redirect=${ctx.req.url}`);
    return {
      props: {
        userAuth,
      },
    };
  } catch (error) {
    return uNotAuthRedirect(`/auth/sign-in?redirect=${ctx.req.url}`);
  }
}

Profile.providers = [PrivateAuthProvider];

export default Profile;
