import { getAuthService, getUserTokenService } from "@services/auth.service";
import { useQuery } from "react-query";

type Props = {
  isRetry?: boolean;
  isStale?: boolean;
};

const useAuth = (props?: Props) => {
  const token = getUserTokenService();

  const isRetry = props?.isRetry as boolean;
  const isStale = props?.isStale as boolean;

  const queryAuth = useQuery("userAuth", () => getAuthService(token || ""), {
    staleTime: isStale ? 5 * 1000 : 0,
    retry(failureCount: number, error: any) {
      if (!isRetry) {
        return false;
      }
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
    enabled: token ? true : false,
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

useAuth.defaultProps = {};

export default useAuth;
