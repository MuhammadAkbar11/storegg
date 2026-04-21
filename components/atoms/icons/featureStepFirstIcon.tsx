import React from "react";

type Props = {};

function FeatureStepFirstIcon({}: Props) {
  return (
    <svg
      className="mb-30"
      width={80}
      height={80}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0-icon1"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={80}
        height={80}
      >
        <circle cx={40} cy={40} r={40} fill="#D7D7F8" />
      </mask>
      <g mask="url(#mask0-icon1)">
        <circle cx={40} cy={40} r={40} fill="#D7D7F8" />
        <mask
          id="mask1"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x={-12}
          y={23}
          width={67}
          height={73}
        >
          <path
            d="M-12 23H33C45.1503 23 55 32.8497 55 45V96H-12V23Z"
            fill="#4D17E2"
          />
        </mask>
        <g mask="url(#mask1)">
          <path
            d="M-12 23H33C45.1503 23 55 32.8497 55 45V96H-12V23Z"
            fill="#695DE9"
          />
          <path
            d="M37 55H-4"
            stroke="white"
            strokeWidth={4}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23 64L-4 64"
            stroke="#B7B0F4"
            strokeWidth={4}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect x={23} y={13} width={52} height={34} rx={13} fill="#5C52C7" />
        </g>
        <rect x={27} y={16} width={41} height={27} rx={13} fill="#2B2467" />
        <circle cx="47.5" cy="29.5" r="5.5" stroke="white" strokeWidth={4} />
      </g>
    </svg>
  );
}

export default FeatureStepFirstIcon;
