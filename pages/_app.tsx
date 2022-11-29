import "@styles/scss/index.scss";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, ReactNode, ComponentType } from "react";
import { SSRProvider } from "react-bootstrap";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 1000,
    },
  },
});

type NextPageWithProvider = NextPage & {
  provider?: ComponentType;
};

type AppPropsWithProvider = AppProps & {
  Component: NextPageWithProvider;
};

const DefaultPage = ({ children }: { children: ReactNode }) => <>{children}</>;

function MyApp({ Component, pageProps }: AppPropsWithProvider) {
  useEffect(() => {
    const isBrowser = typeof window !== "undefined";
    const AOS = isBrowser ? require("aos") : undefined;
    AOS.init();
  }, []);

  const ContextProvider = Component.provider || DefaultPage;

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest"></link>
      </Head>
      <QueryClientProvider client={queryClient}>
        <SSRProvider>
          <ContextProvider>
            <Component {...pageProps} />
          </ContextProvider>
        </SSRProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
