import { API_URI, ROOT_API } from "@utility/constant.utils";
import { uTranformAxiosError } from "@utility/error.utils";
import { uConvertKeysToCamelCase } from "@utility/index.utils";
import axios from "axios";
import Cookies from "js-cookie";

export const nothing = {};

export async function postSignupService(data: any) {
  try {
    const response = await axios.post(`${API_URI}/auth/signup`, data);
    const { data: resData } = response.data;
    return resData;
  } catch (error: any) {
    throw uTranformAxiosError(error);
  }
}

export async function postSigninService(data: any) {
  try {
    const response = await axios.post(`${API_URI}/auth/signin`, data);
    const { data: resData } = response.data;
    return resData;
  } catch (error: any) {
    throw uTranformAxiosError(error);
  }
}

export async function getAuthService(token: string | null) {
  try {
    const response = await axios.get(`${API_URI}/session`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    let userAuth = { ...response.data?.data };

    userAuth = uConvertKeysToCamelCase(userAuth);
    userAuth.avatar = ROOT_API + userAuth.avatar;

    return userAuth;
  } catch (error) {
    const errRes = uTranformAxiosError(error);

    if (errRes.name.includes("NOT_AUTH")) {
      return false;
    }

    throw errRes;
  }
}

export function saveUserTokenService(token: string) {
  const tokenBase64 = window.btoa(token);
  return Cookies.set("userToken", tokenBase64, {
    expires: 30,
  });
}

export function getUserTokenService() {
  const token = Cookies.get("userToken");
  if (!token) return null;
  const undecodedToken = window.atob(token);
  return undecodedToken;
}
