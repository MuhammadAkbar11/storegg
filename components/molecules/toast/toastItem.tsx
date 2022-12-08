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
      setTimeout(() => {
        onRemoveToast(props?.id || "");
      }, 5000);
    }
  }, [props.id]);

  return (
    <Toast className={`bg-white shadow-sm rounded`}>
      <Toast.Body className={""}>
        <div className=" d-flex w-100 align-items-start justify-content-between  pt-2 pb-3 ps-2">
          <div className={"opacity-100 d-flex gap-2 align-items-start"}>
            <ToastIcon variant={props.variant} />
            <span className=" ms-1 text-dark ">{props.message}</span>
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
