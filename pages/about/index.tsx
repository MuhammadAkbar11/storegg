import AboutStory from "@components/organisms/aboutStory";
import Companies from "@components/organisms/companies";
import Footer from "@components/organisms/footer";
import Layout from "@components/organisms/layout";
import NavbarMenu from "@components/organisms/navbarMenu";
import OurServices from "@components/organisms/ourServices";
import PageHero from "@components/organisms/pageHero";
import Head from "next/head";
import React from "react";
import useInitAOS from "utility/hooks/useInitAOS";

type Props = {};

function AboutUs({}: Props) {
  useInitAOS();

  return (
    <Layout pageTitle="About">
      <PageHero title="About Us" />
      <AboutStory type="top" />
      <OurServices />
      <AboutStory type="bottom" />
      <Companies />
    </Layout>
  );
}

export default AboutUs;
