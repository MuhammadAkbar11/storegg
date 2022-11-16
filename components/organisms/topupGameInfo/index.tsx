import { IGameDetailItem } from "@utility/types";
import React from "react";

type Props = {
  view: "desktop" | "mobile";
  gameInfo: IGameDetailItem;
};

function TopUpGameInfo({ view, gameInfo }: Props) {
  if (view == "desktop") {
    return (
      <div className="pb-50 d-md-block d-none">
        <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10 mt-10">
          {gameInfo.gameName}
        </h2>
        <p className="text-lg color-palette-2 mb-0">
          Category: {gameInfo.category}
        </p>
      </div>
    );
  }

  return (
    <div className="row align-items-center">
      <div className="col-md-12 col-4">
        <img
          src={gameInfo.thumbnail}
          width={280}
          height={380}
          className="img-fluid"
          alt={""}
        />
      </div>
      {/* Mobile: Game title */}
      <div className="col-md-12 col-8 d-md-none d-block">
        <h2 className="text-xl fw-bold color-palette-1 text-start mb-10 mt-10">
          {gameInfo.gameName}
        </h2>
        <p className="text-sm color-palette-2 text-start mb-0">
          Category: {gameInfo.category}
        </p>
      </div>
    </div>
  );
}

export default TopUpGameInfo;
