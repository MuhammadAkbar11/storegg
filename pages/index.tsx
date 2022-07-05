import type { NextPage } from "next";
import Head from "next/head";
import FeaturedGames from "../components/organisms/featuredGames";
import FeatureStepTransaction from "../components/organisms/featureStepTransaction";
import MainBanner from "../components/organisms/mainBanner";
import NavbarMenu from "../components/organisms/navbarMenu";

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
      <section className="reached pt-50 pb-50">
        <div className="container-fluid">
          <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
            <div className="me-lg-35">
              <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">
                290M+
              </p>
              <p className="text-lg text-lg-start text-center color-palette-2 m-0">
                Players Top Up
              </p>
            </div>
            <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none" />
            <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block" />
            <div className="me-lg-35 ms-lg-35">
              <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">
                12.500
              </p>
              <p className="text-lg text-lg-start text-center color-palette-2 m-0">
                Games Available
              </p>
            </div>
            <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block" />
            <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none" />
            <div className="me-lg-35 ms-lg-35">
              <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">
                99,9%
              </p>
              <p className="text-lg text-lg-start text-center color-palette-2 m-0">
                Happy Players
              </p>
            </div>
            <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block" />
            <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none" />
            <div className="me-lg-35 ms-lg-35">
              <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">
                4.7
              </p>
              <p className="text-lg text-lg-start text-center color-palette-2 m-0">
                Rating Worldwide
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Story */}
      <section className="story pt-50 pb-50">
        <div className="container-xxl container-fluid">
          <div className="row align-items-center px-lg-5 mx-auto gap-lg-0 gap-4">
            <div
              className="col-lg-7 col-12 d-lg-flex d-none justify-content-lg-end pe-lg-60"
              data-aos="zoom-in"
            >
              <img
                src="/img/Header-9.png"
                width={612}
                height={452}
                className="img-fluid"
                alt={""}
              />
            </div>
            <div className="col-lg-5 col-12 ps-lg-60">
              <div className="">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">
                  Win the battle.
                  <br /> Be the Champion.
                </h2>
                <p className="text-lg color-palette-1 mb-30">
                  Kami menyediakan jutaan cara untuk
                  <br className="d-sm-block d-none" />
                  membantu players menjadi
                  <br className="d-sm-block d-none" /> pemenang sejati
                </p>
                <div className="d-md-block d-flex flex-column w-100">
                  <a
                    className="btn btn-read text-lg rounded-pill"
                    href="#"
                    role="button"
                  >
                    Read Story
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <section className="footer pt-50">
        <footer>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 text-lg-start text-center">
                <a href="/#" className="mb-30">
                  <svg
                    width={60}
                    height={60}
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0"
                      mask-type="alpha"
                      maskUnits="userSpaceOnUse"
                      x={0}
                      y={0}
                      width={60}
                      height={60}
                    >
                      <circle cx={30} cy={30} r={30} fill="#3546AB" />
                    </mask>
                    <g mask="url(#mask0)">
                      <circle cx={30} cy={30} r={30} fill="#00BAFF" />
                      <path
                        d="M41.5001 35.0001C52.3001 38.2001 49.6668 48.0001 47.0001 52.5001L71.0001 60.5001L79.5001 -12.9999C63.6667 -13.8333 29.5001 -14.9999 19.5001 -12.9999C7.00007 -10.4999 13.5001 4.00006 12.0001 14.0001C10.5001 24.0001 28.0001 31.0001 41.5001 35.0001Z"
                        fill="#4D17E2"
                      />
                      <path
                        d="M54.495 47.785C54.495 51.285 53.655 54.54 51.975 57.55C50.295 60.56 47.74 63.01 44.31 64.9C40.88 66.79 36.645 67.735 31.605 67.735C26.705 67.735 22.33 66.86 18.48 65.11C14.7 63.29 11.655 60.84 9.345 57.76C7.105 54.61 5.81 51.04 5.46 47.05H15.645C15.855 49.15 16.555 51.215 17.745 53.245C19.005 55.205 20.755 56.85 22.995 58.18C25.305 59.44 28.07 60.07 31.29 60.07C35.49 60.07 38.71 58.95 40.95 56.71C43.19 54.47 44.31 51.6 44.31 48.1C44.31 45.09 43.505 42.64 41.895 40.75C40.355 38.86 38.43 37.39 36.12 36.34C33.81 35.22 30.66 34.03 26.67 32.77C21.98 31.23 18.2 29.795 15.33 28.465C12.53 27.065 10.115 25 8.085 22.27C6.125 19.54 5.145 15.935 5.145 11.455C5.145 7.60499 6.055 4.20999 7.875 1.27C9.765 -1.67 12.425 -3.945 15.855 -5.555C19.355 -7.165 23.45 -7.97 28.14 -7.97C35.42 -7.97 41.195 -6.185 45.465 -2.615C49.735 0.884996 52.22 5.365 52.92 10.825H42.63C42.07 7.885 40.565 5.295 38.115 3.055C35.665 0.814997 32.34 -0.305003 28.14 -0.305003C24.29 -0.305003 21.21 0.709996 18.9 2.73999C16.59 4.69999 15.435 7.5 15.435 11.14C15.435 14.01 16.17 16.355 17.64 18.175C19.18 19.925 21.07 21.325 23.31 22.375C25.55 23.355 28.63 24.475 32.55 25.735C37.31 27.275 41.125 28.745 43.995 30.145C46.935 31.545 49.42 33.68 51.45 36.55C53.48 39.35 54.495 43.095 54.495 47.785Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                </a>
                <p className="mt-30 text-lg color-palette-1 mb-30">
                  StoreGG membantu gamers
                  <br /> untuk menjadi pemenang sejati
                </p>
                <p className="mt-30 text-lg color-palette-1 mb-30">
                  Copyright 2021. All Rights Reserved.
                </p>
              </div>
              <div className="col-lg-8 mt-lg-0 mt-20">
                <div className="row gap-sm-0">
                  <div className="col-md-4 col-6 mb-lg-0 mb-25">
                    <p className="text-lg fw-semibold color-palette-1 mb-12">
                      Company
                    </p>
                    <ul className="list-unstyled">
                      <li className="mb-6">
                        <a
                          href="#/"
                          className="text-lg color-palette-1 text-decoration-none"
                        >
                          About Us
                        </a>
                      </li>
                      <li className="mb-6">
                        <a
                          href="#/"
                          className="text-lg color-palette-1 text-decoration-none"
                        >
                          Press Release
                        </a>
                      </li>
                      <li className="mb-6">
                        <a
                          href="#/"
                          className="text-lg color-palette-1 text-decoration-none"
                        >
                          Terms of Use
                        </a>
                      </li>
                      <li className="mb-6">
                        <a
                          href="#/"
                          className="text-lg color-palette-1 text-decoration-none"
                        >
                          Privacy &amp; Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4 col-6 mb-lg-0 mb-25">
                    <p className="text-lg fw-semibold color-palette-1 mb-12">
                      Support
                    </p>
                    <ul className="list-unstyled">
                      <li className="mb-6">
                        <a
                          href="#/"
                          className="text-lg color-palette-1 text-decoration-none"
                        >
                          Refund Policy
                        </a>
                      </li>
                      <li className="mb-6">
                        <a
                          href="#/"
                          className="text-lg color-palette-1 text-decoration-none"
                        >
                          Unlock Rewards
                        </a>
                      </li>
                      <li className="mb-6">
                        <a
                          href="#/"
                          className="text-lg color-palette-1 text-decoration-none"
                        >
                          Live Chatting
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
                    <p className="text-lg fw-semibold color-palette-1 mb-12">
                      Connect
                    </p>
                    <ul className="list-unstyled">
                      <li className="mb-6">
                        <a
                          href="mailto: hi@store.gg"
                          className="text-lg color-palette-1 text-decoration-none"
                        >
                          hi@store.gg
                        </a>
                      </li>
                      <li className="mb-6">
                        <a
                          href="mailto: team@store.gg"
                          className="text-lg color-palette-1 text-decoration-none"
                        >
                          team@store.gg
                        </a>
                      </li>
                      <li className="mb-6">
                        <a
                          href="http://maps.google.com/?q=Pasific 12,
                                  Jakarta Selatan"
                          className="text-lg color-palette-1 text-decoration-none"
                        >
                          Pasific 12, Jakarta Selatan
                        </a>
                      </li>
                      <li className="mb-6">
                        <a
                          href="tel: 02111229090"
                          className="text-lg color-palette-1 text-decoration-none"
                        >
                          021 - 1122 - 9090
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Home;
