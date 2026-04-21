import React from "react";
import clsx from "classnames";

type Props = {
  className?: string;
  width?: number | string;
  height?: number | string;
  styles?: React.CSSProperties;
};

function Skeleton({ height, width, className, styles }: Props) {
  const classNm = clsx("bg-palette-3 animate-pulse ", className);

  const stylex = {
    width,
    height,
    ...styles,
  };

  return <div style={{ ...stylex }} className={classNm} />;
}

export default Skeleton;
