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
  onFetchDataHandler: (ID: any) => void;
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
  const [error, setError] = useState<IErrorAPI | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setVoucher] = useState<IGameDetailItem | null>(null);

  const onFetchDetailData = useCallback(async (id: any) => {
    try {
      const getVoucher = (await getDetailVouherService(id)) as any;
      setVoucher(getVoucher);
    } catch (error) {
      console.log("Context : ", error);
    }

    setLoading(false);
  }, []);

  const value: PageContextType = {
    error,
    page,
    loading,
    onFetchDataHandler: onFetchDetailData,
  };

  return (
    <>
      <PageContext.Provider value={value}>{children}</PageContext.Provider>
    </>
  );
}
