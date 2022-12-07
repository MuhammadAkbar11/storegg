import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
  useMemo,
} from "react";
import {
  SignupInputTypes,
  SignupPhotoInputTypes,
} from "@utility/schema/auth.schema";
import { useRouter } from "next/router";

type SingupFormType = SignupInputTypes;
type SignupPhotoFormTypes = Omit<SignupPhotoInputTypes, "avatar"> & {
  avatar: any;
};

type SignupContextType = {
  error: any;
  signupFormData: SingupFormType | null;
  signupPhotoFormData: SignupPhotoFormTypes | null;
  onSetFormData: (values: SingupFormType) => void;
  onSetPhotoFormData: (values: SignupPhotoFormTypes) => void;
  onResetSignupForm: () => void;
  onSetError: (error: any) => void;
};

const pageDetailContextDefaultValues: SignupContextType = {
  error: null,
  signupFormData: null,
  signupPhotoFormData: null,
  onSetFormData: () => null,
  onSetPhotoFormData: () => null,
  onResetSignupForm: () => {},
  onSetError: () => {},
};

export const SignupContext = createContext<SignupContextType>(
  pageDetailContextDefaultValues
);

export function useSignupContext() {
  const context = useContext(SignupContext);
  if (context === undefined) {
    throw new Error("useSignupContext must wrapper in the provider");
  }

  return context;
}

type Props = {
  children: ReactNode;
};

export function SignupProvider({ children }: Props) {
  const [signupFormData, setSignupFormData] =
    useState<SingupFormType | null>(null);
  const [signupPhotoFormData, setSignupPhotoFormData] =
    useState<SignupPhotoFormTypes | null>(null);
  const [error, setError] = useState(null);

  const router = useRouter();

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
      if (path.includes("/auth")) return;
      if (!unsavedChanges) return;
      if (window.confirm(warningText)) return;
      router.events.emit("routeChangeError");
      throw "routeChange aborted.";
    };

    if (signupFormData) {
      window.addEventListener("beforeunload", handleWindowClose);
      router.events.on("routeChangeStart", handleBrowseAway);
    }

    return () => {
      if (signupFormData) {
        window.removeEventListener("beforeunload", handleWindowClose);
        router.events.off("routeChangeStart", handleBrowseAway);
      }
    };
  }, [unsavedChanges, signupFormData]);

  const onSetError = (error: any) => {
    setError(error);
  };

  const onResetSignupForm = () => {
    setSignupFormData(null);
    setSignupPhotoFormData(null);
    setError(null);
  };

  const onSetFormData = (values: SingupFormType) => {
    setSignupFormData(values);
  };

  const onSetPhotoFormData = (values: SignupPhotoFormTypes) => {
    setSignupPhotoFormData(values);
  };

  const value: SignupContextType = {
    error: useMemo(() => error, [error]),
    onSetError,
    signupFormData: signupFormData,
    signupPhotoFormData: signupPhotoFormData,
    onSetFormData: onSetFormData,
    onSetPhotoFormData: onSetPhotoFormData,
    onResetSignupForm: onResetSignupForm,
  };

  return (
    <>
      <SignupContext.Provider value={value}>{children}</SignupContext.Provider>
    </>
  );
}
