import { getAuthService } from "@services/auth.service";
import { useQuery } from "react-query";

const useAuth = () =>
  useQuery("userAuth", getAuthService, {
    staleTime: 15 * 1000,
  });

export default useAuth;
