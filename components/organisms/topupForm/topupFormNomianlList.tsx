import React from "react";
import { useVoucherDetailContext } from "@context/VoucherDetailContext";
import TopupFormNomialItem from "./topupFormNomialItem";

type Props = {};

function TopupFormNomianl({}: Props) {
  const { voucher } = useVoucherDetailContext();
  const nominals = voucher?.nominals ?? [];

  return (
    <>
      {nominals?.length !== 0
        ? nominals.map((nm, idx) => {
            return (
              <TopupFormNomialItem
                key={nm.nominalId}
                coinName={nm.coinName}
                nominalId={nm.nominalId}
                price={nm.price}
                quantity={nm.quantity}
              />
            );
          })
        : null}
    </>
  );
}

export default TopupFormNomianl;
