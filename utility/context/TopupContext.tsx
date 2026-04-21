import { TopupInput } from "@utility/schema/topup.schema";
import { IGameDetailItem, ITopupGame } from "@utility/types";
import { useRouter } from "next/router";
import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

type TopupContextType = {
  error: any;
  allowRedirect: boolean;
  topupFormData: ITopupGame | null;
  onSetToptupForm: (values: ITopupGame) => void;
  onSetResetTopup: () => void;
  onSetAllowRedirect: (value: boolean) => void;
  onSetError?: (error: any) => void;
};

const pageDetailContextDefaultValues: TopupContextType = {
  topupFormData: null,
  allowRedirect: false,
  error: null,
  onSetToptupForm: () => {},
  onSetResetTopup: () => {},
  onSetAllowRedirect: () => {},
};

export const TopupContext = createContext<TopupContextType>(
  pageDetailContextDefaultValues
);

export function useTopupContext() {
  const context = useContext(TopupContext);
  if (context === undefined) {
    throw new Error("useTopupContext must wrapper in the provider");
  }

  return context;
}

type Props = {
  children: ReactNode;
};

export function TopupProvider({ children }: Props) {
  const [allowRedirect, setAllowRedirect] = useState<boolean>(false);
  const [topupFormData, setTopupFormData] = useState<ITopupGame | null>(null);

  const [error, setError] = useState(null);

  const router = useRouter();

  const onSetError = (error: any) => {
    setError(error);
  };

  const unsavedChanges = true;
  const warningText =
    "Your data will be reset - are you sure you wish to leave this page?";

  useEffect(() => {
    const handleWindowClose = (e: any) => {
      if (!unsavedChanges) return;
      e.preventDefault();
      return (e.returnValue = warningText);
    };
    const handleBrowseAway = (path: string) => {
      if (path.includes("/checkout") || path.includes("/detail")) return;
      if (!unsavedChanges) return;
      if (window.confirm(warningText)) return;
      router.events.emit("routeChangeError");
      throw "routeChange aborted.";
    };

    if (topupFormData && !allowRedirect) {
      window.addEventListener("beforeunload", handleWindowClose);
      router.events.on("routeChangeStart", handleBrowseAway);
    }

    return () => {
      if (topupFormData && !allowRedirect) {
        window.removeEventListener("beforeunload", handleWindowClose);
        router.events.off("routeChangeStart", handleBrowseAway);
      }
    };
  }, [unsavedChanges, topupFormData, allowRedirect]);

  const onSetAllowRedirect = (status: boolean) => setAllowRedirect(status);
  const onSetToptupForm = (values: ITopupGame) => setTopupFormData(values);
  const onSetResetTopup = () => {
    setTopupFormData(null);
    // setAllowRedirect(ture)
  };

  const value: TopupContextType = {
    error,
    allowRedirect,
    onSetError,
    onSetToptupForm,
    onSetResetTopup,
    onSetAllowRedirect,
    topupFormData: topupFormData,
  };

  return (
    <>
      <TopupContext.Provider value={value}>{children}</TopupContext.Provider>
    </>
  );
}
