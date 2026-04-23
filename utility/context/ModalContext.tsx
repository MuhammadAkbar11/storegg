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

function ModalProvider({ children }: React.PropsWithChildren<{}>) {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState<React.ReactNode | null>(null);

  const openModal = React.useCallback((modalContent: React.ReactNode) => {
    setIsOpen(true);
    setModal(modalContent);
  }, []);

  const closeModal = React.useCallback(() => {
    setIsOpen(false);
    setModal(null);
  }, []);

  const value = React.useMemo(
    () => ({
      openModal,
      closeModal,
      isOpen,
      modal,
    }),
    [openModal, closeModal, isOpen, modal]
  );

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}

export default ModalProvider;
