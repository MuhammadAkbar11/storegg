import React from "react";
import Footer from "@organisms/footer";
import NavbarMenu from "@organisms/navbarMenu";
import TopUpForm from "@organisms/topupForm";
import TopUpGameInfo from "@organisms/topupGameInfo";
import { useRouter } from "next/router";

import Link from "next/link";
import Head from "next/head";
import {
  useGameDetailContext,
  GameDetailProvider,
} from "@context/GameDetailContext";
import Layout from "@components/organisms/layout";
import { useTopupContext } from "@utility/context/TopupContext";

type Props = {};

function Detail({}: Props) {
  const { voucher, loading, onFetchDataHandler, error } =
    useGameDetailContext();
  const topupCtx = useTopupContext();
  const { isReady, query } = useRouter();
  React.useEffect(() => {
    if (isReady) {
      onFetchDataHandler(query.Id);
    }
  }, [isReady]);

  const pageTitle = voucher?.gameName || "Loading...";

  return (
    <Layout pageTitle={pageTitle}>
      {/* Detail Content */}
      <section className="detail pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
          {loading ? (
            <div className=" d-flex justify-content-center py-4 ">
              <div className="spinner-border color-palette-4" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : null}
          {voucher ? (
            <>
              <div className="detail-header pb-50">
                <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">
                  Top Up
                </h2>
                <p className="text-lg color-palette-1 mb-0">
                  Perkuat akun dan jadilah pemenang
                </p>
              </div>

              <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
                  <TopUpGameInfo gameInfo={voucher} view="mobile" />
                </div>
                <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
                  <TopUpGameInfo view="desktop" gameInfo={voucher} />
                  <hr />
                  <TopUpForm />
                </div>
              </div>
            </>
          ) : (
            <>
              {!loading && error ? (
                <div className="detail-header pb-50">
                  <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">
                    Voucher Tidak Dapat di Temukan
                  </h2>
                  <p className="text-lg color-palette-1 mb-0">
                    Silahkan refresh halaman atau{" "}
                    <Link href={"/"}>
                      <a
                        className="btn-learn text-lg color-palette-1 my-auto text-center"
                        role="button"
                      >
                        kembali ke halaman utama
                      </a>
                    </Link>
                  </p>
                </div>
              ) : null}
            </>
          )}
        </div>
      </section>
    </Layout>
  );
}

Detail.providers = [GameDetailProvider];

export default Detail;
