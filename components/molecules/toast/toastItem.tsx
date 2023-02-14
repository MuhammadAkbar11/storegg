import React from "react";
import { IToast } from "@utility/types/toast";
import { CloseButton, Toast } from "react-bootstrap";
import ToastIcon from "./toastIcon";
import { useToastContext } from "@utility/context/ToastContext";

interface Props extends IToast {
  onCloseHandler: (id: string) => void;
}

function ToastItem(props: Props) {
  const { onRemoveToast } = useToastContext();

  React.useEffect(() => {
    if (props.id) {
      const delay = props.hideDelay || 5000;
      setTimeout(() => {
        onRemoveToast(props?.id || "");
      }, delay);
    }
  }, [props.id, props.hideDelay]);
  return (
    <Toast
      className={`bg-white shadow rounded-pill border-0 `}
      style={{ width: "max-content" }}
    >
      <Toast.Body className={"p-2 "}>
        <div className="d-flex w-100 align-items-center justify-content-between flex-nowrap ">
          <div className={"opacity-100 d-flex gap-2 align-items-center pe-2 "}>
            <ToastIcon variant={props.variant} />
            <div
              className=" ms-1 text-dark my-0 "
              dangerouslySetInnerHTML={{ __html: props?.message || "" }}
            />
          </div>
          <CloseButton
            className=""
            onClick={() => props.id && props.onCloseHandler(props.id)}
          />
        </div>
      </Toast.Body>
    </Toast>
  );
}

export default ToastItem;
