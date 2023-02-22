import React, { createContext, useContext, ReactNode, useState } from "react";

type MemberPageContextType = {
  canvasSidebar: boolean;
  onToggleMobileSidebar: () => void;
};

const pageDetailContextDefaultValues: MemberPageContextType = {
  canvasSidebar: false,
  onToggleMobileSidebar: () => {},
};

export const MemberPageContext = createContext<MemberPageContextType>(
  pageDetailContextDefaultValues
);

export function useMemberPageContext() {
  const context = useContext(MemberPageContext);
  if (context === undefined) {
    throw new Error("useMemberPageContext must wrapper in the provider");
  }

  return context;
}

type Props = {
  children: ReactNode;
};

export function MemberPageProvider({ children }: Props) {
  const [canvasSidebar, setCanvarSidebar] = useState(false);

  const onToggleMobileSidebar = () => {
    setCanvarSidebar(!canvasSidebar);
  };

  const value: MemberPageContextType = {
    canvasSidebar,
    onToggleMobileSidebar,
  };

  return (
    <>
      <MemberPageContext.Provider value={value}>
        {children}
      </MemberPageContext.Provider>
    </>
  );
}
