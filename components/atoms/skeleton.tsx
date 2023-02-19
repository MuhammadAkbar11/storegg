import React from "react";
import clsx from "classnames";

type Props = {
  className?: string;
  width?: number | string;
  height?: number | string;
};

function Skeleton({ height, width, className }: Props) {
  const classNm = clsx("bg-palette-3 animate-pulse ", className);

  const style = {
    width,
    height,
  };

  return <div style={{ ...style }} className={classNm} />;
}

export default Skeleton;
