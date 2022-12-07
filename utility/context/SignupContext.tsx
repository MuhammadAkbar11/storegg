import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import {
  SignupInputTypes,
  SignupPhotoInputTypes,
} from "@utility/schema/auth.schema";

type FormDataType = SignupInputTypes & SignupPhotoInputTypes;

type SignupContextType = {
  error: any;
  loading: boolean;
  signupFormData: Partial<FormDataType | null>;
  onSetFormData: (values: Partial<FormDataType>) => void;
  onResetSignupForm: () => void;
  onSetError: (error: any) => void;
};

const pageDetailContextDefaultValues: SignupContextType = {
  error: null,
  loading: true,
  signupFormData: null,
  onSetFormData: () => {},
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
  const [loading, setLoading] = useState(true);
  const [signupFormData, setSignupFormData] =
    useState<Partial<FormDataType> | null>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const localForm = localStorage.getItem("signup-form");

    if (!signupFormData) {
      if (localForm && typeof localForm === "string") {
        setSignupFormData(JSON.parse(localForm));
      }
    }

    setLoading(false);
  }, []);

  const onSetError = (error: any) => {
    setError(error);
  };

  const onResetSignupForm = () => {
    localStorage.removeItem("signup-form");
    setSignupFormData(null);
    setError(null);
  };

  const onSetFormData = (values: Partial<FormDataType>) => {
    localStorage.setItem("signup-form", JSON.stringify(values));
    setSignupFormData(values);
  };

  const value: SignupContextType = {
    error,
    onSetError,
    loading,
    signupFormData: signupFormData,
    onSetFormData: onSetFormData,
    onResetSignupForm: onResetSignupForm,
  };

  return (
    <>
      <SignupContext.Provider value={value}>{children}</SignupContext.Provider>
    </>
  );
}
