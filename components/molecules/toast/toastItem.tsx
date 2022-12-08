import React from "react";
import clsx from "classnames";
import { IToast } from "@utility/types/toast";
import { CloseButton, Toast } from "react-bootstrap";
import ToastIcon from "./toastIcon";

interface Props extends IToast {
  onCloseHandler: (id: string) => void;
}

function ToastItem(props: Props) {
  const classNames = clsx({
    "border-danger": props.variant === "error",
    "border-primary": props.variant === "default",
    "border-cyan": props.variant === "info",
    "border-success": props.variant === "success",
  });

  return (
    <Toast className={`bg-white shadow-sm rounded ${classNames}`}>
      <Toast.Body className={""}>
        <div className=" d-flex w-100 align-items-start justify-content-between  pt-2 pb-3 px-2">
          <div className={"opacity-100 d-flex gap-2 align-items-center"}>
            <ToastIcon variant={props.variant} />
            <span className="mt-1 ms-1 text-dark ">{props.message}</span>
          </div>
          <CloseButton
            className=" "
            onClick={() => props.id && props.onCloseHandler(props.id)}
          />
        </div>
      </Toast.Body>
    </Toast>
  );
}

export default ToastItem;
