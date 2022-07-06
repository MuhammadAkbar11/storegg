import React from "react";
import clx from "classnames";
type Props = {
  label: string;
  value: string;
  highlight?: boolean;
};

function CheckoutDetailsItem({ label, value, highlight }: Props) {
  const valueClassName = clx("checkout-details-value", {
    "color-palette-4": highlight,
  });

  return (
    <p className="text-lg color-palette-1 mb-20">
      {label}
      <span className={valueClassName}>{value}</span>
    </p>
  );
}

export default CheckoutDetailsItem;
