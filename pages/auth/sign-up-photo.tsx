import React from "react";
import UploadIcon from "@atoms/icons/uploadIcon";
import Layout from "@components/organisms/layout";
import { useRouter } from "next/router";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  SignupInputTypes,
  SignupPhotoInputTypes,
  signupPhotoSchema,
} from "@utility/schema/auth.schema";
import useGetCategories from "@hooks/useGetCategory";
import { useForm } from "react-hook-form";
import { array } from "zod";
import { postSignupService } from "@services/auth.service";
import { Spinner } from "react-bootstrap";

type Props = {};

function SignUpPhoto({}: Props) {
  const [currSignupForm, setCurrSignupForm] =
    React.useState<SignupInputTypes | null>(null);
  const [isLoadingSignup, setIsLoadingSignup] = React.useState(false);
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
    formState: { errors },
  } = methods;

  React.useEffect(() => {
    const signupForm = sessionStorage?.getItem("signup-form") as string;

    if (!signupForm) {
      router.push("/auth/sign-up");
    }

    if (signupForm) {
      setCurrSignupForm(JSON.parse(signupForm));
    }

    return () => setCurrSignupForm(null);
  }, []);

  const onSubmitHandler = async (values: SignupPhotoInputTypes) => {
    const localSignupForm = (await sessionStorage?.getItem(
      "signup-form"
    )) as string;
    const signupFormData = JSON.parse(localSignupForm) as SignupInputTypes;

    const data = new FormData();

    data.append("image", values.avatar[0]);
    data.append("category", values.favorite);
    data.append("email", signupFormData.email);
    data.append("name", signupFormData.name);
    data.append("password", signupFormData.password);
    data.append("password2", signupFormData.passwordConfirmation);

    setIsLoadingSignup(true);
    try {
      const result = await postSignupService(data);

      console.log("RESULT", result);
      setIsLoadingSignup(false);
    } catch (error: any) {
      console.log("ERROR", error);
      setIsLoadingSignup(false);
      if (error.name?.includes("EMAIL")) {
        router.push("/auth/sign-up");
      }
    }
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
          src={URL.createObjectURL(avatarValue[0])}
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
                  disabled={isLoadingSignup}
                >
                  {isLoadingSignup ? (
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
