import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "@components/organisms/footer";
import NavbarMenu from "@components/organisms/navbarMenu";

type Props = {
  pageTitle?: string;
  navbar?: boolean;
  footer?: boolean;
  children: React.ReactNode;
};

function Layout({ navbar, children, footer, pageTitle }: Props) {
  const { pathname } = useRouter();

  const title = pageTitle ? `${pageTitle} | StoreGG` : "Loading... | StoreGG";

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {navbar ? <NavbarMenu activePath={pathname} /> : null}
      {children}
      {footer ? <Footer /> : null}
    </>
  );
}

Layout.defaultProps = {
  pageTitle: "Loading...",
  navbar: true,
  footer: true,
};

export default Layout;
