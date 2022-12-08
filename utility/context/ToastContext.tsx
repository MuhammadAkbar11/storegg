import { uHandleDuplicates } from "@utility/index.utils";
import { IToast } from "@utility/types/toast";
import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

type ToastContextType = {
  toasts: IToast[];
  onAddToast: (item: IToast, delay?: number) => void;
  onRemoveToast: (id: string) => void;
};

const toastContextDefaultValues: ToastContextType = {
  toasts: [],
  onAddToast() {},
  onRemoveToast() {},
};

export const ToastContext = createContext<ToastContextType>(
  toastContextDefaultValues
);

export function useToastContext() {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToastContext must wrapper in the provider");
  }

  return context;
}

type Props = {
  children: ReactNode;
};

export function ToastProvider({ children }: Props) {
  const [toasts, setToasts] = useState<IToast[]>([]);

  useEffect(() => {
    const currState = toasts;
    if (toasts.length > 4) {
      currState.pop();
      setToasts(currState);
    }
  }, [toasts]);

  const onAddToastHandler = (item: IToast, delay: number = 500) => {
    return setTimeout(() => {
      const id = new Date().getTime();
      const newItem: IToast = { id: id.toString(), ...item };
      setToasts(prevState => [newItem, ...prevState]);
    }, delay);
  };

  const onRemoveToastHandler = (id: string) => {
    setToasts(prevState => {
      const updatedState = prevState.filter(t => t.id !== id);
      return updatedState;
    });
  };

  const resultToast = uHandleDuplicates(toasts, (a, b) => a.id === b.id);

  const value: ToastContextType = {
    toasts: resultToast,
    onAddToast: onAddToastHandler,
    onRemoveToast: onRemoveToastHandler,
  };

  return (
    <>
      <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
    </>
  );
}
