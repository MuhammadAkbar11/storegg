export type Platform = "Desktop" | "Mobile" | "Others";
export type TransactionStatus = "success" | "pending" | "failed";

export interface IFTransaction {
  game: string;
  gameImage: string;
  platform: Platform;
  item: string;
  price: string;
  status: TransactionStatus;
}
