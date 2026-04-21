import React from "react";

type Props = {};

function GameMobileIcon({}: Props) {
  return (
    <svg
      width={60}
      height={60}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http:/www.w3.org/2000/svg"
    >
      <mask
        id="mask0-category-2"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={60}
        height={60}
      >
        <circle cx={30} cy={30} r={30} fill="#D7D7F8" />
      </mask>
      <g mask="url(#mask0-category-2)">
        <circle cx={30} cy={30} r={30} fill="#D7D7F8" />
        <mask
          id="mask1-category-2"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x={12}
          y={16}
          width={30}
          height={49}
        >
          <path
            d="M12 22C12 18.6863 14.6863 16 18 16H36C39.3137 16 42 18.6863 42 22V65H12V22Z"
            fill="#695DE9"
          />
        </mask>
        <g mask="url(#mask1-category-2)">
          <path
            d="M12 22C12 18.6863 14.6863 16 18 16H36C39.3137 16 42 18.6863 42 22V65H12V22Z"
            fill="#695DE9"
          />
          <path
            d="M16 42C16 40.3431 17.3431 39 19 39H28C29.6569 39 31 40.3431 31 42V61C31 62.6569 29.6569 64 28 64H19C17.3431 64 16 62.6569 16 61V42Z"
            fill="#B7B0F4"
          />
          <path
            d="M34 42C34 40.3431 35.3431 39 37 39H46C47.6569 39 49 40.3431 49 42V61C49 62.6569 47.6569 64 46 64H37C35.3431 64 34 62.6569 34 61V42Z"
            fill="white"
          />
          <circle cx={42} cy={23} r={10} fill="#4F46B5" />
        </g>
        <circle cx={42} cy={21} r={9} fill="#2B2467" />
        <path
          d="M41.5109 16.0768C41.6648 15.603 42.3352 15.603 42.4891 16.0768L43.3279 18.6581C43.3967 18.87 43.5942 19.0135 43.817 19.0135H46.5311C47.0293 19.0135 47.2365 19.651 46.8334 19.9438L44.6376 21.5392C44.4574 21.6701 44.3819 21.9023 44.4508 22.1142L45.2895 24.6955C45.4435 25.1693 44.9012 25.5633 44.4981 25.2705L42.3023 23.6751C42.1221 23.5442 41.878 23.5442 41.6977 23.6751L39.5019 25.2705C39.0989 25.5633 38.5566 25.1693 38.7105 24.6955L39.5492 22.1142C39.6181 21.9023 39.5427 21.6701 39.3624 21.5392L37.1666 19.9438C36.7635 19.651 36.9707 19.0135 37.4689 19.0135H40.1831C40.4059 19.0135 40.6033 18.87 40.6722 18.6581L41.5109 16.0768Z"
          fill="white"
        />
        <path
          d="M27 22L17 22"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 27L17 27"
          stroke="#B7B0F4"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export default GameMobileIcon;
