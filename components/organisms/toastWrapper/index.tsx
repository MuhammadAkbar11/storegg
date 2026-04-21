import React from "react";
import { ToastContainer } from "react-bootstrap";
import { useToastContext } from "@utility/context/ToastContext";
import ToastItem from "../../molecules/toast/toastItem";

type Props = {};

function ToastWrapper({}: Props) {
  const { toasts, onRemoveToast } = useToastContext();

  return (
    <>
      {toasts ? (
        toasts.length !== 0 ? (
          <ToastContainer
            position="top-center"
            className="p-3 toast-container-custom mt-3"
          >
            {toasts.map((ts, idx) => {
              return (
                <ToastItem
                  key={idx}
                  id={ts.id}
                  variant={ts.variant}
                  message={ts.message}
                  hideDelay={ts.hideDelay}
                  onCloseHandler={onRemoveToast}
                />
              );
            })}
          </ToastContainer>
        ) : null
      ) : null}
    </>
  );
}

export default ToastWrapper;
