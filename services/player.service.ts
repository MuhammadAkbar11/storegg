/* eslint-disable no-useless-catch */
import {
  ICategory,
  IFeaturedGameQueries,
  IGameDetailItem,
  IGameItem,
  IGameNominal,
  IListGamesQueries,
  IListGamesResponse,
  IPaymentMethods,
} from "@utility/types";
import type { IBank } from "@utility/types";
import { uTranformAxiosError } from "@utility/error.utils";
import axios from "axios";
import { API_URI, ROOT_API } from "@utility/constant.utils";
import { uConvertKeysToCamelCase, queriesToString } from "@utility/index.utils";
import { ICheckout } from "@utility/types/transaction";
import { getUserTokenService } from "./auth.service";

export async function getFeaturedGameService(
  queryOpt: IFeaturedGameQueries
): Promise<IGameItem[]> {
  const queries = queriesToString<IFeaturedGameQueries>(queryOpt);
  try {
    const response = await axios.get(`${API_URI}/vouchers?${queries}`);
    const { data } = response.data;
    const result = data.vouchers.map((g: any) => ({
      voucherId: g.voucher_id,
      gameName: g.game_name,
      thumbnail: ROOT_API + g.thumbnail,
      category: g.category?.name,
    }));

    return result;
  } catch (error: any) {
    throw error;
  }
}

export async function getListGameService(
  queryOpt: IListGamesQueries
): Promise<IListGamesResponse> {
  const queries = queriesToString<IListGamesQueries>(queryOpt);

  try {
    const response = await axios.get(`${API_URI}/vouchers?${queries}`);
    const { data } = response.data;

    const result = data.vouchers.map((g: any) => ({
      voucherId: g.voucher_id,
      gameName: g.game_name,
      thumbnail: ROOT_API + g.thumbnail,
      category: g.category?.name,
    }));
    delete data.vouchers;

    return { games: result, ...data };
  } catch (error: any) {
    throw error;
  }
}

export async function getDetailVouherService(voucherID: string) {
  try {
    const response = await axios.get(`${API_URI}/vouchers/${voucherID}`);
    const { data } = response.data;
    const { voucher } = data;

    const banks = data.banks.map(
      (bank: any): IBank => ({
        bankId: bank.bank_id,
        bankName: bank.bank_name,
        accountName: bank.account_name,
        noRekening: bank.no_rekening,
      })
    );
    const voucherResult: IGameDetailItem = {
      voucherId: voucher.voucher_id,
      gameName: voucher.game_name,
      thumbnail: ROOT_API + voucher.thumbnail,
      category: voucher.category?.name,
      status: voucher.status,
      gameCoinName: voucher.game_coin_name,
      nominals: voucher.nominals.map(
        (nm: any) =>
          <IGameNominal>{
            nominalId: nm.nominal_id,
            quantity: nm.coin_quantity,
            coinName: nm.coin_name,
            price: nm.price,
            description: nm.description,
          }
      ),
    };

    const payments = data.payments.map((py: IPaymentMethods) => {
      const item = uConvertKeysToCamelCase(py);
      return {
        ...item,
        banks: py.banks.map((bnk) => uConvertKeysToCamelCase(bnk)),
      };
    });

    return { banks, voucher: voucherResult, payments };
  } catch (error: any) {
    throw uTranformAxiosError(error);
  }
}

export async function getCategoryListService(): Promise<ICategory[]> {
  try {
    const response = await axios.get(`${API_URI}/categories`);
    const { data: resData } = response.data;

    const result = resData.map(
      (cat: any): ICategory => ({
        categoryId: cat.category_id,
        name: cat.name,
        description: cat.description,
      })
    );
    return result;
  } catch (error: any) {
    throw error;
  }
}

export async function postCheckoutService(data: ICheckout) {
  try {
    const token = getUserTokenService();

    const response = await axios.post(`${API_URI}/checkout`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const { data: resData } = response.data;
    return resData;
  } catch (error: any) {
    throw uTranformAxiosError(error);
  }
}
