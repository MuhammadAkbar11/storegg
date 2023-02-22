import Head from "next/head";
import Link from "next/link";
import React from "react";
import Sidebar from "@components/organisms/sidebar";
import TransactionsTabs from "@components/organisms/transactions/transactionsTabs";
import TransactionTableRow from "@components/organisms/transactions/TransactionTableRow";
import dummyTransactionData from "@utility/data/transaction";
import type { IUserAuth } from "@utility/types";
import { GetServerSidePropsContext } from "next";
import { notAuthRedirect, uRupiah } from "@utility/index.utils";
import { getAuthService } from "@services/auth.service";
import {
  PrivateAuthProvider,
  usePrivateAuthContext,
} from "@utility/context/PrivateAuthContext";
import { ITransaction } from "@utility/types/transaction";
import useActiveClass from "@hooks/useActiveClass";
import useMediaQuery from "@hooks/useMediaQuery";
import MemberPageTitle from "@components/molecules/memberPageTitle";
import { useInfiniteQuery } from "react-query";
import { getListTransactionService } from "@services/member.service";
import { Button, Spinner } from "react-bootstrap";
import Skeleton from "@components/atoms/skeleton";
import SkeletonListTrxTable from "@components/organisms/skeleton/skeletonListTrxTable";

type ActiveTypes = "*" | string;

type Props = {
  userAuth: IUserAuth;
};

function Transactions({ userAuth }: Props) {
  const [transactions, setTransactions] = React.useState<ITransaction[]>([
    ...dummyTransactionData,
  ]);
  const [activeTab, setActiveTab] = React.useState<ActiveTypes>("*");

  const privateAuthCtx = usePrivateAuthContext();

  const {
    data,
    isFetched,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    isSuccess,
    error,
  } = useInfiniteQuery(
    [
      "member-transactions",
      {
        status: activeTab,
      },
    ],
    {
      queryFn: ({ pageParam = 1 }) => {
        return getListTransactionService({
          limit: 5,
          page: pageParam,
          status: activeTab.includes("*") ? "" : activeTab,
        });
      },
      getNextPageParam: lastPage => {
        if (lastPage) {
          const nextPage = lastPage?.currentPage as number;
          const totaPages = lastPage?.totalPages as number;
          if (nextPage < totaPages) {
            return (nextPage + 1) as number;
          } else {
            return undefined;
          }
        }
      },
    }
  );

  React.useEffect(() => {
    privateAuthCtx.onSetUser(userAuth);
  }, [userAuth]);

  const onSetActiveTabHandler = (value: ActiveTypes) => {
    setActiveTab(value);
    if (value !== "*") {
      const filtredTrs = dummyTransactionData.filter(tr => tr.status === value);
      setTransactions(filtredTrs);
    } else {
      setTransactions(dummyTransactionData);
    }
  };
  const mdscreen = useMediaQuery("md");

  const tableClassname = useActiveClass({
    isActive: !mdscreen,
    defaultClass: "main-content main-content-table",
    activeClass: ["scroll-x"],
  });

  const totalSpent = data?.pages[0]?.totalSpent || "Rp. 0";
  console.log(totalSpent);
  return (
    <>
      <Head>
        <title>Member Transactions | StoreGG</title>;
      </Head>
      <section className="transactions overflow-auto">
        <Sidebar activePath="/member/transactions" />
        <main className={"main-wrapper"}>
          <div className="ps-lg-0 pb-5">
            <MemberPageTitle title="My Transactions" />
            <div className="mb-30">
              <p className="text-lg color-palette-2 mb-12">You’ve spent</p>
              <h3 className="text-5xl fw-medium color-palette-1 ">
                {isLoading ? (
                  <Skeleton height={"2.6rem"} width={"300px"} />
                ) : (
                  uRupiah(+totalSpent)
                )}
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
              <div className={tableClassname}>
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
                    {isSuccess
                      ? data.pages.map(page =>
                          page?.histories?.map((tr: ITransaction) => {
                            return (
                              <TransactionTableRow
                                key={tr.transactionId}
                                actionNode={
                                  <td>
                                    <Link
                                      href={`/member/transactions-detail/${tr.transactionId}`}
                                      passHref
                                    >
                                      <a
                                        href={`/member/transactions-detail/${tr.transactionId}`}
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
                          })
                        )
                      : null}

                    {!isFetched ? (
                      <>
                        <SkeletonListTrxTable />
                      </>
                    ) : null}

                    {data?.pages.length === 1 &&
                    data.pages[0].histories.length === 0 ? (
                      <tr className="align-middle text-center">
                        <td colSpan={4}>
                          <div className="py-3 text-palette-2 ">
                            <p>
                              Belum ada transaksi{" "}
                              {activeTab !== "*" ? (
                                <>
                                  dengan status
                                  <strong> {activeTab}</strong>
                                </>
                              ) : (
                                "saat ini"
                              )}
                            </p>
                          </div>{" "}
                        </td>
                      </tr>
                    ) : null}
                  </tbody>
                </table>
              </div>
              {data && hasNextPage ? (
                <div className="col-12 py-4 d-flex justify-content-center ">
                  <div>
                    {!isFetchingNextPage ? (
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => fetchNextPage()}
                      >
                        Load More
                      </Button>
                    ) : (
                      <Button variant="secondary" size="sm" disabled>
                        <Spinner
                          as="span"
                          animation="border"
                          className="me-2"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                        Loading...
                      </Button>
                    )}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const token = ctx.req.cookies?.userToken;
  if (!token) {
    return notAuthRedirect(`/auth/sign-in?redirect=${ctx.req.url}`);
  }
  const jwtToken = Buffer.from(token, "base64").toString("ascii");
  try {
    const userAuth = await getAuthService(jwtToken);
    if (!userAuth)
      return notAuthRedirect(`/auth/sign-in?redirect=${ctx.req.url}`);
    return {
      props: {
        userAuth,
      },
    };
  } catch (error) {
    return notAuthRedirect(`/auth/sign-in?redirect=${ctx.req.url}`);
  }
}

Transactions.providers = [PrivateAuthProvider];

export default Transactions;
