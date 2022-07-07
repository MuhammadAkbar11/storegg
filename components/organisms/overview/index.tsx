import React from "react";
import OverviewLatestTransactions from "./overviewLatestTransactions";
import OverviewTopupWidgets from "./overviewTopupWidgets";

type Props = {};

function OverviewContent({}: Props) {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <OverviewTopupWidgets />
        <OverviewLatestTransactions />
      </div>
    </main>
  );
}

export default OverviewContent;
