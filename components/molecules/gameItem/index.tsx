import Image from "next/image";
import Link from "next/link";
import React from "react";
import GameConsoleIcon from "@atoms/icons/gameConsoleIcon";

type Props = {
  name: string;
  platform: string;
  image: string;
  link: string;
};

function GameItem(props: Props) {
  const { name, platform, image, link } = props;
  return (
    <div className="featured-game-card position-relative">
      <Link href={link} passHref>
        <a href={link}>
          <div className="blur-sharp">
            <div className="featured-game-card-img">
              <Image
                layout="fill"
                style={{ objectFit: "cover" }}
                src={image}
                alt={"featured-game-card"}
              />
            </div>
          </div>
          <div className="cover position-absolute bottom-0 m-32">
            <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
              <div className="game-icon mx-auto">
                <GameConsoleIcon />
              </div>
              <div>
                <p className="fw-semibold text-white text-xl m-0 cover-name ">
                  {name}
                </p>
                <p className="fw-light text-white m-0">{platform}</p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}

GameItem.defaultProps = {
  image: "/img/Thumbnail-1.png",
  link: "/detail",
};

export default GameItem;
