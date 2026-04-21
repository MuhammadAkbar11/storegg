import React from "react";
import StarIcon from "../atoms/icons/starIcon";

type Props = {};

function Rating({}: Props) {
  return (
    <div className="text-warning gap-1 d-flex ">
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <StarIcon />
    </div>
  );
}

export default Rating;
