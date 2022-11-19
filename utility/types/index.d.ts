export type Platform = "Desktop" | "Mobile" | "Others";
export type TransactionStatus = "success" | "pending" | "failed";
export type PaymentMethodType = "paypal" | "transfer" | "visa";

export interface IBank {
  bankId: string;
  accountName: string;
  bankName: string;
  noRekening: string;
}

export interface IFTransaction {
  game: string;
  gameImage: string;
  platform: Platform;
  item: string;
  price: string;
  status: TransactionStatus;
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
