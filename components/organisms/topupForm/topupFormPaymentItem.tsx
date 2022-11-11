import { PaymentMethodType } from "@globals/types";
import React from "react";

type Props = {
  title: string;
  text: string;
  onChangePayMethod: (method: PaymentMethodType) => void;
};

function TopupFormPaymentItem({ title, text, onChangePayMethod }: Props) {
  const method = title.trim().toLowerCase() as PaymentMethodType;
  return (
    <label
      className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
      htmlFor={title.trim()}
    >
      <input
        className="d-none"
        type="radio"
        id={title.trim()}
        name="paymentMethod"
        defaultValue={title.trim()}
        onChange={() => onChangePayMethod(method)}
      />
      <div className="detail-card">
        <div className="d-flex justify-content-between">
          <p className="text-3xl color-palette-1 fw-medium m-0">{title}</p>
          <svg
            id="icon-check"
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx={10} cy={10} r={10} fill="#CDF1FF" />
            <path
              d="M5.83301 10L8.46459 12.5L14.1663 7.5"
              stroke="#00BAFF"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="text-lg color-palette-1 m-0 text-capitalize ">{text}</p>
      </div>
    </label>
  );
}

export default TopupFormPaymentItem;
