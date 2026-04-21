import React from "react";
import OverviewWidgetCard from "../../molecules/overviewWidgetCard";
import { ICategory } from "@utility/types";
import useGetOverview from "@hooks/useGetOverview";
import Skeleton from "@components/atoms/skeleton";
import { uRupiah } from "@utility/index.utils";

type Props = {
  // categories: ICategory & { totalValue: string };
  // isLoading: boolean;
};

type Widgets = ICategory & {
  totalValue: string;
};

function OverviewTopupWidgets({}: Props) {
  const overview = useGetOverview();
  const categories = overview.data?.topupCategories as Widgets[];
  return (
    <div className="top-up-categories mb-30">
      <p className="text-lg fw-medium color-palette-1 mb-14">
        Top Up Categories
      </p>
      <div className="main-content">
        {overview.isLoading ? (
          <div className="row">
            {Array(3)
              .fill(null)
              .map((_, idx) => {
                return (
                  <div key={idx} className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
                    <Skeleton
                      height={168}
                      styles={{
                        borderRadius: "1rem",
                      }}
                    />
                  </div>
                );
              })}
          </div>
        ) : null}
        {!overview.isLoading ? (
          <div className="row">
            {categories?.map(c => {
              const platform = c.name.toLowerCase() as string;
              return (
                <div
                  key={c.categoryId}
                  className="col-md-6 col-lg-4 ps-15 pe-15 pb-lg-0 pb-4"
                >
                  <OverviewWidgetCard
                    title={`Game ${c.name}`}
                    platform={platform}
                    nominal={c?.totalValue ? uRupiah(+c?.totalValue) : "Rp. 0"}
                  />
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default OverviewTopupWidgets;
