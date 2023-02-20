import axios from "axios";
import { API_URI, ROOT_API } from "@utility/constant.utils";
import { getUserTokenService } from "./auth.service";
import { uTranformAxiosError } from "@utility/error.utils";
import { convertNestedObjKeysToCamelCase, uRupiah } from "@utility/index.utils";
import { ITransaction } from "@utility/types/transaction";

export async function getDashboardService() {
  try {
    const token = getUserTokenService();

    const response = await axios.get(`${API_URI}/dashboard`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const { data } = response;
    const resData = convertNestedObjKeysToCamelCase(data);
    const latestTransactions = resData.latestTransactions.map((tr: any) => {
      const history = tr?.history;
      const historyVoucher = history?.historyVoucher;
      const platform = historyVoucher?.category;
      return {
        transactionId: tr?.transactionId,
        game: historyVoucher.gameName,
        gameImage: ROOT_API + historyVoucher.thumbnail,
        item: `${historyVoucher?.coinQuantity} ${historyVoucher?.coinName}`,
        price: uRupiah(+historyVoucher?.price || 0),
        status: tr.status,
        platform: platform,
      } as ITransaction;
    });
    return { topupCategories: resData.topupCategories, latestTransactions };
  } catch (error: any) {
    throw uTranformAxiosError(error);
  }
}
