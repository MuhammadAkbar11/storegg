import React from "react";

type Props = {};

function LogOutIcon({}: Props) {
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
        d="M19.2634 7.05396C20.5218 8.31274 21.3787 9.9164 21.7257 11.6621C22.0728 13.4079 21.8944 15.2173 21.2131 16.8617C20.5318 18.5061 19.3782 19.9115 17.8983 20.9003C16.4183 21.8891 14.6783 22.4169 12.8984 22.4169C11.1185 22.4169 9.37859 21.8891 7.89861 20.9003C6.41864 19.9115 5.26508 18.5061 4.58381 16.8617C3.90253 15.2173 3.72413 13.4079 4.07116 11.6621C4.41819 9.9164 5.27506 8.31274 6.53344 7.05396"
        stroke="#7E8CAC"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.9033 2.41406V12.4141"
        stroke="#7E8CAC"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default LogOutIcon;
