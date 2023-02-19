import "@styles/scss/index.scss";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, ReactNode, ComponentType } from "react";
import { SSRProvider } from "react-bootstrap";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import ToastWrapper from "@components/organisms/toastWrapper";
import MainProvider, { ComposeContext } from "@utility/context";
import PageProgress from "@components/molecules/pageProgress";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 1000,
    },
  },
});

type NextPageWithProvider = NextPage & {
  provider?: ComponentType;
  providers?: ComponentType[];
};

type AppPropsWithProvider = AppProps & {
  Component: NextPageWithProvider;
};

const PageCtxProvider = ({
  children,
  prov,
}: {
  children: ReactNode;
  prov: React.ElementType[];
}) => <ComposeContext providers={prov}>{children}</ComposeContext>;

function MyApp({ Component, pageProps }: AppPropsWithProvider) {
  useEffect(() => {
    const isBrowser = typeof window !== "undefined";
    const AOS = isBrowser ? require("aos") : undefined;
    AOS.init();
  }, []);

  const pageProviders = Component.providers ? Component.providers : [];

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SSRProvider>
          <MainProvider>
            <PageCtxProvider prov={pageProviders}>
              <PageProgress />
              <Component {...pageProps} />
              <ToastWrapper />
            </PageCtxProvider>
          </MainProvider>
        </SSRProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
