import { API_URI, ROOT_API } from "@utility/constant.utils";
import { uTranformAxiosError } from "@utility/error.utils";
import { convertKeysToCamelCase } from "@utility/index.utils";
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

export async function getAuthService() {
  try {
    const token = Cookies.get("userToken");
    // const  tokenBase64 = btoa(token);
    if (!token) {
      return {
        isAuth: false,
      };
    }

    const undecodedToken = window.atob(token);

    const response = await axios.get(`${API_URI}/session`, {
      headers: {
        Authorization: `Bearer ${undecodedToken}`,
      },
    });

    let userAuth = { ...response.data?.data };

    userAuth = convertKeysToCamelCase(userAuth);
    userAuth.avatar = ROOT_API + userAuth.avatar;

    return {
      isAuth: true,
      authData: userAuth,
    };
  } catch (error) {
    console.log(error);
    throw uTranformAxiosError(error);
  }
}

export function saveUserTokenService(token: string) {
  const tokenBase64 = window.btoa(token);
  return Cookies.set("userToken", tokenBase64, {
    expires: 30,
  });
}

export function getUserTokenService() {
  return Cookies.get("userToken");
}
