import Link from "next/link";
import React from "react";
import MainBannerGameCard from "./mainBannerGameCard";
import MainBannerReviewCard from "./mainBannerReviewCard";

type Props = {};

function MainBanner({}: Props) {
  return (
    <section className="header pt-lg-60 pb-50">
      <div className="container-xxl container-fluid">
        <div className="row gap-lg-0 gap-5">
          <div className="col-lg-6 col-12 my-auto">
            <p className="text-support text-lg color-palette-2">Halo gamers,</p>
            <h1 className="header-title color-palette-1 fw-bold">
              Topup &amp; Get <span className="d-sm-inline d-none">a</span>
              <span className="d-sm-none d-inline">a</span>
              <span className="underline-blue"> New</span>{" "}
              <br className="d-sm-block d-none" />{" "}
              <span className="underline-blue">Experience</span> in Gaming
            </h1>
            <p className="mt-30 mb-40 text-lg color-palette-1">
              Kami menyediakan jutaan cara untuk membantu
              <br className="d-md-block d-none" /> players menjadi pemenang
              sejati
            </p>
            <div className="d-flex flex-sm-row flex-column gap-4">
              <Link passHref href={"/auth/sign-up"}>
                <a
                  className="btn btn-get text-lg text-white rounded-pill"
                  href="/auth/sign-up"
                  role="button"
                >
                  Get Started
                </a>
              </Link>
              {/* <Link  href="/games"> */}
              <a
                className="btn-learn text-lg color-palette-1 my-auto text-center"
                href="#feature"
                role="button"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-12 d-lg-block d-none">
            <div className="d-flex justify-content-lg-end justify-content-center me-lg-5">
              <div className="position-relative" data-aos="zoom-in">
                <img
                  src="/img/Header-1.png"
                  className="img-fluid"
                  alt={"MainBanner"}
                />
                <MainBannerReviewCard
                  avatar="/img/avatar-1.png"
                  name="Jieun"
                  profession="Professional Gamer"
                />
                <MainBannerGameCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainBanner;
