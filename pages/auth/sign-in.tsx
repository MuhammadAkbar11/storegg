import Link from "next/link";
import React from "react";
import Logo from "@atoms/logo";
import SignInCover from "@organisms/auth/signInCover";
import SignInForm from "@organisms/auth/signInForm";

type Props = {};

function SignIn({}: Props) {
  return (
    <>
      <section className="sign-in mx-auto">
        <div className="row">
          <div className="col-xxl-5 col-lg-6 my-auto py-lg-0 pt-lg-50 pb-lg-50 pt-30 pb-47 px-0">
            <form action="/">
              <div className="container mx-auto">
                <div className="pb-50">
                  <Link href={"/"} passHref>
                    <a className="navbar-brand" href="/">
                      <Logo />
                    </a>
                  </Link>
                </div>
                {/*  */}
                <SignInForm />
              </div>
            </form>
          </div>
          <div className="col-xxl-7 col-lg-6 bg-blue text-center pt-lg-145 pb-lg-145 d-lg-block d-none">
            <SignInCover />
          </div>
        </div>
      </section>
    </>
  );
}

export default SignIn;
