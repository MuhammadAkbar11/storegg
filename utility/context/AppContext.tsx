import React, { createContext, useContext, ReactNode, useState } from "react";

type AppContextType = {
  error: any;
  onSetError?: (error: any) => void;
};

const pageDetailContextDefaultValues: AppContextType = {
  error: null,
};

export const AppContext = createContext<AppContextType>(
  pageDetailContextDefaultValues
);

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must wrapper in the provider");
  }

  return context;
}

type Props = {
  children: ReactNode;
};

export function AppProvider({ children }: Props) {
  const [error, setError] = useState(null);

  const onSetError = (error: any) => {
    setError(error);
  };

  const value: AppContextType = {
    error,
    onSetError,
  };

  return (
    <>
      <AppContext.Provider value={value}>{children}</AppContext.Provider>
    </>
  );
}
