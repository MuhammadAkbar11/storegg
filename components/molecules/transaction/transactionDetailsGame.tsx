import React from "react";
import clsx from "classnames";
import type { Platform } from "@utility/types";

type Props = {
  image: string;
  title: string;
  platform: Platform | string;
  type: "Checkout" | "TransactionDetails";
  status?: string;
};

function TransactionDetailsGame({
  image,
  title,
  platform,
  status,
  type,
}: Props) {
  const wrapperClassName = clsx(
    "game-checkout d-flex flex-row align-items-center",
    {
      "pt-md-50 pb-md-50 pt-30 pb-30": type === "Checkout",
    }
  );

  let gameImage = <img src={image} className="img-fluid" alt={"Thumbnail-3"} />;

  if (type === "TransactionDetails") {
    gameImage = (
      <img src={image} width={200} height={130} className="img-fluid" alt="" />
    );
  }

  return (
    <>
      <div className={wrapperClassName}>
        <div className="pe-4">
          <div className="cropped">{gameImage}</div>
        </div>
        <div>
          <p className="fw-bold text-xl color-palette-1 mb-10">{title}</p>
          <p className="color-palette-2 m-0">Category: {platform}</p>
        </div>
      </div>
      {status && (
        <div>
          <p
            className={`fw-medium text-center label ${status} m-0 rounded-pill text-capitalize`}
          >
            {status}
          </p>
        </div>
      )}
    </>
  );
}

export default TransactionDetailsGame;
