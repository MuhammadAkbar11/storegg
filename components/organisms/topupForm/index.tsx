import React from "react";
import type { PaymentMethodType } from "@utility/types";
import { useGameDetailContext } from "@context/GameDetailContext";
import TopupFormNomianlList from "./topupFormNomianlList";
import TopupFormPaymentItem from "./topupFormPaymentItem";
import TopupFormTransferBank from "./topUpTransferBank";

type Props = {};

function TopUpForm({}: Props) {
  const { banks } = useGameDetailContext();

  const [payMethod, setPayMethod] =
    React.useState<PaymentMethodType | null>(null);

  const onChangePayment = (method: PaymentMethodType) => {
    setPayMethod(method);
  };

  // const banksList =

  return (
    <form action="./checkout.html" method="POST">
      <div className="pt-md-50 pt-30">
        <div className="">
          <label
            htmlFor="ID"
            className="form-label text-lg fw-medium color-palette-1 mb-10"
          >
            Verify ID
          </label>
          <input
            type="text"
            className="form-control rounded-pill text-lg"
            id="ID"
            name="ID"
            aria-describedby="verifyID"
            placeholder="Enter your ID"
          />
        </div>
      </div>
      <div className="pt-md-50 pb-md-50 pt-30 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Nominal Top Up
        </p>
        <div className="row justify-content-between">
          <TopupFormNomianlList />
          <div className="col-lg-4 col-sm-6">{/* Blank */}</div>
        </div>
      </div>
      <div className="pb-md-50 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Payment Method
        </p>
        <fieldset id="paymentMethod">
          <div className="row justify-content-between">
            <TopupFormPaymentItem
              onChangePayMethod={onChangePayment}
              title="Transfer"
              text="Worldwide Available"
            />
            <TopupFormPaymentItem
              onChangePayMethod={onChangePayment}
              title="Visa"
              text="Credit Card"
            />
            <TopupFormPaymentItem
              onChangePayMethod={onChangePayment}
              title="Paypal"
              text="Simple and fast"
            />
            <div className="col-lg-4 col-sm-6">{/* Blank */}</div>
          </div>
        </fieldset>
      </div>
      {payMethod && payMethod === "transfer" ? (
        <div className="pb-md-50 pb-20">
          <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
            Select Bank To Transfer
          </p>
          <fieldset id="bankTransfer">
            <div className="row justify-content-between">
              {banks.map(bnk => {
                return (
                  <TopupFormTransferBank
                    bankId={bnk?.bankId}
                    key={bnk?.bankId}
                    bankName={bnk?.bankName}
                    accountName={bnk?.accountName}
                    noRekening={bnk?.noRekening}
                  />
                );
              })}
              <div className="col-lg-4 col-sm-6">{/* Blank */}</div>
            </div>
          </fieldset>
        </div>
      ) : null}
      {payMethod && payMethod === "transfer" ? (
        <div className="pb-50">
          <label
            htmlFor="bankAccount"
            className="form-label text-lg fw-medium color-palette-1 mb-10"
          >
            Bank Account Name
          </label>
          <input
            type="text"
            className="form-control rounded-pill text-lg"
            id="bankAccount"
            name="bankAccount"
            aria-describedby="bankAccount"
            placeholder="Enter your Bank Account Name"
          />
        </div>
      ) : null}

      <div className="d-sm-block d-flex flex-column w-100">
        <a
          href="/checkout"
          type="submit"
          className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
        >
          Continue
        </a>
        {/* <button type="submit"
                          class="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg">Continue</button> */}
      </div>
    </form>
  );
}

export default TopUpForm;
