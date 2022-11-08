import React, { useEffect } from "react";
import Footer from "@organisms/footer";
import NavbarMenu from "@organisms/navbarMenu";
import TopUpForm from "@organisms/topupForm";
import TopUpGameInfo from "@organisms/topupGameInfo";
import { useRouter } from "next/router";

type Props = {};

function Detail({}: Props) {
  const { isReady, query } = useRouter();

  useEffect(() => {
    if (isReady) {
      console.log("Router is ready");
      console.log(query);
    } else {
      console.log("Router is'nt ready");
    }
  }, [isReady]);

  return (
    <>
      <NavbarMenu />
      {/* Detail Content */}
      <section className="detail pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
          <div className="detail-header pb-50">
            <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">
              Top Up
            </h2>
            <p className="text-lg color-palette-1 mb-0">
              Perkuat akun dan jadilah pemenang
            </p>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
              <TopUpGameInfo view="mobile" />
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
              <TopUpGameInfo view="desktop" />
              <hr />
              <TopUpForm />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Detail;
