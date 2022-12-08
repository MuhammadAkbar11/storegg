import { API_URI } from "@utility/constant.utils";
import { uTranformAxiosError } from "@utility/error.utils";
import axios from "axios";

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

export function saveUserTokenService(token: string) {
  return localStorage.setItem("userToken", token);
}
