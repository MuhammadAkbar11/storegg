import React from "react";
import FeatureStepTransactionItem from "@molecules/featureStepTransactionItem";

type Props = {};

function FeatureStepTransaction({}: Props) {
  return (
    <section id="feature" className="feature pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">
          It’s Really That
          <br /> Easy to Win the Game
        </h2>
        <div className="row gap-lg-0 gap-4" data-aos="fade-up">
          <div className="col-lg-4">
            <FeatureStepTransactionItem
              variant="step1"
              title="1. Start"
              topText="Pilih salah satu game"
              bottomText="yang ingin kamu top up"
            />
          </div>
          <div className="col-lg-4">
            <FeatureStepTransactionItem
              variant="step2"
              title="2. Fill Up"
              topText="Top up sesuai dengan"
              bottomText="nominal yang sudah tersedia"
            />
          </div>
          <div className="col-lg-4">
            <FeatureStepTransactionItem
              variant="step3"
              title="3. Be a Winner"
              topText="Siap digunakan untuk"
              bottomText="improve permainan kamu"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureStepTransaction;
