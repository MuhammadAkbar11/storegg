import React from "react";

type Props = {
  title: string;
  className: string;
  children: React.ReactNode;
};

function TransactionDetailsWrapper({ title, className, children }: Props) {
  return (
    <div className={className}>
      <h2 className="fw-bold text-xl color-palette-1 mb-20">{title}</h2>
      {children}
    </div>
  );
}

export default TransactionDetailsWrapper;
