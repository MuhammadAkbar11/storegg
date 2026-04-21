import { useRouter } from "next/router";
import React from "react";
import { AppProvider } from "./AppContext";
import ModalProvider from "./ModalContext";
import { SignupProvider } from "./SignupContext";
import { ToastProvider } from "./ToastContext";
import { TopupProvider } from "./TopupContext";
import { MemberPageProvider } from "./MemberPageContext";

type ComponseProps = {
  providers: React.ElementType[];
  children: React.ReactNode;
};

export function ComposeContext(props: ComponseProps) {
  const { providers = [], children } = props;
  return (
    <>
      {providers.reduceRight((acc, Comp) => {
        return <Comp>{acc}</Comp>;
      }, children)}
    </>
  );
}

function ComposeProvider({ children }: { children: React.ReactNode }) {
  let providers = [AppProvider, ToastProvider, ModalProvider];

  const router = useRouter();
  const pathname = router.pathname;
  if (pathname.includes("/auth")) {
    providers.push(SignupProvider);
  }

  if (pathname.includes("/detail") || pathname.includes("/checkout")) {
    providers.push(TopupProvider);
  }

  if (pathname.includes("/member")) {
    providers.push(MemberPageProvider);
  }

  return <ComposeContext providers={providers}>{children}</ComposeContext>;
}

export default ComposeProvider;
