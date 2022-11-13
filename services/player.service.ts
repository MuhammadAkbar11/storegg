import {
  IBank,
  IFeaturedGameQueries,
  IGameDetailItem,
  IGameNominal,
} from "@globals/types";
import { uTranformAxiosError } from "@utils/error.utils";
import axios from "axios";
import { API_URI, ROOT_API } from "../globals/constants";
import { queriesToString, uRupiah } from "../utils/index.utils";

export async function getFeaturedGameService(queryOpt: IFeaturedGameQueries) {
  const queries = queriesToString<IFeaturedGameQueries>(queryOpt);
  try {
    const response = await axios.get(`${API_URI}/vouchers?${queries}`);
    const { data } = response.data;
    const result = data.rows.map((g: any) => {
      return {
        voucherId: g.voucher_id,
        gameName: g.game_name,
        thumbnail: ROOT_API + g.thumbnail,
        category: g.category?.name,
      };
    });
    return result;
  } catch (error: any) {
    return { status: "ERROR", error };
  }
}

export async function getDetailVouherService(voucherID: string) {
  try {
    const response = await axios.get(`${API_URI}/vouchers/${voucherID}`);
    const { data } = response.data;
    const voucher = data.voucher;

    const banks = data.banks.map((bank: any): IBank => {
      return {
        bankId: bank.bank_id,
        bankName: bank.bank_name,
        accountName: bank.account_name,
        noRekening: bank.no_rekening,
      };
    });
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
            price: uRupiah(Number(nm.price)),
            description: nm.description,
          }
      ),
    };

    return { banks, voucher: voucherResult };
  } catch (error: any) {
    throw uTranformAxiosError(error);
  }
}
