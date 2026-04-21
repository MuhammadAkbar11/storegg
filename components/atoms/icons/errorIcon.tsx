import React from "react";

type Props = {};

function ErrorIcon({}: Props) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="errorIconTitle"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      color="currentColor"
    >
      <path d="M12 8L12 13" /> <line x1={12} y1={16} x2={12} y2={16} />{" "}
      <circle cx={12} cy={12} r={10} />{" "}
    </svg>
  );
}

export default ErrorIcon;
