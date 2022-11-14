import React from "react";

type Props = {
  title: React.ReactNode | string;
  text: React.ReactNode | string;
};

function PageHero({ title, text }: Props) {
  return (
    <section className="pt-5 pb-4 ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-11 text-center">
            <h1 className="text-5xl fw-bold color-palette-1 mb-1 lh-base">
              {title}
            </h1>
            <p className="text-md color-palette-6">{text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

PageHero.defaultProps = {
  title: "Page Hero",
  text: "We provide millions of ways to help players become real winners.",
};

export default PageHero;
