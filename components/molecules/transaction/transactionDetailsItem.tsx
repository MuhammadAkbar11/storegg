import React from "react";
import clx from "classnames";
type Props = {
  label: string;
  value: string;
  highlight?: boolean;
  highlightIsPaid?: "paid" | "unpaid";
};

function TransactionDetailsItem({
  label,
  value,
  highlight,
  highlightIsPaid,
}: Props) {
  const valueClassName = clx("checkout-details-value", {
    "color-palette-4": highlight,
    "text-secondary ": highlightIsPaid === "paid",
    "text-palette-3": highlightIsPaid === "unpaid",
  });

  return (
    <p className="text-lg color-palette-1 mb-20">
      {label}
      <span className={valueClassName}>{value}</span>
    </p>
  );
}

export default TransactionDetailsItem;
