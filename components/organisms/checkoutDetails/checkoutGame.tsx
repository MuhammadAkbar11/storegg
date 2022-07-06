import React from "react";

type Props = {
  image: string;
  title: string;
  platform: string;
};

function CheckoutGame({ image, title, platform }: Props) {
  let title1nd: string;
  let title2nd: string | null;
  const titleToArr = title.split(" ");

  if (titleToArr.length > 2) {
    title1nd = titleToArr.splice(0, 2).join(" ");
    title2nd = titleToArr.slice(0, titleToArr.length).join(" ");
  } else if (titleToArr.length <= 2) {
    title1nd = titleToArr.splice(0, 1).join(" ");
    title2nd = titleToArr.slice(0).join(" ");
  } else {
    title1nd = title;
    title2nd = null;
  }

  return (
    <div className="game-checkout d-flex flex-row align-items-center pt-md-50 pb-md-50 pt-30 pb-30">
      <div className="pe-4">
        <div className="cropped">
          <img src={image} className="img-fluid" alt={"Thumbnail-3"} />
        </div>
      </div>
      <div>
        <p className="fw-bold text-xl color-palette-1 mb-10">
          {title1nd}
          {title2nd && <br />}
          {title2nd && title2nd}
        </p>
        <p className="color-palette-2 m-0">Category: {platform}</p>
      </div>
    </div>
  );
}

export default CheckoutGame;
