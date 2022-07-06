import React from "react";

type Props = {};

function SidebarFooterIcon({}: Props) {
  return (
    <svg
      width={50}
      height={50}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http:/www.w3.org/2000/svg"
    >
      <mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={50}
        height={50}
      >
        <circle cx={25} cy={25} r={25} fill="#D7D7F8" />
      </mask>
      <g mask="url(#mask0)">
        <circle cx={25} cy={25} r={25} fill="#D7D7F8" />
        <rect
          x="8.125"
          y="15.625"
          width="33.75"
          height="38.125"
          rx={10}
          fill="#695DE9"
        />
        <path
          d="M31.25 28.75L31.25 42.5"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25 33.75L25 42.5"
          stroke="#B7B0F4"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.75 37.5L18.75 42.5"
          stroke="#B7B0F4"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx={25} cy="16.25" r="8.75" fill="#2B2467" />
        <path
          d="M24.4056 11.8294C24.5927 11.2536 25.4073 11.2536 25.5944 11.8294L26.2629 13.8868C26.3466 14.1443 26.5865 14.3186 26.8573 14.3186H29.0206C29.626 14.3186 29.8777 15.0934 29.3879 15.4493L27.6378 16.7208C27.4188 16.88 27.3271 17.1621 27.4108 17.4196L28.0792 19.477C28.2663 20.0528 27.6073 20.5316 27.1175 20.1757L25.3674 18.9042C25.1483 18.745 24.8517 18.745 24.6326 18.9042L22.8825 20.1757C22.3927 20.5316 21.7337 20.0528 21.9208 19.4769L22.5892 17.4196C22.6729 17.1621 22.5812 16.88 22.3622 16.7208L20.6121 15.4493C20.1223 15.0934 20.374 14.3186 20.9794 14.3186H23.1427C23.4135 14.3186 23.6534 14.1443 23.7371 13.8868L24.4056 11.8294Z"
          fill="white"
        />
      </g>
    </svg>
  );
}

export default SidebarFooterIcon;
