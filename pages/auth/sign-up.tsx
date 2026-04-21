import Link from "next/link";
import React from "react";
import Logo from "@atoms/logo";
import SignUpForm from "@organisms/auth/signUpForm";
import Layout from "@components/organisms/layout";
import { useSignupContext } from "@utility/context/SignupContext";
import ToastTrigger from "@components/molecules/toast/toastTrigger";
import useAuth from "@hooks/useAuth";
import { useRouter } from "next/router";
import useOnMount from "@hooks/useOnMount";
import SkeletonSignUp from "@components/organisms/skeleton/skeletonSignUp";

type Props = {};

function SignUp({}: Props) {
  const { error } = useSignupContext();
  const { isLoading, isAuth } = useAuth({});
  const router = useRouter();

  useOnMount(() => {
    if (isAuth) {
      router.push("/");
    }
  }, []);

  return (
    <Layout navbar={false} footer={false} pageTitle="Sign up">
      {error ? (
        !error.name.includes("VALIDATION") ? (
          <ToastTrigger
            show={true}
            variant="error"
            message={"Sign Up failed! Please try again"}
          />
        ) : null
      ) : null}
      <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
        <div className="container mx-auto">
          <div className="pb-50">
            <Link href="/" passHref>
              <a className="navbar-brand" href="/">
                <Logo />
              </a>
            </Link>
          </div>
          {isLoading ? <SkeletonSignUp /> : null}
          {!isLoading ? (
            <>
              <h2 className="text-4xl fw-bold color-palette-1 mb-10">
                Sign Up
              </h2>
              <p className="text-lg color-palette-1 m-0">
                Daftar dan bergabung dengan kami
              </p>
              <SignUpForm />
            </>
          ) : null}
        </div>
      </section>
    </Layout>
  );
}

export default SignUp;
