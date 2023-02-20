import { getDashboardService } from "@services/member.service";
import { useQuery } from "react-query";

const useGetOverview = () =>
  useQuery("member-overview", getDashboardService, { staleTime: 15 * 1000 });

export default useGetOverview;
