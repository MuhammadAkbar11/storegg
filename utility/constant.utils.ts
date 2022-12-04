export const UNKNOWM_ERROR = "UNKNOWM_ERROR";
export const ROOT_API = process.env.NEXT_PUBLIC_API_URI;
export const API_URI = `${process.env.NEXT_PUBLIC_API_URI}${process.env.NEXT_PUBLIC_API_PATH}`;

export const PROFILE_MENU = [
  { text: "My Profile", href: "/member" },
  { text: "Wallet", href: "/member/wallet" },
  { text: "Account Setting", href: "/member/settings" },
  { text: "Log Out", href: "/auth/sing-in" },
];
