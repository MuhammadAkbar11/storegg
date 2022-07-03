import React from "react";

type Props = {};

function Checkout({}: Props) {
  return (
    <>
      {/* Checkout Content */}

      <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
        <div className="container-fluid">
          <div className="logo text-md-center text-start pb-50">
            <a className="" href="#">
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
          </div>
          <div className="title-text pt-md-50 pt-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
            <p className="text-lg color-palette-1 mb-0">
              Waktunya meningkatkan cara bermain
            </p>
          </div>
          <div className="game-checkout d-flex flex-row align-items-center pt-md-50 pb-md-50 pt-30 pb-30">
            <div className="pe-4">
              <div className="cropped">
                <img
                  src="/img/Thumbnail-3.png"
                  className="img-fluid"
                  alt={"Thumbnail-3"}
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
          <hr />
          <div className="purchase pt-md-50 pt-30">
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
              Item <span className="purchase-details">250 Diamonds</span>
            </p>
            <p className="text-lg color-palette-1 mb-20">
              Price <span className="purchase-details">Rp 42.280.500</span>
            </p>
            <p className="text-lg color-palette-1 mb-20">
              Tax (10%) <span className="purchase-details">Rp 4.228.000</span>
            </p>
            <p className="text-lg color-palette-1 mb-20">
              Total{" "}
              <span className="purchase-details color-palette-4">
                Rp 55.000.600
              </span>
            </p>
          </div>
          <div className="payment pt-md-50 pb-md-50 pt-10 pb-10">
            <h2 className="fw-bold text-xl color-palette-1 mb-20">
              Payment Informations
            </h2>
            <p className="text-lg color-palette-1 mb-20">
              Your Account Name{" "}
              <span className="purchase-details">Masayoshi Angga Zero</span>
            </p>
            <p className="text-lg color-palette-1 mb-20">
              Type <span className="payment-details">Worldwide Transfer</span>
            </p>
            <p className="text-lg color-palette-1 mb-20">
              Bank Name <span className="payment-details">Mandiri</span>
            </p>
            <p className="text-lg color-palette-1 mb-20">
              Bank Account Name{" "}
              <span className="payment-details">PT Store GG Indonesia</span>
            </p>
            <p className="text-lg color-palette-1 mb-20">
              Bank Number{" "}
              <span className="payment-details">1800 - 9090 - 2021</span>
            </p>
          </div>
          <label className="checkbox-label text-lg color-palette-1">
            I have transferred the money
            <input type="checkbox" />
            <span className="checkmark" />
          </label>
          <div className="d-md-block d-flex flex-column w-100 pt-50">
            <a
              className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg"
              href="./complete-checkout.html"
              role="button"
            >
              Confirm Payment
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Checkout;
