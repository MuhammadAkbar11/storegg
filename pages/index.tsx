import type { NextPage } from "next";
import Head from "next/head";
import Story from "@organisms/story";
import FeaturedGames from "@organisms/featuredGames";
import FeatureStepTransaction from "@organisms/featureStepTransaction";
import MainBanner from "@organisms/mainBanner";
import Reached from "@organisms/reached";
import { useEffect } from "react";
import Layout from "@components/organisms/layout";

const Home: NextPage = () => {
  useEffect(() => {
    const isBrowser = typeof window !== "undefined";
    const AOS = isBrowser ? require("aos") : undefined;
    AOS.init();
  }, []);

  return (
    <>
      <Layout pageTitle="Home">
        {/* Header */}
        <MainBanner />
        {/* 3 Column - Feature */}
        <FeatureStepTransaction />
        {/* 5 Column - Featured-game */}
        <FeaturedGames />
        {/* Reached */}
        <Reached />
        {/* Story */}
        <Story
          reverse
          title1nd="Win The Battler."
          title2nd="Be The Chapion."
          image="/img/Header-9.png"
          text="Kami menyediakan jutaan cara untuk membantu players menjadi
        pemenang sejati"
          action="/about"
        />
      </Layout>
    </>
  );
};

export default Home;
