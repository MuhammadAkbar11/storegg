import React from "react";
import MemberPageTitle from "@components/molecules/memberPageTitle";
import OverviewLatestTransactions from "./overviewLatestTransactions";
import OverviewTopupWidgets from "./overviewTopupWidgets";

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
