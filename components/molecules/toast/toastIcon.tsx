import React from "react";
import clsx from "classnames";
import ErrorIcon from "@components/atoms/icons/errorIcon";
import InfoIcon from "@components/atoms/icons/infoIcon";
import { ToastVariantsType } from "@utility/types/toast";
import CheckIcon from "@components/atoms/icons/checkIcon";

type IconOptions = {
  error: JSX.Element;
  default: JSX.Element;
  success: JSX.Element;
  info: JSX.Element;
};

type Props = { variant: ToastVariantsType };

function ToastIcon({ variant }: Props) {
  const icons: IconOptions = {
    error: <ErrorIcon />,
    default: <InfoIcon />,
    success: <CheckIcon />,
    info: <InfoIcon />,
  };

  const Icon = icons[variant as keyof IconOptions];
  const classNames = clsx("my-0 ", {
    "text-danger": variant === "error",
    "text-primary": variant === "default",
    "text-cyan ": variant === "info",
    "text-success": variant === "success",
  });

  return (
    <div
      className={classNames}
      style={{ minHeight: 25, minWidth: 25, maxHeight: 32, maxWidth: 32 }}
    >
      {Icon}
    </div>
  );
}

export default ToastIcon;
