import React from "react";
import { useGameDetailContext } from "@context/GameDetailContext";
import TopupFormNomialItem from "./topupFormNomialItem";
import { uRupiah } from "@utility/index.utils";

type Props = {};

function TopupFormNomianl({}: Props) {
  const { voucher } = useGameDetailContext();
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
                price={uRupiah(Number(nm.price))}
                quantity={nm.quantity}
              />
            );
          })
        : null}
    </>
  );
}

export default TopupFormNomianl;
