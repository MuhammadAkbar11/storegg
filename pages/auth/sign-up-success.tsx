import React from "react";
import WalletIcon from "@atoms/icons/walletIcon";

type Props = {};

function SignUpSuccess({}: Props) {
  return (
    <>
      <section className="sign-up-success mx-auto pt-md-179 pb-md-179 pt-150 pb-100">
        <div className="container-fluid">
          <div className="text-center">
            <WalletIcon />
          </div>
          <div className="pt-70 pb-md-50 pb-150">
            <h2 className="text-4xl fw-bold text-center color-palette-1 mb-10">
              Well Done!
            </h2>
            <p className="text-lg text-center color-palette-1 m-0">
              Sign up Berhasil!
              <br className="d-sm-block d-none" />
              Kamu sudah bisa melakukan top up sekarang
              <br className="d-sm-block d-none" />
              dan menjadi pemenang!
            </p>
          </div>
          <div className="button-group d-flex flex-column mx-auto">
            <a
              className="btn btn-top-up fw-medium text-lg text-white rounded-pill"
              href="/auth/sign-in"
              role="button"
            >
              Login Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUpSuccess;
