import Link from "next/link";
import React from "react";
import Logo from "../../components/atoms/logo";
import SignUpForm from "../../components/organisms/auth/signUpForm";

type Props = {};

function SignUp({}: Props) {
  return (
    <>
      {/* Sign Up */}

      <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
        <div className="container mx-auto">
          <form action="#/">
            <div className="pb-50">
              <Link href="/" passHref>
                <a className="navbar-brand" href="/">
                  <Logo />
                </a>
              </Link>
            </div>
            <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign Up</h2>
            <p className="text-lg color-palette-1 m-0">
              Daftar dan bergabung dengan kami
            </p>
            <SignUpForm />
          </form>
        </div>
      </section>
    </>
  );
}

export default SignUp;
