import React from "react";
import clsx from "classnames";
import { CloseButton, Toast, ToastContainer } from "react-bootstrap";
import { useToastContext } from "@utility/context/ToastContext";

type Props = {};

function ToastWrapper({}: Props) {
  const { toasts, onRemoveToast } = useToastContext();

  return (
    // <div
    //   aria-live="polite"
    //   aria-atomic="true"
    //   className="bg-dark position-fixed"
    //   style={{ minHeight: "240px" }}
    // >
    <ToastContainer
      position="top-end"
      className="p-3 toast-container-custom mt-3 "
    >
      {toasts
        ? toasts.length !== 0
          ? toasts.map((ts, idx) => {
              const bodyClassName = clsx("opacity-100 rounded", {
                "bg-danger ": ts.type === "error",
                "bg-white": ts.type === "default",
              });

              const textClassName = clsx("opacity-100", {
                "text-white": ts.type === "error",
                "text-dark": ts.type === "default",
              });
              return (
                <Toast
                  key={idx}
                  className="bg-white border-0 shadow-sm rounded"
                >
                  <Toast.Body className={bodyClassName}>
                    <div className=" d-flex w-100 align-items-start justify-content-between  pt-2 pb-3 px-3">
                      <span className={textClassName}>
                        {ts.message} Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Quidem, iure.{" "}
                      </span>
                      <CloseButton
                        className=" "
                        onClick={() => ts.id && onRemoveToast(ts.id)}
                      />
                    </div>
                  </Toast.Body>
                </Toast>
              );
            })
          : null
        : null}

      {/* <Toast>
    <Toast.Header>
      <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
      <strong className="me-auto">Bootstrap</strong>
      <small className="text-muted">2 seconds ago</small>
    </Toast.Header>
    <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
  </Toast> */}
    </ToastContainer>
    // </div>
  );
}

export default ToastWrapper;
