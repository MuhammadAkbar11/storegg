import { IErrorAPI, IGameDetailItem } from "@globals/types";
import { getDetailVouherService } from "@services/player.service";
import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useCallback,
} from "react";

type VoucherDetailContextType = {
  voucher: IGameDetailItem | null;
  error: IErrorAPI | null;
  loading: boolean;
  onFetchDataHandler: (ID: any) => void;
};

const voucherDetailContextDefaultValues: VoucherDetailContextType = {
  loading: true,
  voucher: null,
  error: null,
  onFetchDataHandler: () => {},
};

export const VoucherDetailContext = createContext<VoucherDetailContextType>(
  voucherDetailContextDefaultValues
);

export function useVoucherDetailContext() {
  return useContext(VoucherDetailContext);
}

type Props = {
  children: ReactNode;
};

export function VoucherDetailProvider({ children }: Props) {
  const [error, setError] = useState<IErrorAPI | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [voucher, setVoucher] = useState<IGameDetailItem | null>(null);

  const onFetchDetailData = useCallback(async (id: any) => {
    const getVoucher = (await getDetailVouherService(id)) as any;

    if (getVoucher.status !== "ERROR") {
      setVoucher(getVoucher);
    } else {
      setError({
        name: getVoucher?.errName,
        statusCode: getVoucher?.statusCode,
        message: getVoucher?.message,
      });
    }
    setLoading(false);
  }, []);

  const value: VoucherDetailContextType = {
    error,
    voucher,
    loading,
    onFetchDataHandler: onFetchDetailData,
  };

  return (
    <>
      <VoucherDetailContext.Provider value={value}>
        {children}
      </VoucherDetailContext.Provider>
    </>
  );
}
