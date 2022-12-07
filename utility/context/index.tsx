import { useRouter } from "next/router";
import React from "react";
import { AppProvider } from "./AppContext";
import { SignupProvider } from "./SignupContext";
import { ToastProvider } from "./ToastContext";

type ComponseProps = {
  providers: React.ElementType[];
  children: React.ReactNode;
};

function ComposeContext(props: ComponseProps) {
  const { providers = [], children } = props;
  return (
    <>
      {providers.reduceRight((acc, Comp) => {
        return <Comp>{acc}</Comp>;
      }, children)}
    </>
  );
}

export default function ComposeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  let providers = [AppProvider, ToastProvider];

  const router = useRouter();

  if (router.pathname.includes("/auth")) {
    providers.push(SignupProvider);
  }

  return <ComposeContext providers={providers}>{children}</ComposeContext>;
}
