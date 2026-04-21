import { IUserAuth } from "@utility/types";
import React, { createContext, useContext, ReactNode, useState } from "react";

type PrivateAuthContextType = {
  user: IUserAuth | null;
  isLoading: boolean;
  onSetUser: (user: IUserAuth) => void;
};

const pageDetailContextDefaultValues: PrivateAuthContextType = {
  user: null,
  isLoading: true,
  onSetUser: () => {},
};

export const PrivateAuthContext = createContext<PrivateAuthContextType>(
  pageDetailContextDefaultValues
);

export function usePrivateAuthContext() {
  const context = useContext(PrivateAuthContext);
  if (context === undefined) {
    throw new Error("usePrivateAuthContext must wrapper in the provider");
  }

  return { ...context };
}

type Props = {
  children: ReactNode;
};

export function PrivateAuthProvider({ children }: Props) {
  const [loading, setLoading] = useState(true);
  const [userState, setUserState] = useState<IUserAuth | null>(null);

  const onSetUser = (user: IUserAuth) => {
    setLoading(false);
    setUserState(user);
    console.log("RELOAD USER AUTH");
  };

  const value: PrivateAuthContextType = {
    user: userState,
    isLoading: loading,
    onSetUser,
  };

  return (
    <>
      <PrivateAuthContext.Provider value={value}>
        {children}
      </PrivateAuthContext.Provider>
    </>
  );
}
