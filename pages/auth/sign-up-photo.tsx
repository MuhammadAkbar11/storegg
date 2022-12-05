import React from "react";
import UploadIcon from "@atoms/icons/uploadIcon";
import Layout from "@components/organisms/layout";
import { useRouter } from "next/router";
import { SignupInputTypes } from "@utility/schema/auth.schema";
import useGetCategories from "@hooks/useGetCategory";

type Props = {};

function SignUpPhoto({}: Props) {
  const [currSignupForm, setCurrSignupForm] =
    React.useState<SignupInputTypes | null>(null);
  const router = useRouter();

  const { data: categories, isSuccess, isLoading } = useGetCategories();

  React.useEffect(() => {
    const signupForm = sessionStorage?.getItem("signup-form") as string;

    if (!signupForm) {
      router.push("/auth/sign-up");
    }

    if (signupForm) {
      setCurrSignupForm(JSON.parse(signupForm));
    }
  }, []);

  return (
    <Layout navbar={false} footer={false} pageTitle="Sign up - Upload Photo">
      <section className="sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
        <div className="container mx-auto">
          <form action="#/">
            <div className="form-input d-md-block d-flex flex-column">
              <div>
                <div className="mb-20">
                  <div className="image-upload text-center">
                    <label htmlFor="avatar">
                      <div
                        style={{
                          height: 120,
                          width: 120,
                        }}
                      >
                        <UploadIcon />
                      </div>
                    </label>
                    <input
                      id="avatar"
                      type="file"
                      name="avatar"
                      accept="image/png, image/jpeg, image/jpg"
                    />
                  </div>
                </div>
                <h2 className="fw-bold text-xl text-center color-palette-1 m-0">
                  {currSignupForm?.name}
                </h2>
                <p className="text-lg text-center color-palette-1 m-0">
                  {currSignupForm?.email}{" "}
                </p>
                <div className="pt-50 pb-50">
                  <label
                    htmlFor="category"
                    className="form-label text-lg fw-medium color-palette-1 mb-10"
                  >
                    Favorite Game
                  </label>
                  <select
                    id="category"
                    name="category"
                    defaultValue={""}
                    className="form-select d-block w-100 rounded-pill text-lg"
                    aria-label="Favorite Game"
                    disabled={isLoading}
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
                </div>
              </div>
              <div className="button-group d-flex flex-column mx-auto">
                <button
                  type="submit"
                  className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                  role="button"
                >
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
