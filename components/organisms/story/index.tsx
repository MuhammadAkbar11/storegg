import classNames from "classnames";
import Link from "next/link";
import React from "react";
import csx from "classnames";

type Props = {
  reverse: boolean;
  title1nd: string;
  title2nd?: string;
  image: string;
  text: string;
  action?: string;
};

function Story(props: Props) {
  const { reverse, title1nd, title2nd, image, text, action } = props;

  const imageClassname = csx("flex  col-lg-7 col-12 d-lg-flex d-none  ", {
    "order-0 pe-lg-5 ": !reverse,
    "order-1 pe-lg-60 flex justify-content-end": reverse,
  });

  const contentClassname = csx("col-lg-5 col-12 ", {
    "order-1": !reverse,
    "order-0 ps-lg-60": reverse,
  });

  return (
    <section className="story pt-50 pb-100  ">
      <div className="container-xxl container-fluid">
        <div className="row d-flex align-items-center px-lg-5 mx-auto gap-lg-0 gap-4">
          <div className={imageClassname} data-aos="zoom-in">
            <img
              src={image}
              width={612}
              height={452}
              className="img-fluid"
              alt={""}
            />
          </div>
          <div className={contentClassname}>
            <div className="">
              <h2 className="text-4xl fw-bold color-palette-1 mb-30">
                {title1nd}
                {title2nd && <br />}
                {title2nd && title2nd}
              </h2>
              <p className="text-lg color-palette-1 mb-30">{text}</p>
              {action && (
                <div className="d-md-block d-flex flex-column w-100">
                  <Link href={action} passHref>
                    <a
                      className="btn btn-read text-lg rounded-pill"
                      href={action}
                      role="button"
                    >
                      Read Story
                    </a>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Story.defaultProps = {
  reverse: false,
};

export default Story;
