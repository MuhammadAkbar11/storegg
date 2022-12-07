import { useToastContext } from "@utility/context/ToastContext";
import { IToast } from "@utility/types/toast";
import React from "react";

type Props = {
  show: boolean;
  delay?: number;
} & Omit<IToast, "id">;

const ToastTrigger = ({ show, message, type, delay = 300 }: Props) => {
  const effRan = React.useRef(false);
  const toastCtx = useToastContext();

  React.useEffect(() => {
    if (effRan.current === true) {
      if (show) {
        toastCtx.onAddToast(
          {
            type: type,
            message,
          },
          delay
        );
      }
    }
    return () => {
      effRan.current = true;
    };
  }, [show]);

  return null;
};

export default ToastTrigger;
