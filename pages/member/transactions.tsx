import Head from "next/head";
import Link from "next/link";
import React from "react";
import Sidebar from "../../components/organisms/sidebar";
import TransactionsTabs from "../../components/organisms/transactions/transactionsTabs";
import TransactionTableRow from "../../components/organisms/transactions/TransactionTableRow";
import dummyTransactionData from "../../globals/transaction.data";
import { IFTransaction, TransactionStatus } from "../../globals/types";

type ActiveTypes = "*" | TransactionStatus;

type Props = {};

function Transactions({}: Props) {
  const [transactions, setTransactions] = React.useState<IFTransaction[]>([
    ...dummyTransactionData,
  ]);
  const [activeTab, setActiveTab] = React.useState<ActiveTypes>("*");

  const onSetActiveTabHandler = (value: ActiveTypes) => {
    setActiveTab(value);
    if (value !== "*") {
      const filtredTrs = dummyTransactionData.filter(tr => tr.status === value);
      setTransactions(filtredTrs);
    } else {
      setTransactions(dummyTransactionData);
    }
  };

  return (
    <>
      <Head>
        <title>Member Transactions | StoreGG</title>;
      </Head>
      <section className="transactions overflow-auto">
        <Sidebar activePath="/member/transactions" />
        <main className="main-wrapper">
          <div className="ps-lg-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-30">
              My Transactions
            </h2>
            <div className="mb-30">
              <p className="text-lg color-palette-2 mb-12">You’ve spent</p>
              <h3 className="text-5xl fw-medium color-palette-1">
                Rp 4.518.000.500
              </h3>
            </div>
            <div className="row mt-30 mb-20">
              <div className="col-lg-12 col-12 main-content">
                <TransactionsTabs
                  active={activeTab}
                  onSetActive={onSetActiveTabHandler}
                />
              </div>
            </div>
            <div className="latest-transaction">
              <p className="text-lg fw-medium color-palette-1 mb-14">
                Latest Transactions
              </p>
              <div className="main-content main-content-table overflow-auto">
                <table className="table table-borderless">
                  <thead>
                    <tr className="color-palette-1">
                      <th className={""} scope="col">
                        Game
                      </th>
                      <th scope="col">Item</th>
                      <th scope="col">Price</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((tr: IFTransaction, idx) => {
                      const key = idx;
                      return (
                        <TransactionTableRow
                          key={idx}
                          actionNode={
                            <td>
                              <Link href="/member/transactions-detail" passHref>
                                <a
                                  href="/member/transactions-detail"
                                  className="btn btn-status rounded-pill text-sm"
                                >
                                  Details
                                </a>
                              </Link>
                            </td>
                          }
                          {...tr}
                        />
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default Transactions;
