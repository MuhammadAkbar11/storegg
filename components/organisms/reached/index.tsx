import React from "react";
import HorinzontalLine from "../../atoms/horizontalLine";
import VerticalLine from "../../atoms/verticalLine";
import ReachedItem from "../../molecules/reachedItem";

type Props = {};

function Reached({}: Props) {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          <ReachedItem value="290M+" description="Players Top Up" />
          <VerticalLine />
          <HorinzontalLine />
          <ReachedItem value="12.500" description="Games Available" />
          <VerticalLine />
          <HorinzontalLine />
          <ReachedItem value="99.9%" description="Happy Players" />
          <VerticalLine />
          <HorinzontalLine />
          <ReachedItem value="4.7" description="Rating Worldwide" />
        </div>
      </div>
    </section>
  );
}

export default Reached;
