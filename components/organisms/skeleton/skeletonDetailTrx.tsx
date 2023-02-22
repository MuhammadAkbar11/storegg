import Skeleton from "@components/atoms/skeleton";
import TransactionDetailsItem from "@components/molecules/transaction/transactionDetailsItem";
import TransactionDetailsWrapper from "@components/molecules/transaction/transactionDetailsWrapper";
import React from "react";

type Props = {};

function SkeletonDetailTrx({}: Props) {
  return (
    <section className="checkout mx-auto mb-30">
      <div className="d-flex flex-row  align-items-center justify-content-between mb-30">
        <div
          className={
            "game-checkout d-flex flex-row align-items-center flex-grow-1  "
          }
        >
          <div className="pe-4 ">
            <div className="cropped">
              <Skeleton width={200} height={130} />
            </div>
          </div>
          <div className="flex-grow-1 ">
            <Skeleton width={"80%"} height={28} className="mb-3 rounded" />
            <Skeleton width={100} height={18} className="rounded" />
          </div>
        </div>
        <div>
          <Skeleton width={120} height={40} className="rounded-pill" />
        </div>
      </div>
      <hr />
      <div className={"pt-30"}>
        <Skeleton width={200} height={28} className=" rounded mb-20 " />
        <div className="pb-10 pt-10 d-flex flex-column flex-md-row align-items-md-center justify-content-md-between  ">
          <Skeleton
            width={"20rem"}
            height={22}
            className=" rounded mb-10 mb-md-0 "
          />
          <Skeleton width={150} height={22} className=" rounded " />
        </div>
        {Array(5)
          .fill(null)
          .map((_, idx) => {
            return (
              <div className="pb-10 pt-10 d-flex flex-column flex-md-row align-items-md-center justify-content-md-between  ">
                <Skeleton
                  width={"20rem"}
                  height={22}
                  className=" rounded mb-10 mb-md-0 "
                />
                <Skeleton width={150} height={22} className=" rounded " />
              </div>
            );
          })}
      </div>
      <div className={"pt-30"}>
        <Skeleton width={200} height={28} className=" rounded mb-20 " />
        <div className="pb-10 pt-10 d-flex flex-column flex-md-row align-items-md-center justify-content-md-between  ">
          <Skeleton
            width={"20rem"}
            height={22}
            className=" rounded mb-10 mb-md-0 "
          />
          <Skeleton width={150} height={22} className=" rounded " />
        </div>
        {Array(5)
          .fill(null)
          .map((_, idx) => {
            return (
              <div className="pb-10 pt-10 d-flex flex-column flex-md-row align-items-md-center justify-content-md-between  ">
                <Skeleton
                  width={"20rem"}
                  height={22}
                  className=" rounded mb-10 mb-md-0 "
                />
                <Skeleton width={150} height={22} className=" rounded " />
              </div>
            );
          })}
      </div>
    </section>
  );
}

export default SkeletonDetailTrx;
