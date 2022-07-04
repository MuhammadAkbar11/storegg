import React from "react";

type Props = {};

function FeatureStepSecondIcon({}: Props) {
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
        id="mask0-icon2"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={80}
        height={80}
      >
        <circle cx={40} cy={40} r={40} fill="#D7D7F8" />
      </mask>
      <g mask="url(#mask0-icon2)">
        <circle cx={40} cy={40} r={40} fill="#D7D7F8" />
        <rect x={-14} y={16} width={62} height={82} rx={16} fill="#695DE9" />
        <path
          d="M32 36H5"
          stroke="white"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M27 45L9 45"
          stroke="#B7B0F4"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x={56} y={37} width={49} height={75} rx={16} fill="#2B2467" />
        <path
          d="M97 50H70"
          stroke="white"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M92 59L74 59"
          stroke="#6B63AC"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export default FeatureStepSecondIcon;
