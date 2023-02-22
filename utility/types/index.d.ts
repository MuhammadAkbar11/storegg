export type Platform = "Desktop" | "Mobile" | "Others";
export type PaymentMethodType = "paypal" | "transfer" | "visa";
export type BootstrapBreakpoints = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

export interface IBank {
  bankId: string;
  accountName: string;
  bankName: string;
  noRekening: string;
}

export interface IPaymentMethods {
  paymentMethodId: string;
  type: string;
  status: string;
  banks: IBank[];
  text?: string;
}

export interface ICategory {
  categoryId: string;
  name: string;
  description: string;
}

// Games or Vouchers
export interface IGameItem {
  voucherId: string;
  gameName: string;
  thumbnail: string;
  gameCoinName: string;
  status: string;
  category: string;
}

export interface IGameNominal {
  nominalId: string;
  quantity: number;
  coinName: string;
  price: string;
  description: string;
}

export interface IGameDetailItem extends Omit<IGameItem, "category"> {
  nominals: IGameNominal[] | null;
  category: string;
}

export interface ITopupGame {
  voucher: IGameDetailItem;
  accountGame: string;
  payment: {
    bankAccountName?: string;
    paymentMethod: IPaymentMethods | string;
    bank?: IBank | null;
  };
  nominal: IGameNominal;
  [key: string]: any;
}

export interface IFeaturedGameQueries {
  limit: number;
  page: number;
  search?: string;
  sortBy?: string;
}

export interface IGameQueries {
  limit: number;
  page?: number;
  search?: string;
  sortBy?: string;
  category?: string;
}

export interface IListGamesQueries {
  limit: number;
  search?: string | null;
  sortBy?: string;
  category?: string | null;
  page?: number;
}

export interface IListGamesResponse {
  games: IGameItem[];
  totalItems?: number;
  totalPages?: number;
  currentPage?: number;
}

export interface IErrorAPI {
  name: string;
  message: string;
  statusCode: string;
  [key: string]: any;
}

export interface IUserAuth {
  playerId: string;
  userId: string;
  username: string;
  name: string;
  email: string;
  phoneNumber: string;
  avatar: string;
  favorite: string;
}
