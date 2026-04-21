import React from "react";
import FeatureStepTransactionItem from "@molecules/featureStepTransactionItem";

type Props = {};

function OurServices({}: Props) {
  return (
    <section id="feature" className="feature pt-50 pb-50 pb-lg-145">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">
          Why should you
          <br /> Choose StoreGG
        </h2>
        <div
          className="row gap-lg-0 gap-4 flex align-items-stretch "
          data-aos="fade-up"
        >
          <div className="col-lg-4 ">
            <FeatureStepTransactionItem
              variant="step1"
              title="Simple and Easy"
              topText="Just a few steps and you'll be ready to improve your game play"
            />
          </div>
          <div className="col-lg-4">
            <FeatureStepTransactionItem
              variant="step2"
              title="Secure Payment"
              topText="We provides leading online payments, which provides you with a secure payment method to help you top-up,"
            />
          </div>
          <div className="col-lg-4">
            <FeatureStepTransactionItem
              variant="step3"
              title="Best Service"
              topText="We are doing our best to provide the best service to our customers"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurServices;
