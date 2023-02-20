import { title } from "process";
import React from "react";
import GameDesktopIcon from "../../atoms/icons/gameDesktopIcon";
import GameMobileIcon from "../../atoms/icons/gameMobileIcon";
import GameOthersIcon from "../../atoms/icons/gameOthersIcon";

type Props = {
  title: string;
  nominal: string;
  platform: string;
};

function OverviewWidgetCard({ platform, title, nominal }: Props) {
  let icon = <GameOthersIcon />;

  if (platform == "desktop") {
    icon = <GameDesktopIcon />;
  } else if (platform == "mobile") {
    icon = <GameMobileIcon />;
  }

  return (
    <div className="categories-card">
      <div className="d-flex align-items-center mb-24">
        {icon}
        <p className="color-palette-1 mb-0 ms-12">
          {title.split(" ")[0]}
          <br /> {title.split(" ")[1]}
        </p>
      </div>
      <div>
        <p className="text-sm color-palette-2 mb-1">Total Spent</p>
        <p className="text-2xl color-palette-1 fw-medium m-0">{nominal}</p>
      </div>
    </div>
  );
}

export default OverviewWidgetCard;
