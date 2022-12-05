import { getCategoryListService } from "@services/player.service";
import { useQuery } from "react-query";

const useGetCategories = () =>
  useQuery("categories", getCategoryListService, { staleTime: 15 * 1000 });

export default useGetCategories;
