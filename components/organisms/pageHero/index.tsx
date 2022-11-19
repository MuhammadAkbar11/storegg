import React from "react";
import clsx from "classnames";

type Props = {
  title: React.ReactNode | string;
  text: React.ReactNode | string;
  align?: "start" | "center";
};

function PageHero({ title, text, align }: Props) {
  const rowClassName = clsx("row", {
    "justify-content-center": align === "center",
    "justify-content-start": align === "start",
  });

  const colClassName = clsx("col-md-6 col-lg-4 col-11", {
    "text-center": align === "center",
    "text-start": align === "start",
  });

  return (
    <section className="pt-5 pb-4 hero ">
      <div className="container">
        <div className={rowClassName}>
          <div className={colClassName}>
            <h1 className="hero-title fw-bold color-palette-1 mb-1 lh-base">
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
  align: "center",
};

export default PageHero;
