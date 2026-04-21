import Footer from "@components/organisms/footer";
import Layout from "@components/organisms/layout";
import NavbarMenu from "@components/organisms/navbarMenu";
import Head from "next/head";
import React from "react";

type Props = {};

function Payment({}: Props) {
  return (
    <Layout pageTitle="Payment">
      <section className="detail pt-lg-60 pb-50">
        <div className="container-xxl container-fluid"></div>
      </section>
    </Layout>
  );
}

export default Payment;
