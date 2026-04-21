import { BootstrapBreakpoints } from "./types";

export const UNKNOWM_ERROR = "UNKNOWM_ERROR";
export const ROOT_API = process.env.NEXT_PUBLIC_API_URI;
export const API_URI = `${process.env.NEXT_PUBLIC_API_URI}${process.env.NEXT_PUBLIC_API_PATH}`;

export const PROFILE_MENU = [
  { text: "My Profile", href: "/member" },
  { text: "Wallet", href: "/member/wallet" },
  { text: "Account Setting", href: "/member/settings" },
];

export const MAX_AVATAR_SIZE = 5000000;
export const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const BOOTSTRAP_BREAKPOINTS: Record<BootstrapBreakpoints, string> = {
  xs: "(max-width: 576px)",
  sm: "(min-width: 576px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 992px)",
  xl: "(min-width: 1200px)",
  xxl: "(min-width: 1400px)",
};
