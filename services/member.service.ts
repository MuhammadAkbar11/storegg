import axios from "axios";
import { API_URI, ROOT_API } from "@utility/constant.utils";
import { getUserTokenService } from "./auth.service";
import { uTranformAxiosError } from "@utility/error.utils";
import {
  uConvertKeysToCamelCase,
  uConvertNestedObjKeysToCamelCase,
  queriesToString,
  uRupiah,
} from "@utility/index.utils";
import {
  IDetailTransaction,
  IListTRQueries,
  ITransaction,
  ITransactionPayer,
} from "@utility/types/transaction";

export async function getDashboardService() {
  try {
    const token = getUserTokenService();

    const response = await axios.get(`${API_URI}/dashboard`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const { data } = response;
    const resData = uConvertNestedObjKeysToCamelCase(data);
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

// Promise<IListGamesResponse>
export async function getListTransactionService(queryOpt: IListTRQueries) {
  const queries = queriesToString<IListTRQueries>(queryOpt);
  const token = getUserTokenService();
  try {
    const response = await axios.get(`${API_URI}/histories?${queries}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const { data } = response;

    const resData = uConvertNestedObjKeysToCamelCase(data);
    const {
      totalItems,
      totalPages,
      histories: oldHistories,
      currentPage,
      totalSpent,
    } = resData;
    const histories = oldHistories.map((tr: any) => {
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
    return { histories, totalItems, totalPages, totalSpent, currentPage };
  } catch (error: any) {
    throw uTranformAxiosError(error);
  }
}

export async function getDetailTransactionService(transactionId: string) {
  const token = getUserTokenService();
  try {
    const response = await axios.get(`${API_URI}/histories/${transactionId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const { data } = response;

    const resData = uConvertNestedObjKeysToCamelCase(data);
    const transaction = resData.history;
    const history = transaction.history;
    const historyVoucher = history?.historyVoucher;
    const historyPayment = history?.historyPayment;
    const payerData = historyPayment?.payer
      ? uConvertKeysToCamelCase(JSON.parse(historyPayment?.payer))
      : null;

    const result: IDetailTransaction = {
      transactionId: transaction.transactionId,
      game: historyVoucher.gameName,
      gameImage: ROOT_API + historyVoucher.thumbnail,
      item: `${historyVoucher?.coinQuantity} ${historyVoucher?.coinName}`,
      price: uRupiah(+historyVoucher?.price || 0),
      status: transaction.status,
      platform: historyVoucher?.category,
      accountGameID: transaction?.accountGame,
      payer: payerData ? (payerData as ITransactionPayer) : undefined,
      tax: uRupiah(+transaction?.tax || 0),
      total: uRupiah(+transaction.value),
      isPaid: transaction.isPaid,
      date: transaction.createdAt,
      bankAccountName: historyPayment.bankAccountName,
      bankName: historyPayment.bankName,
      noRekening: historyPayment.noRekening,
      payType: historyPayment.type,
      name: transaction?.name,
    };
    return result;
  } catch (error: any) {
    throw uTranformAxiosError(error);
  }
}
