import React from "react";
import OverviewWidgetCard from "../../molecules/overviewWidgetCard";

type Props = {};

function OverviewTopupWidgets({}: Props) {
  return (
    <div className="top-up-categories mb-30">
      <p className="text-lg fw-medium color-palette-1 mb-14">
        Top Up Categories
      </p>
      <div className="main-content">
        <div className="row">
          <div className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
            <OverviewWidgetCard
              title="Game Desktop"
              platform="desktop"
              nominal="Rp.180.500.00"
            />
          </div>
          <div className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
            <OverviewWidgetCard
              title="Game Mobile"
              platform="mobile"
              nominal="125.500.00"
            />
          </div>
          <div className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
            <OverviewWidgetCard
              title="Game Mobile"
              platform="others"
              nominal="50.000.00"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverviewTopupWidgets;
