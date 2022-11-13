import { IBank, IErrorAPI, IGameDetailItem } from "@globals/types";
import { getDetailVouherService } from "@services/player.service";
import { UNKNOWM_ERROR } from "@utils/constant.utils";
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
  banks: Partial<IBank[]>;
  loading: boolean;
  onFetchDataHandler: (ID: any) => void;
};

const voucherDetailContextDefaultValues: VoucherDetailContextType = {
  loading: true,
  voucher: null,
  banks: [],
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
  const [banks, setBanks] = useState<Partial<IBank[]>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [voucher, setVoucher] = useState<IGameDetailItem | null>(null);

  const onFetchDetailData = useCallback(async (id: any) => {
    try {
      const getVoucher = (await getDetailVouherService(id)) as any;
      setVoucher(getVoucher.voucher);
      setBanks(getVoucher.banks);
    } catch (error: any) {
      if (error.name !== UNKNOWM_ERROR) {
        setError(error);
      }
    }

    setLoading(false);
  }, []);

  const value: VoucherDetailContextType = {
    error,
    banks,
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
