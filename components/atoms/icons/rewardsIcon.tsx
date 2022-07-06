import React from "react";

type Props = {};

function RewardsIcon({}: Props) {
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
          d="M12.9033 15.4141C16.7693 15.4141 19.9033 12.2801 19.9033 8.41406C19.9033 4.54807 16.7693 1.41406 12.9033 1.41406C9.03733 1.41406 5.90332 4.54807 5.90332 8.41406C5.90332 12.2801 9.03733 15.4141 12.9033 15.4141Z"
          stroke="#7E8CAC"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.11332 14.3039L7.90332 23.4139L12.9033 20.4139L17.9033 23.4139L16.6933 14.2939"
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

export default RewardsIcon;
