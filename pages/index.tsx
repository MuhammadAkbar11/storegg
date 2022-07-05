import type { NextPage } from "next";
import Head from "next/head";
import Story from "../components/organisms/story";
import FeaturedGames from "../components/organisms/featuredGames";
import FeatureStepTransaction from "../components/organisms/featureStepTransaction";
import MainBanner from "../components/organisms/mainBanner";
import NavbarMenu from "../components/organisms/navbarMenu";
import Reached from "../components/organisms/reached";
import Footer from "../components/organisms/footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | StoreGG</title>
      </Head>
      <NavbarMenu />
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
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
