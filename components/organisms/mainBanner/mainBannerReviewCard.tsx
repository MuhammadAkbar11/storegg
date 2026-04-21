import React from "react";
import Rating from "../../molecules/Rating";

type Props = {
  avatar: string;
  name: string;
  profession: string;
};

function MainBannerCardReview({ avatar, name, profession }: Props) {
  return (
    <div className="card left-card position-absolute border-0">
      <div className="d-flex align-items-center mb-16 gap-3">
        <img
          src={avatar}
          width={40}
          height={40}
          className="rounded-pill"
          alt={"BannerReview"}
        />
        <div>
          <p className="text-sm fw-medium color-palette-1 m-0">{name}</p>
          <p className="text-xs fw-light color-palette-2 m-0">{profession}</p>
        </div>
      </div>
      <div className="d-flex gap-2">
        <Rating />
      </div>
    </div>
  );
}

export default MainBannerCardReview;
