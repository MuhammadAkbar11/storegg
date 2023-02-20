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
