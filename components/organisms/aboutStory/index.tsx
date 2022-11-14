import React from "react";

type Props = {
  type: "top" | "bottom";
};

function AboutStory({ type }: Props) {
  if (type === "bottom") {
    return (
      <section className="pt-50 pb-50 pt-lg-100 pb-lg-100 about-story-2 ">
        <div className="container-xxl container-fluid">
          <div className="row d-flex align-items-center px-lg-5 mx-auto gap-lg-0 gap-4">
            <div
              className={
                "flex col-lg-7 col-12 d-lg-flex d-none order-1 ps-lg-60 "
              }
              data-aos="zoom-in"
            >
              <img
                src={"/img/Header-10.png"}
                width={612}
                height={452}
                className="img-fluid"
                alt={""}
              />
            </div>
            <div className={`col-lg-5 col-12 pe-lg-60`}>
              <div className=" ">
                <h2 className="text-4xl fw-bold text-center text-lg-start  color-palette-1 mb-30 text-capitalize ">
                  your online game <br />
                  exciting and fun
                </h2>
                <p className="text-lg color-palette-1 text-center text-lg-start  mb-30 ">
                  Cheap and safe way to buy vouchers and we offer the best
                  prices and discounts. We are providing the latest voucher
                  games and daily deals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className=" pt-50 pb-50 pt-lg-80 pb-lg-100 ">
      <div className="container-xxl container-fluid">
        <div className="row d-flex align-items-center px-lg-5 mx-auto gap-lg-0 gap-4">
          <div
            className={"flex  col-lg-6 col-12 d-lg-flex d-none"}
            data-aos="zoom-in"
          >
            <img
              src={"/img/Header-4.png"}
              // width={612}
              // height={452}
              className="img-fluid"
              alt={""}
            />
          </div>
          <div className={`col-lg-6 col-12 ps-lg-60`}>
            <div className=" ">
              <h2 className="text-4xl fw-bold color-palette-1 mb-30 text-center text-lg-start ">
                What is StoreGG?
              </h2>
              <p className="text-lg color-palette-1 mb-20 text-center text-lg-start   ">
                StoreGG is the biggest and most trusted game voucher top-up
                website in Indonesia. We offer game vouchers for mobile
                platforms, desktops, consoles, etc.
              </p>
              <p className="text-lg color-palette-1 mb-30 text-center text-lg-start   ">
                We have over 1 million players. There are over a thousand
                vouchers on the site.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

AboutStory.defaultProps = {
  type: "top",
};

export default AboutStory;
