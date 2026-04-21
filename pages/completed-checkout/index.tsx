import Layout from "@components/organisms/layout";
import Link from "next/link";
import React from "react";

type Props = {};

function CompletedCheckout({}: Props) {
  return (
    <Layout pageTitle="Checkout Completed" footer={false} navbar={false}>
      {/* Complete Checkout Content */}
      <section className="complete-checkout mx-auto pt-lg-145 pb-lg-145 pt-100 pb-80">
        <div className="container-fluid">
          <div className="text-center">
            <svg
              className="img-fluid"
              width={343}
              height={300}
              viewBox="0 0 343 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0)">
                <path
                  d="M263.96 271.587C264.986 271.07 265.5 270.554 266.525 270.037"
                  stroke="#FF78B7"
                  strokeWidth="0.6123"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M276.786 262.804C284.994 256.605 293.202 250.406 299.873 242.657C310.132 231.292 317.827 216.31 317.315 200.812C317.315 189.963 313.211 179.631 309.107 169.299C305.001 159.484 300.385 149.152 298.845 138.303C297.306 127.454 298.845 115.572 306.541 107.823C311.159 102.657 319.367 100.074 325.523 105.24C327.574 107.307 329.114 109.89 330.141 112.99C339.374 143.469 298.333 162.584 273.708 156.901C261.908 153.801 250.622 147.085 241.387 139.336C221.892 123.321 208.04 108.857 199.832 84.5764C192.65 63.9121 188.032 41.1817 172.642 24.1337C121.339 -32.6927 20.2732 34.9825 19.7601 100.591C19.7601 137.787 42.8462 174.982 77.7319 185.83C94.6618 190.997 113.131 189.963 131.087 188.93C139.808 188.414 148.529 187.897 157.764 187.38"
                  stroke="#FF78B7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="1.22 4"
                />
                <path
                  d="M163.407 187.897C164.433 187.897 165.46 187.897 166.486 187.897"
                  stroke="#FF78B7"
                  strokeWidth="0.6123"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M30.5337 294.317H334.245"
                  stroke="#B1B9CC"
                  strokeWidth={2}
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.8302 294.317H15.1428"
                  stroke="#B1B9CC"
                  strokeWidth={2}
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M254.212 33.9492H185.98V111.44H254.212V33.9492Z"
                  fill="#B4C2D1"
                />
                <path
                  d="M254.212 33.9492H208.553V111.44H254.212V33.9492Z"
                  fill="url(#paint0_linear)"
                />
                <path
                  d="M195.283 16.981H90.5659V135.849H195.283V16.981Z"
                  fill="url(#paint1_linear)"
                />
                <path
                  d="M195.283 16.981H124.528V135.849H195.283V16.981Z"
                  fill="url(#paint2_linear)"
                />
                <path
                  d="M12.5775 187.897C16.1686 187.897 18.7337 185.314 18.7337 181.698C18.7337 178.082 16.1686 175.499 12.5775 175.499C8.98626 175.499 6.42114 178.082 6.42114 181.698C6.42114 185.314 9.49928 187.897 12.5775 187.897Z"
                  fill="url(#paint3_linear)"
                />
                <path
                  d="M292.177 39.6318C295.254 39.6318 297.821 37.0487 297.821 33.9491C297.821 30.8495 295.254 28.2666 292.177 28.2666C289.098 28.2666 286.534 30.8495 286.534 33.9491C286.534 37.0487 289.098 39.6318 292.177 39.6318Z"
                  fill="url(#paint4_linear)"
                />
                <path
                  d="M338.349 90.2587C340.401 90.2587 342.453 88.1924 342.453 86.1261C342.453 84.0595 340.401 81.9932 338.349 81.9932C336.297 81.9932 334.245 84.0595 334.245 86.1261C334.245 88.1924 336.297 90.2587 338.349 90.2587Z"
                  fill="url(#paint5_linear)"
                />
                <path
                  d="M285.506 49.9639H44.3849V291.733H285.506V49.9639Z"
                  fill="white"
                />
                <path
                  d="M286.019 49.9639H111.591V291.733H286.019V49.9639Z"
                  fill="#E6ECF5"
                />
                <path
                  d="M77.7316 49.9639H44.3849V291.733H77.7316V49.9639Z"
                  fill="url(#paint6_linear)"
                />
                <path
                  d="M111.591 291.733H44.3849V291.218L78.2447 257.639L111.591 291.733Z"
                  fill="#E6ECF5"
                />
                <path
                  d="M153.66 103.691C158.476 103.691 162.381 99.7587 162.381 94.9083C162.381 90.058 158.476 86.126 153.66 86.126C148.843 86.126 144.938 90.058 144.938 94.9083C144.938 99.7587 148.843 103.691 153.66 103.691Z"
                  fill="#B4C2D1"
                />
                <path
                  d="M239.848 103.691C244.665 103.691 248.569 99.7587 248.569 94.9083C248.569 90.058 244.665 86.126 239.848 86.126C235.031 86.126 231.127 90.058 231.127 94.9083C231.127 99.7587 235.031 103.691 239.848 103.691Z"
                  fill="#B4C2D1"
                />
                <path
                  d="M239.847 95.4248V119.189C239.847 143.469 220.352 162.583 196.753 162.583C172.641 162.583 153.659 142.952 153.659 119.189V95.4248"
                  stroke="white"
                  strokeWidth="1.8941"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  opacity="0.7"
                  d="M280.89 275.72L150.068 300C148.016 298.967 146.477 296.383 146.477 293.802V215.277C146.477 211.144 149.555 208.044 153.659 208.044H273.707L280.89 275.72Z"
                  fill="url(#paint7_linear)"
                />
                <path
                  d="M315.775 211.661V289.667C315.775 293.802 312.696 296.901 308.592 296.901H181.876C177.772 296.901 174.694 293.802 174.694 289.667V211.661C174.694 207.528 177.772 204.429 181.876 204.429H308.592C312.696 204.429 315.775 207.528 315.775 211.661Z"
                  fill="url(#paint8_linear)"
                />
                <path
                  d="M315.775 224.059H174.694V241.107H315.775V224.059Z"
                  fill="#526DFF"
                />
                <path
                  d="M256.778 271.07H243.952C242.413 271.07 241.387 270.037 241.387 268.487C241.387 266.938 242.413 265.904 243.952 265.904H256.778C258.317 265.904 259.343 266.938 259.343 268.487C258.83 270.037 257.804 271.07 256.778 271.07Z"
                  fill="white"
                />
                <path
                  d="M235.744 271.07H192.137C190.598 271.07 189.572 270.037 189.572 268.487C189.572 266.938 190.598 265.904 192.137 265.904H235.744C237.283 265.904 238.309 266.938 238.309 268.487C238.309 270.037 236.77 271.07 235.744 271.07Z"
                  fill="white"
                />
                <path
                  d="M211.632 280.886H192.137C190.598 280.886 189.572 279.853 189.572 278.303C189.572 276.753 190.598 275.72 192.137 275.72H211.632C213.171 275.72 214.197 276.753 214.197 278.303C214.197 279.853 213.171 280.886 211.632 280.886Z"
                  fill="white"
                />
                <path
                  d="M295.254 287.601C300.354 287.601 304.489 283.438 304.489 278.303C304.489 273.167 300.354 269.004 295.254 269.004C290.154 269.004 286.019 273.167 286.019 278.303C286.019 283.438 290.154 287.601 295.254 287.601Z"
                  fill="#526DFF"
                />
                <path
                  d="M282.942 287.601C288.043 287.601 292.178 283.438 292.178 278.303C292.178 273.167 288.043 269.004 282.942 269.004C277.842 269.004 273.708 273.167 273.708 278.303C273.708 283.438 277.842 287.601 282.942 287.601Z"
                  fill="white"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="208.801"
                  y1="72.5824"
                  x2="254.26"
                  y2="72.5824"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.00289017" stopColor="#E6ECF5" />
                  <stop offset={1} stopColor="#CED7E2" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear"
                  x1="143.285"
                  y1="14.5673"
                  x2="143.285"
                  y2="143.347"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF66A9" />
                  <stop offset={1} stopColor="#F53689" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear"
                  x1="163.166"
                  y1="127.787"
                  x2="156.337"
                  y2="4.80769"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF66A9" />
                  <stop offset={1} stopColor="#F53689" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear"
                  x1="6.76077"
                  y1="181.739"
                  x2="18.528"
                  y2="181.739"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF66A9" />
                  <stop offset={1} stopColor="#F53689" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear"
                  x1="286.418"
                  y1="33.7799"
                  x2="297.858"
                  y2="33.7799"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#83A6FF" />
                  <stop offset={1} stopColor="#5A78FF" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear"
                  x1="334.206"
                  y1="85.84"
                  x2="342.314"
                  y2="85.84"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF66A9" />
                  <stop offset={1} stopColor="#F53689" />
                </linearGradient>
                <linearGradient
                  id="paint6_linear"
                  x1="61.3001"
                  y1="56.4076"
                  x2="61.3001"
                  y2="288.195"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.00289017" stopColor="#E6ECF5" />
                  <stop offset={1} stopColor="#CED7E2" />
                </linearGradient>
                <linearGradient
                  id="paint7_linear"
                  x1="158.725"
                  y1="240.949"
                  x2="274.511"
                  y2="269.213"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop
                    offset="0.00289017"
                    stopColor="#606673"
                    stopOpacity={0}
                  />
                  <stop offset={1} stopColor="#373C47" />
                </linearGradient>
                <linearGradient
                  id="paint8_linear"
                  x1="235.098"
                  y1="243.554"
                  x2="317.994"
                  y2="300.73"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#83A6FF" />
                  <stop offset={1} stopColor="#5A78FF" />
                </linearGradient>
                <clipPath id="clip0">
                  <rect width="342.453" height={300} fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="pt-70 pb-50">
            <h2 className="text-4xl fw-bold text-center color-palette-1 mb-10">
              Checkout Completed
            </h2>
            <p className="text-lg text-center color-palette-1 m-0">
              Kami akan periksa pembayaran Anda
              <br className="d-sm-block d-none" /> dan menghubungi via WhatsApp
            </p>
          </div>
          <div className="button-group d-flex flex-column mx-auto">
            <Link href={"/member"}>
              <a className="btn btn-dashboard fw-medium text-lg text-white rounded-pill mb-16">
                My Dashboard
              </a>
            </Link>
            <a
              className="btn btn-whatsapp fw-medium text-lg color-palette-1 rounded-pill"
              href="#"
              role="button"
            >
              WhatsApp ke Admin
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default CompletedCheckout;
