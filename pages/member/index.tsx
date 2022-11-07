import Head from "next/head";
import React from "react";
import OverviewContent from "@organisms/overview";
import Sidebar from "@organisms/sidebar";

type Props = {};

function Member({}: Props) {
  return (
    <>
      {/* Overview */}
      <Head>
        <title>Member Dashboard | StoreGG</title>;
      </Head>
      <section className="overview overflow-auto">
        <Sidebar activePath="/member" />
        <OverviewContent />
      </section>
    </>
  );
}

export default Member;
