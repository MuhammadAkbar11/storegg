import React from "react";

type Props = {};

function OverviewIcon({}: Props) {
  return (
    <svg
      className="icon me-3"
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http:/www.w3.org/2000/svg"
    >
      <path
        d="M21.9033 14.7502H14.9033V21.7502H21.9033V14.7502Z"
        stroke="#7E8CAC"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.9033 14.7502H3.90332V21.7502H10.9033V14.7502Z"
        stroke="#7E8CAC"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.9033 3.75024H14.9033V10.7502H21.9033V3.75024Z"
        stroke="#7E8CAC"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.9033 3.75024H3.90332V10.7502H10.9033V3.75024Z"
        stroke="#7E8CAC"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default OverviewIcon;
