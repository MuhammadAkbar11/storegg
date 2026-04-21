import AboutStory from "@components/organisms/aboutStory";
import Companies from "@components/organisms/companies";
import Layout from "@components/organisms/layout";
import OurServices from "@components/organisms/ourServices";
import PageHero from "@components/organisms/pageHero";
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
