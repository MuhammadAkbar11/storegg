export interface ICheckout {
  voucher: string;
  accountGame: string;
  payment: string;
  nominal: string;
  name: string;
  bank: string;
}

export interface ITransaction {
  transactionId?: string;
  game: string;
  gameImage: string;
  platform: string;
  item: string;
  price: string;
  status: string;
}

export interface ITransactionPayer {
  value?: string;
  payDate?: string;
  bankAccountName?: string;
  bankName?: string;
  noBankAccount?: string;
  paymentNote?: string;
}

export interface IDetailTransaction extends ITransaction {
  accountGameID: string;
  tax: string;
  total: string;
  payer?: ITransactionPayer;
  isPaid: boolean;
  date: string;
  bankAccountName: string;
  bankName: string;
  noRekening: string;
  payType: string;
  name?: string;
}

export interface IListTRQueries {
  limit: number;
  status: string;
  page?: number;
}
