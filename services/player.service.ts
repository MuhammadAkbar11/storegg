import axios from "axios";
import { API_URI, ROOT_API } from "../globals/constants";
import { queriesToString } from "../utils/index.utils";

export interface IGame {
  voucherId: string;
  gameName: string;
  thumbnail: string;
  category: string;
}

interface IFeaturedGameQueries {
  limit: number;
  page: number;
  search?: string;
  sortBy?: string;
}

export async function getFeaturedGameService(arg: IFeaturedGameQueries) {
  const queries = queriesToString<IFeaturedGameQueries>(arg);
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
  } catch (error) {
    console.log(error);
  }
}
