/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import TrashIcon from "@atoms/icons/trashIcon";
import UploadIcon from "@atoms/icons/uploadIcon";
import {
  getUserToken,
  putMemberProfileService,
} from "@services/member.service";
import { ROOT_API } from "@utility/constant.utils";
import { useToastContext } from "@utility/context/ToastContext";
import {
  ProfileUpdateFormData,
  profileUpdateSchema,
} from "@utility/schema/profile.schema";
import { IUserAuth } from "@utility/types";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import { useMutation } from "react-query";

type Props = {
  userAuth: IUserAuth;
  userData: IUserAuth | null;
  onProfileUpdated: (updatedUser: IUserAuth) => void;
};

function MemberSettingsProfileCard({
  userAuth,
  userData,
  onProfileUpdated,
}: Props) {
  const { onAddToast } = useToastContext();
  const [avatarPreview, setAvatarPreview] = React.useState<string>(
    userData?.avatar || userAuth?.avatar || "/img/avatar-1.png"
  );
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);

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

  const profileMutation = useMutation(putMemberProfileService);

  React.useEffect(() => {
    setAvatarPreview(
      userData?.avatar || userAuth?.avatar || "/img/avatar-1.png"
    );
  }, [userAuth?.avatar, userData?.avatar]);

  React.useEffect(() => {
    reset({
      name: userAuth?.name || "",
      email: userAuth?.email || "",
      phoneNumber: userAuth?.phoneNumber || "",
    });
  }, [reset, userAuth]);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files || files.length === 0) return;

    const file = files[0];
    setSelectedFile(file);

    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setAvatarPreview(event.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleResetAvatar = () => {
    setAvatarPreview(
      userData?.avatar || userAuth?.avatar || "/img/avatar-1.png"
    );
    setSelectedFile(null);
  };

  const onSubmitProfile = (values: ProfileUpdateFormData) => {
    const token = getUserToken();
    if (!token) {
      onAddToast({
        variant: "error",
        title: "Error",
        message: "Authentication token not found. Please log in again.",
      });
      return;
    }

    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("phoneNumber", values.phoneNumber);

    if (selectedFile) {
      formData.append("image", selectedFile);
    }

    profileMutation.mutate(
      { formData, token },
      {
        onSuccess(dataSuccess) {
          onProfileUpdated({
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

          reset({
            name: dataSuccess.name || "",
            email: dataSuccess.email || "",
            phoneNumber: dataSuccess.phone_number || "",
          });
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
    <div className="bg-card pt-30 ps-30 pe-30 pb-30">
      <Form onSubmit={handleSubmit(onSubmitProfile)}>
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
            <Form.Text className="text-danger">{errors.name.message}</Form.Text>
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
        <div className="button-group d-flex flex-column pt-50">
          <Button
            type="submit"
            className="btn-save fw-medium text-lg text-white rounded-pill"
            disabled={profileMutation.isLoading}
          >
            {profileMutation.isLoading ? "Saving..." : "Save My Profile"}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default MemberSettingsProfileCard;
