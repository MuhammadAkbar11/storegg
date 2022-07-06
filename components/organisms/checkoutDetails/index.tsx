import React from "react";
// import clx from "classnames"

type Props = {
  title: string;
  className: string;
  children: React.ReactNode;
};

function CheckoutDetails({ title, className, children }: Props) {
  // const sectionClassNames = clx(className, {})
  // "purchase pt-md-50 pt-30"
  return (
    <div className={className}>
      <h2 className="fw-bold text-xl color-palette-1 mb-20">{title}</h2>
      {children}
      {/* <p className="text-lg color-palette-1 mb-20">
        Your Game ID <span className="purchase-details">masayoshizero</span>
      </p>
      <p className="text-lg color-palette-1 mb-20">
        Order ID <span className="purchase-details">#GG001</span>
      </p>
      <p className="text-lg color-palette-1 mb-20">
        Item <span className="purchase-details">250 Diamonds</span>
      </p>
      <p className="text-lg color-palette-1 mb-20">
        Price <span className="purchase-details">Rp 42.280.500</span>
      </p>
      <p className="text-lg color-palette-1 mb-20">
        Tax (10%) <span className="purchase-details">Rp 4.228.000</span>
      </p>
      <p className="text-lg color-palette-1 mb-20">
        Total{" "}
        <span className="purchase-details color-palette-4">Rp 55.000.600</span>
      </p> */}
    </div>
  );
}

export default CheckoutDetails;
