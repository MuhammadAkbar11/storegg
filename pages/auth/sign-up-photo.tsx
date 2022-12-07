import React from "react";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Spinner } from "react-bootstrap";
import Layout from "@components/organisms/layout";
import UploadIcon from "@atoms/icons/uploadIcon";
import {
  SignupInputTypes,
  SignupPhotoInputTypes,
  signupPhotoSchema,
} from "@utility/schema/auth.schema";
import useGetCategories from "@hooks/useGetCategory";
import { postSignupService } from "@services/auth.service";
import { useSignupContext } from "@utility/context/SignupContext";

type Props = {};

function SignUpPhoto({}: Props) {
  const {
    signupPhotoFormData: currSignupPhotoForm,
    signupFormData: currSignupForm,
    onResetSignupForm,
    onSetPhotoFormData,
    onSetError: onSetErrorSignup,
  } = useSignupContext();

  const router = useRouter();
  const {
    data: categories,
    isSuccess,
    isLoading: isLoadingCategories,
  } = useGetCategories();

  const methods = useForm<SignupPhotoInputTypes>({
    resolver: zodResolver(signupPhotoSchema),
  });

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = methods;

  const mutation = useMutation(postSignupService, {
    onSuccess() {
      onResetSignupForm();
      setTimeout(() => {
        router.push("/auth/sign-up-success");
      }, 100);
    },
    onError(error, variables) {
      const data = variables as FormData;
      onSetPhotoFormData({
        avatar: data.get("image"),
        favorite: data.get("category")?.toString() || "",
      });
      onSetErrorSignup(error);
      router.push("/auth/sign-up");
    },
  });

  React.useEffect(() => {
    if (!mutation.isSuccess) {
      if (!currSignupForm) {
        router.push("/auth/sign-up");
      } else {
        if (currSignupPhotoForm) {
          const fileList = new DataTransfer();
          fileList.items?.add(currSignupPhotoForm.avatar);
          setValue("favorite", currSignupPhotoForm?.favorite || "");
          setValue("avatar", fileList.files);
        }
      }
    }
  }, [currSignupForm, currSignupPhotoForm, setValue, mutation.isSuccess]);

  const onSubmitHandler = async (values: SignupPhotoInputTypes) => {
    const data = new FormData();

    const formDataValues = currSignupForm as SignupInputTypes;

    const { avatar, favorite } = values;

    data.append("image", avatar[0]);
    data.append("category", favorite);
    data.append("email", formDataValues?.email);
    data.append("name", formDataValues?.name);
    data.append("password", formDataValues?.password);
    data.append("password2", formDataValues?.passwordConfirmation);

    mutation.mutate(data);
  };

  const avatarValue = watch("avatar");

  const avatarImg =
    avatarValue && avatarValue?.length !== 0 ? (
      <div
        className="signup-photo-img rounded-circle overflow-hidden"
        style={{
          height: 120,
          width: 120,
        }}
      >
        <img
          className=" w-100 h-100  "
          src={URL?.createObjectURL(avatarValue[0])}
          alt=""
        />
        <div className="signup-photo-img-icon">
          <UploadIcon />
        </div>
      </div>
    ) : (
      <div
        style={{
          height: 120,
          width: 120,
        }}
      >
        <UploadIcon />
      </div>
    );

  return (
    <Layout navbar={false} footer={false} pageTitle="Sign up - Upload Photo">
      <section className="sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
        <div className="container mx-auto">
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <div className="form-input d-md-block d-flex flex-column">
              <div>
                <div className="mb-20">
                  <div className="image-upload text-center">
                    <label htmlFor="avatar">{avatarImg}</label>
                    <input
                      id="avatar"
                      type="file"
                      accept="image/png, image/jpeg, image/jpg"
                      {...register("avatar")}
                    />
                  </div>
                  {errors?.avatar?.message ? (
                    <div className=" d-flex justify-content-center pt-2 text-danger ">
                      <small className=" text-center ">
                        {(errors?.avatar?.message as string) || ""}
                      </small>
                    </div>
                  ) : null}
                </div>
                <h2 className="fw-bold text-xl text-center color-palette-1 m-0">
                  {currSignupForm?.name}
                </h2>
                <p className="text-lg text-center color-palette-1 m-0">
                  {currSignupForm?.email}{" "}
                </p>
                <div className="pt-50 pb-50">
                  <label
                    htmlFor="favorite"
                    className="form-label text-lg fw-medium color-palette-1 mb-10"
                  >
                    Favorite Game
                  </label>
                  <select
                    id="favorite"
                    defaultValue={""}
                    className="form-select d-block w-100 rounded-pill text-lg"
                    aria-label="Favorite Game"
                    disabled={isLoadingCategories}
                    {...register("favorite")}
                  >
                    <option value="" disabled>
                      Select Category
                    </option>
                    {isSuccess
                      ? categories.map(cat => {
                          return (
                            <option value={cat.categoryId} key={cat.categoryId}>
                              {cat.name}
                            </option>
                          );
                        })
                      : null}
                  </select>
                  {errors?.favorite?.message ? (
                    <div className="ps-3 pt-2 text-danger ">
                      <small className=" text-center ">
                        {(errors?.favorite?.message as string) || ""}
                      </small>
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="button-group d-flex flex-column mx-auto">
                <button
                  type="submit"
                  className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                  role="button"
                  disabled={mutation.isLoading}
                >
                  {mutation.isLoading ? (
                    <Spinner
                      as="span"
                      animation="border"
                      className="me-2"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                  ) : null}
                  Create My Account
                </button>
                <a
                  className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15"
                  href="#"
                  role="button"
                >
                  Terms &amp; Conditions
                </a>
              </div>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}

export default SignUpPhoto;
