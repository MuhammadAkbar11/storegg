import React from "react";
import {
  getFeaturedGameService,
  IGame,
} from "../../../services/player.service";
import GameItem from "../../molecules/gameItem";

type Props = {};

function FeaturedGames({}: Props) {
  const [loadingFeaturedGames, setLoadingFeatured] = React.useState(true);
  const [featuredGames, setFeaturedGames] = React.useState<IGame[]>([]);

  React.useEffect(() => {
    const getVoucher = async () => {
      const games = await getFeaturedGameService({
        limit: 5,
        page: 1,
      });
      console.log(games);
      setFeaturedGames(games);
    };

    getVoucher();
  }, []);

  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br /> Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-start gap-lg-3 gap-4 pb-3 "
          data-aos="fade-up"
        >
          {featuredGames &&
            featuredGames.map(gm => {
              return (
                <GameItem
                  key={gm.voucherId}
                  name={gm.gameName}
                  link={`/detail/${gm.voucherId}`}
                  image={gm.thumbnail}
                  platform={gm.category}
                />
              );
            })}
          {/* <GameItem
            name="Pubg Mobile"
            link="/detail/pubg-mobile"
            image="/img/Thumbnail-6.png"
            platform="Mobile"
          />
          <GameItem
            name="Valorant"
            link="/detail/pubg-mobile"
            image="/img/Thumbnail-5.png"
            platform="Desktop"
          />
          <GameItem
            name="Dota 2"
            link="/detail/pubg-mobile"
            image="/img/Thumbnail-8.png"
            platform="Desktop"
          />
          <GameItem
            name="Mobile Legends"
            link="/detail/pubg-mobile"
            image="/img/Thumbnail-3.png"
            platform="Mobile"
          />
          <GameItem
            name="Free Fire"
            link="/detail/pubg-mobile"
            image="/img/Thumbnail-7.png"
            platform="Mobile"
          /> */}
        </div>
      </div>
    </section>
  );
}

export default FeaturedGames;
