import { getAuthService, getUserTokenService } from "@services/auth.service";
import { useQuery } from "react-query";

const useAuth = () => {
  const token = getUserTokenService();

  const queryAuth = useQuery("userAuth", () => getAuthService(token || ""), {
    staleTime: 5 * 1000,
    retry(failureCount: number, error: any) {
      if (error) {
        return false;
      }
      return true;
    },
    onError(err) {
      if (err.name === "NOT_AUTH") {
        return null;
      }
    },
    useErrorBoundary(_error, _query) {
      return false;
    },
  });

  const refetchAuth = () => queryAuth.refetch();

  if (!queryAuth.isLoading && !queryAuth.data) {
    return {
      isAuth: false,
      authState: null,
      isLoading: queryAuth.isLoading,
      refetchAuth,
    };
  }

  return {
    isAuth: !!queryAuth.data,
    authState: queryAuth.data,
    isLoading: queryAuth.isLoading,
    refetchAuth,
  };
};

export default useAuth;
