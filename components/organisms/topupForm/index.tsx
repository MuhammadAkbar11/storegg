import React from "react";

type Props = {};

function TopUpForm({}: Props) {
  return (
    <form action="./checkout.html" method="POST">
      <div className="pt-md-50 pt-30">
        <div className="">
          <label
            htmlFor="ID"
            className="form-label text-lg fw-medium color-palette-1 mb-10"
          >
            Verify ID
          </label>
          <input
            type="text"
            className="form-control rounded-pill text-lg"
            id="ID"
            name="ID"
            aria-describedby="verifyID"
            placeholder="Enter your ID"
          />
        </div>
      </div>
      <div className="pt-md-50 pb-md-50 pt-30 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Nominal Top Up
        </p>
        <div className="row justify-content-between">
          <label
            className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
            htmlFor="topup1"
          >
            <input
              className="d-none"
              type="radio"
              id="topup1"
              name="topup"
              defaultValue="topup1"
            />
            <div className="detail-card">
              <div className="d-flex justify-content-between">
                <p className="text-3xl color-palette-1 m-0">
                  <span className="fw-medium">125</span>
                  Gold
                </p>
                <svg
                  id="icon-check"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx={10} cy={10} r={10} fill="#CDF1FF" />
                  <path
                    d="M5.83301 10L8.46459 12.5L14.1663 7.5"
                    stroke="#00BAFF"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-lg color-palette-1 m-0">Rp 3.250.000</p>
            </div>
          </label>
          <label
            className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
            htmlFor="topup2"
          >
            <input
              className="d-none"
              type="radio"
              id="topup2"
              name="topup"
              defaultValue="topup2"
            />
            <div className="detail-card">
              <div className="d-flex justify-content-between">
                <p className="text-3xl color-palette-1 m-0">
                  <span className="fw-medium">225</span>
                  Gold
                </p>
                <svg
                  id="icon-check"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx={10} cy={10} r={10} fill="#CDF1FF" />
                  <path
                    d="M5.83301 10L8.46459 12.5L14.1663 7.5"
                    stroke="#00BAFF"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-lg color-palette-1 m-0">Rp 3.250.000</p>
            </div>
          </label>
          <label
            className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
            htmlFor="topup3"
          >
            <input
              className="d-none"
              type="radio"
              id="topup3"
              name="topup"
              defaultValue="topup3"
            />
            <div className="detail-card">
              <div className="d-flex justify-content-between">
                <p className="text-3xl color-palette-1 m-0">
                  <span className="fw-medium">350</span>
                  Gold
                </p>
                <svg
                  id="icon-check"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx={10} cy={10} r={10} fill="#CDF1FF" />
                  <path
                    d="M5.83301 10L8.46459 12.5L14.1663 7.5"
                    stroke="#00BAFF"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-lg color-palette-1 m-0">Rp 3.250.000</p>
            </div>
          </label>
          <label
            className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
            htmlFor="topup4"
          >
            <input
              className="d-none"
              type="radio"
              id="topup4"
              name="topup"
              defaultValue="topup4"
            />
            <div className="detail-card">
              <div className="d-flex justify-content-between">
                <p className="text-3xl color-palette-1 m-0">
                  <span className="fw-medium">550</span>
                  Gold
                </p>
                <svg
                  id="icon-check"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx={10} cy={10} r={10} fill="#CDF1FF" />
                  <path
                    d="M5.83301 10L8.46459 12.5L14.1663 7.5"
                    stroke="#00BAFF"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-lg color-palette-1 m-0">Rp 3.250.000</p>
            </div>
          </label>
          <label
            className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
            htmlFor="topup5"
          >
            <input
              className="d-none"
              type="radio"
              id="topup5"
              name="topup"
              defaultValue="topup5"
            />
            <div className="detail-card">
              <div className="d-flex justify-content-between">
                <p className="text-3xl color-palette-1 m-0">
                  <span className="fw-medium">750</span>
                  Gold
                </p>
                <svg
                  id="icon-check"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx={10} cy={10} r={10} fill="#CDF1FF" />
                  <path
                    d="M5.83301 10L8.46459 12.5L14.1663 7.5"
                    stroke="#00BAFF"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-lg color-palette-1 m-0">Rp 3.250.000</p>
            </div>
          </label>
          <div className="col-lg-4 col-sm-6">{/* Blank */}</div>
        </div>
      </div>
      <div className="pb-md-50 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Payment Method
        </p>
        <fieldset id="paymentMethod">
          <div className="row justify-content-between">
            <label
              className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
              htmlFor="transfer"
            >
              <input
                className="d-none"
                type="radio"
                id="transfer"
                name="paymentMethod"
                defaultValue="transfer"
              />
              <div className="detail-card">
                <div className="d-flex justify-content-between">
                  <p className="text-3xl color-palette-1 fw-medium m-0">
                    Transfer
                  </p>
                  <svg
                    id="icon-check"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx={10} cy={10} r={10} fill="#CDF1FF" />
                    <path
                      d="M5.83301 10L8.46459 12.5L14.1663 7.5"
                      stroke="#00BAFF"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-lg color-palette-1 m-0">
                  Worldwide Available
                </p>
              </div>
            </label>
            <label
              className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
              htmlFor="visa"
            >
              <input
                className="d-none"
                type="radio"
                id="visa"
                name="paymentMethod"
                defaultValue="visa"
              />
              <div className="detail-card">
                <div className="d-flex justify-content-between">
                  <p className="text-3xl color-palette-1 fw-medium m-0">VISA</p>
                  <svg
                    id="icon-check"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx={10} cy={10} r={10} fill="#CDF1FF" />
                    <path
                      d="M5.83301 10L8.46459 12.5L14.1663 7.5"
                      stroke="#00BAFF"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-lg color-palette-1 m-0">Credit Card</p>
              </div>
            </label>
            <div className="col-lg-4 col-sm-6">{/* Blank */}</div>
          </div>
        </fieldset>
      </div>
      <div className="pb-50">
        <label
          htmlFor="bankAccount"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Bank Account Name
        </label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          id="bankAccount"
          name="bankAccount"
          aria-describedby="bankAccount"
          placeholder="Enter your Bank Account Name"
        />
      </div>
      <div className="d-sm-block d-flex flex-column w-100">
        <a
          href="/checkout"
          type="submit"
          className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
        >
          Continue
        </a>
        {/* <button type="submit"
                          class="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg">Continue</button> */}
      </div>
    </form>
  );
}

export default TopUpForm;
