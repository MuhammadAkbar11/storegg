import Skeleton from "@components/atoms/skeleton";
import React from "react";

type Props = {};

function SkeletonSignUp({}: Props) {
  return (
    <section className="pb-5">
      <Skeleton width={130} height={40} className="mb-20 rounded " />
      <Skeleton width={"60%"} height={29} className="mb-40 rounded" />
      <div className="mb-4">
        <Skeleton
          width={"100px"}
          height={"1.150rem"}
          className="mb-3 rounded"
        />
        <Skeleton width={"100%"} height={55} className="mb-2 rounded-pill " />
      </div>
      <div className="mb-4">
        <Skeleton
          width={"120px"}
          height={"1.150rem"}
          className="mb-3 rounded"
        />
        <Skeleton width={"100%"} height={55} className="mb-2 rounded-pill " />
      </div>
      <div className="mb-4">
        <Skeleton
          width={"100px"}
          height={"1.150rem"}
          className="mb-3 rounded"
        />
        <Skeleton width={"100%"} height={55} className="mb-2 rounded-pill " />
      </div>
      <div className="mb-5">
        <Skeleton
          width={"105px"}
          height={"1.150rem"}
          className="mb-3 rounded"
        />
        <Skeleton width={"100%"} height={55} className="mb-2 rounded-pill " />
      </div>
      <div>
        <Skeleton width={"100%"} height={54} className="mb-3 rounded-pill " />
        <Skeleton width={"100%"} height={54} className="mb-2 rounded-pill " />
      </div>
    </section>
  );
}

export default SkeletonSignUp;
