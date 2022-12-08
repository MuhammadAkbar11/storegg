import React, { createContext, useState } from "react";

type ModalContextType = {
  openModal: (modal: React.ReactNode) => void;
  closeModal: () => void;
  isOpen: boolean;
  modal: React.ReactNode | null;
};

export const ModalContext = createContext<ModalContextType>({
  openModal: () => {},
  closeModal: () => {},
  isOpen: false,
  modal: null,
});

export function useModalContext() {
  const context = React.useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModalContext must be used within a ModalProvider");
  }
  return context;
}

const ModalProvider = (props: React.PropsWithChildren<{}>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState<React.ReactNode | null>(null);

  const openModal = (modal: React.ReactNode) => {
    setIsOpen(true);
    setModal(modal);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModal(null);
  };

  return (
    <ModalContext.Provider
      value={{
        openModal,
        closeModal,
        isOpen,
        modal,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
