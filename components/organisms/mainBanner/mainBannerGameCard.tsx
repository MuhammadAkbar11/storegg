import React from "react";

type Props = {};

function MainBannerGameCard({}: Props) {
  return (
    <div className="card right-card position-absolute border-0">
      <div className="position-relative d-flex flex-row justify-content-center mb-24">
        <img
          src="/img/Header-3.png"
          className="rounded-pill"
          alt={"BannerGame"}
        />
        <p className="right-card-support text-white text-xxs text-center position-absolute m-0">
          New
        </p>
      </div>
      <div>
        <p className="text-sm text-center m-0 fw-medium color-palette-1">
          Lann Knight
        </p>
        <p className="fw-light text-center m-0 color-palette-2 text-xs">
          Dota 2
        </p>
      </div>
    </div>
  );
}

export default MainBannerGameCard;
