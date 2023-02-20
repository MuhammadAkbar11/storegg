import { ITransaction } from "@utility/types/transaction";

const dummyTransactionData: ITransaction[] = [
  {
    game: "Mobile Legends: The New Battle 2021",
    gameImage: "/img/overview-1.png",
    platform: "Mobile",
    item: "200 Gold",
    price: "Rp. 290.000",
    status: "pending",
  },
  {
    game: "Valorant",
    gameImage: "/img/overview-2.png",
    platform: "Desktop",
    item: "1000 Points",
    price: "Rp. 590.000",
    status: "success",
  },
  {
    game: "Pubg Mobile",
    gameImage: "/img/overview-2.png",
    platform: "Mobile",
    item: "200 UC",
    price: "Rp. 120.000",
    status: "pending",
  },
  {
    game: "Mobile Legends: The New Battle 2021",
    gameImage: "/img/overview-1.png",
    platform: "Mobile",
    item: "200 Gold",
    price: "Rp. 120.000",
    status: "failed",
  },
  {
    game: "Pubg Mobile",
    gameImage: "/img/overview-2.png",
    platform: "Mobile",
    item: "200 UC",
    price: "Rp. 120.000",
    status: "pending",
  },
];

export default dummyTransactionData;
