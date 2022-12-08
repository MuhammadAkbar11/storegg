import React from "react";
import clsx from "classnames";
import { CloseButton, Toast, ToastContainer } from "react-bootstrap";
import { useToastContext } from "@utility/context/ToastContext";
import ToastItem from "../../molecules/toast/toastItem";

type Props = {};

function ToastWrapper({}: Props) {
  const { toasts, onRemoveToast } = useToastContext();

  return (
    <ToastContainer
      position="top-end"
      className="p-3 toast-container-custom mt-3 "
    >
      {toasts
        ? toasts.length !== 0
          ? toasts.map((ts, idx) => {
              return (
                <ToastItem
                  key={idx}
                  id={ts.id}
                  variant={ts.variant}
                  message={ts.message}
                  onCloseHandler={onRemoveToast}
                />
              );
            })
          : null
        : null}
    </ToastContainer>
  );
}

export default ToastWrapper;
