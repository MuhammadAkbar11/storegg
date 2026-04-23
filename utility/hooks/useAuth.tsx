import { getAuthService, getUserTokenService } from "@services/auth.service";
import React from "react";
import { useQuery } from "react-query";

type Props = {
  isRetry?: boolean;
  isStale?: boolean;
};

const useAuth = (props?: Props) => {
  const [token, setToken] = React.useState<string | null>(null);
  const [isClientReady, setIsClientReady] = React.useState(false);

  const isRetry = props?.isRetry as boolean;
  const isStale = props?.isStale as boolean;

  React.useEffect(() => {
    setToken(getUserTokenService());
    setIsClientReady(true);
  }, []);

  const queryAuth = useQuery("userAuth", () => getAuthService(token || ""), {
    staleTime: isStale ? 5 * 1000 : 0,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    retry(failureCount: number, error: any) {
      if (!isRetry) {
        return false;
      }
      if (error) {
        return false;
      }
      return true;
    },
    // eslint-disable-next-line consistent-return
    onError(err) {
      if (err.name === "NOT_AUTH") {
        return null;
      }
    },
    enabled: isClientReady && !!token,
    useErrorBoundary() {
      return false;
    },
  });

  const refetchAuth = () => queryAuth.refetch();

  if (!isClientReady) {
    return {
      isAuth: false,
      authState: null,
      isLoading: false,
      refetchAuth,
    };
  }

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
