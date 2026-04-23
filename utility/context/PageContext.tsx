import { IErrorAPI, IGameDetailItem } from "@utility/types";
import { getDetailVouherService } from "@services/player.service";
import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useCallback,
} from "react";

type PageContextType = {
  page: IGameDetailItem | null;
  error: IErrorAPI | null;
  loading: boolean;
  onFetchDataHandler: (ID: string | number) => void;
};

const pageDetailContextDefaultValues: PageContextType = {
  loading: true,
  page: null,
  error: null,
  onFetchDataHandler: () => {},
};

export const PageContext = createContext<PageContextType>(
  pageDetailContextDefaultValues
);

export function usePageContext() {
  return useContext(PageContext);
}

type Props = {
  children: ReactNode;
};

export function PageProvider({ children }: Props) {
  const [error] = useState<IErrorAPI | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setVoucher] = useState<IGameDetailItem | null>(null);

  const onFetchDetailData = useCallback(async (id: string | number) => {
    try {
      const getVoucher = (await getDetailVouherService(
        String(id)
      )) as unknown as IGameDetailItem;
      setVoucher(getVoucher);
    } catch (err) {
      // Optionally handle error here (e.g., set error state)
    }

    setLoading(false);
  }, []);

  const value: PageContextType = React.useMemo(
    () => ({
      error,
      page,
      loading,
      onFetchDataHandler: onFetchDetailData,
    }),
    [error, page, loading, onFetchDetailData]
  );

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
}
