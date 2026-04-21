import React from "react";
import OverviewLatestTransactions from "./overviewLatestTransactions";
import OverviewTopupWidgets from "./overviewTopupWidgets";

import MemberPageTitle from "@components/molecules/memberPageTitle";

type Props = {
  className: string;
};

function OverviewContent({ className }: Props) {
  return (
    <main className={className}>
      <div className="ps-lg-0 ">
        <MemberPageTitle title="Overview" />
        <OverviewTopupWidgets />
        <OverviewLatestTransactions />
      </div>
    </main>
  );
}

export default OverviewContent;
