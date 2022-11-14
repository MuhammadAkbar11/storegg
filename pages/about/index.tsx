import AboutStory from "@components/organisms/aboutStory";
import Companies from "@components/organisms/companies";
import Footer from "@components/organisms/footer";
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
    <>
      <Head>
        <title>About | StoreGG</title>
      </Head>
      <NavbarMenu />
      <PageHero title="About Us" />
      <AboutStory type="top" />
      <OurServices />
      <AboutStory type="bottom" />
      <Companies />
      <Footer />
    </>
  );
}

export default AboutUs;
