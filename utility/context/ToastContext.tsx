import { IToast } from "@utility/types/toast";
import { useRouter } from "next/router";
import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useCallback,
  useMemo,
  useEffect,
} from "react";

type ToastContextType = {
  toasts: IToast[];
  onAddToast: (item: IToast, delay?: number) => void;
  onRemoveToast: (id: string) => void;
};

const toastDetailContextDefaultValues: ToastContextType = {
  toasts: [],
  onAddToast() {},
  onRemoveToast() {},
};

export const ToastContext = createContext<ToastContextType>(
  toastDetailContextDefaultValues
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
  const router = useRouter();

  useEffect(() => {
    const handleBrowseAway = () => {
      setToasts([]);
    };

    if (toasts.length !== 0) {
      router.events.on("routeChangeStart", handleBrowseAway);
    }

    return () => {
      if (toasts.length !== 0) {
        router.events.off("routeChangeStart", handleBrowseAway);
      }
    };
  }, [toasts]);

  const onAddToastHandler = (item: IToast, delay: number = 100) => {
    setTimeout(() => {
      const id = new Date().getTime();
      const newItem: IToast = { id: id.toString(), ...item };
      setToasts(prevState => [newItem, ...prevState]);
    }, delay);
  };

  const onRemoveToastHandler = useCallback(
    (id: string) => {
      const oldState = toasts;
      const newState = oldState.filter(t => t.id !== id);
      setToasts(newState);
    },
    [toasts]
  );

  const seen = new Set();
  const resultToast = useMemo(() => {
    return toasts.filter(el => {
      const duplicate = seen.has(el.id);
      seen.add(el.id);
      return !duplicate;
    });
  }, [toasts, seen]);

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
