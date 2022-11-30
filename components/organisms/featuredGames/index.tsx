import React from "react";
import { getFeaturedGameService } from "@services/player.service";
import GameItem from "@molecules/gameItem";
import { useQuery } from "react-query";

type Props = {};

function FeaturedGames({}: Props) {
  const {
    data: featuredGames,
    isLoading,
    isSuccess,
  } = useQuery("featuredGames", () =>
    getFeaturedGameService({ limit: 5, page: 1, sortBy: "featured" })
  );

  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br /> Games This Year
        </h2>
        {isLoading ? (
          <div className=" w-full d-flex justify-content-center py-5 ">
            <div className="spinner-border color-palette-4" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : null}
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-start gap-lg-3 gap-4 pb-3 "
          data-aos="fade-up"
        >
          {isSuccess
            ? featuredGames?.map(gm => {
                return (
                  <GameItem
                    key={gm.voucherId}
                    name={gm.gameName}
                    link={`/detail/${gm.voucherId}`}
                    image={gm.thumbnail}
                    platform={gm.category}
                  />
                );
              })
            : null}
        </div>
      </div>
    </section>
  );
}

export default FeaturedGames;
