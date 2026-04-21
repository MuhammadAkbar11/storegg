import React from "react";

type Props = {};

function CardIcon({}: Props) {
  return (
    <svg
      className="icon me-3"
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http:/www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path
          d="M21.9033 4.41406H3.90332C2.79875 4.41406 1.90332 5.30949 1.90332 6.41406V18.4141C1.90332 19.5186 2.79875 20.4141 3.90332 20.4141H21.9033C23.0079 20.4141 23.9033 19.5186 23.9033 18.4141V6.41406C23.9033 5.30949 23.0079 4.41406 21.9033 4.41406Z"
          stroke="#7E8CAC"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.90332 10.4141H23.9033"
          stroke="#7E8CAC"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width={24}
            height={24}
            fill="white"
            transform="translate(0.90332 0.414062)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default CardIcon;
