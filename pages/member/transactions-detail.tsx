import React from "react";
import Sidebar from "../../components/sidebar";

type Props = {};

function TransactionsDetail({}: Props) {
  return (
    <>
      <section className="transactions-detail overflow-auto">
        <Sidebar />
        <main className="main-wrapper">
          <div className="ps-lg-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-30">
              Details #GG001
            </h2>
            <div className="details">
              <div className="main-content main-content-card overflow-auto">
                <section className="checkout mx-auto">
                  <div className="d-flex flex-row  align-items-center justify-content-between mb-30">
                    <div className="game-checkout d-flex flex-row align-items-center">
                      <div className="pe-4">
                        <div className="cropped">
                          <img
                            src="/img/Thumbnail-3.png"
                            width={200}
                            height={130}
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>
                      <div>
                        <p className="fw-bold text-xl color-palette-1 mb-10">
                          Mobile Legends:
                          <br /> The New Battle 2021
                        </p>
                        <p className="color-palette-2 m-0">Category: Mobile</p>
                      </div>
                    </div>
                    <div>
                      <p className="fw-medium text-center label pending m-0 rounded-pill">
                        Pending
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="purchase pt-30">
                    <h2 className="fw-bold text-xl color-palette-1 mb-20">
                      Purchase Details
                    </h2>
                    <p className="text-lg color-palette-1 mb-20">
                      Your Game ID{" "}
                      <span className="purchase-details">masayoshizero</span>
                    </p>
                    <p className="text-lg color-palette-1 mb-20">
                      Order ID <span className="purchase-details">#GG001</span>
                    </p>
                    <p className="text-lg color-palette-1 mb-20">
                      Item{" "}
                      <span className="purchase-details">250 Diamonds</span>
                    </p>
                    <p className="text-lg color-palette-1 mb-20">
                      Price{" "}
                      <span className="purchase-details">Rp 42.280.500</span>
                    </p>
                    <p className="text-lg color-palette-1 mb-20">
                      Tax (10%){" "}
                      <span className="purchase-details">Rp 4.228.000</span>
                    </p>
                    <p className="text-lg color-palette-1 mb-20">
                      Total{" "}
                      <span className="purchase-details color-palette-4">
                        Rp 55.000.600
                      </span>
                    </p>
                  </div>
                  <div className="payment pt-10 pb-10">
                    <h2 className="fw-bold text-xl color-palette-1 mb-20">
                      Payment Informations
                    </h2>
                    <p className="text-lg color-palette-1 mb-20">
                      Your Account Name{" "}
                      <span className="purchase-details">
                        Masayoshi Angga Zero
                      </span>
                    </p>
                    <p className="text-lg color-palette-1 mb-20">
                      Type{" "}
                      <span className="payment-details">
                        Worldwide Transfer
                      </span>
                    </p>
                    <p className="text-lg color-palette-1 mb-20">
                      Bank Name <span className="payment-details">Mandiri</span>
                    </p>
                    <p className="text-lg color-palette-1 mb-20">
                      Bank Account Name{" "}
                      <span className="payment-details">
                        PT Store GG Indonesia
                      </span>
                    </p>
                    <p className="text-lg color-palette-1 mb-20">
                      Bank Number{" "}
                      <span className="payment-details">
                        1800 - 9090 - 2021
                      </span>
                    </p>
                  </div>
                  <div className="d-md-block d-flex flex-column w-100">
                    <a
                      className="btn btn-whatsapp rounded-pill fw-medium text-white border-0 text-lg"
                      href="#"
                      role="button"
                    >
                      WhatsApp ke Admin
                    </a>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default TransactionsDetail;
