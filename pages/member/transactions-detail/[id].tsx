import React from "react";
import TransactionDetailsGame from "@molecules/transaction/transactionDetailsGame";
import TransactionDetailsItem from "@molecules/transaction/transactionDetailsItem";
import TransactionDetailsWrapper from "@molecules/transaction/transactionDetailsWrapper";
import Sidebar from "@organisms/sidebar";
import { notAuthRedirect, uDate } from "@utility/index.utils";
import { getAuthService } from "@services/auth.service";
import { GetServerSidePropsContext } from "next";
import {
  PrivateAuthProvider,
  usePrivateAuthContext,
} from "@utility/context/PrivateAuthContext";
import { IUserAuth } from "@utility/types";
import MemberPageTitle from "@components/molecules/memberPageTitle";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { getDetailTransactionService } from "@services/member.service";
import SkeletonDetailTrx from "@components/organisms/skeleton/skeletonDetailTrx";
import Skeleton from "@components/atoms/skeleton";
import Head from "next/head";

type Props = {
  userAuth: IUserAuth;
};

function TransactionsDetail({ userAuth }: Props) {
  const privateAuthCtx = usePrivateAuthContext();

  const router = useRouter();
  const transactionId = router.query?.id as string;
  const { data, isLoading } = useQuery(
    ["member-detail-tr", { id: router.query?.id }],
    () => getDetailTransactionService(transactionId),
    {
      enabled: transactionId ? true : false,
    }
  );
  React.useEffect(() => {
    privateAuthCtx.onSetUser(userAuth);
  }, [userAuth]);

  const titlePage = data?.transactionId
    ? `#${data?.transactionId}`
    : "Loading...";

  return (
    <>
      <Head>
        <title>{titlePage} | StoreGG</title>;
      </Head>
      <section className="transactions-detail overflow-auto">
        <Sidebar />
        <main className="main-wrapper">
          <div className="ps-lg-0">
            {/* <Skeleton height={"3rem"} width={300} /> */}
            {data ? (
              <MemberPageTitle title="Details #GG001" />
            ) : (
              <Skeleton height={"3rem"} width={300} />
            )}
            <div className="details">
              <div className="main-content main-content-card overflow-auto">
                {isLoading ? <SkeletonDetailTrx /> : null}
                {data ? (
                  <section className="checkout mx-auto">
                    <div className="d-flex flex-row  align-items-center justify-content-between mb-30">
                      <TransactionDetailsGame
                        title={data.game}
                        image={data?.gameImage}
                        platform={data?.platform}
                        type="TransactionDetails"
                        status={data?.status}
                      />
                    </div>
                    <hr />
                    <TransactionDetailsWrapper
                      title="Purchase Details"
                      className="purchase pt-30"
                    >
                      <TransactionDetailsItem
                        label="Date"
                        value={uDate(data?.date)}
                      />
                      <TransactionDetailsItem
                        label="Your Game ID"
                        value={data?.accountGameID}
                      />
                      <TransactionDetailsItem
                        label="Order ID"
                        value={("#" + data?.transactionId) as string}
                      />
                      <TransactionDetailsItem label="Item" value={data?.item} />
                      <TransactionDetailsItem
                        label="Price"
                        value={data?.price}
                      />
                      <TransactionDetailsItem
                        label="Tax (10%)"
                        value={data?.tax}
                      />
                      <TransactionDetailsItem
                        label="Total"
                        highlight
                        value={data?.total}
                      />
                    </TransactionDetailsWrapper>
                    <TransactionDetailsWrapper
                      title="Payment Informations"
                      className="payment pt-10 pb-10"
                    >
                      <TransactionDetailsItem
                        label="Payment Status"
                        highlightIsPaid={data?.isPaid ? "paid" : "unpaid"}
                        value={data?.isPaid ? "Paid" : "Unpaid"}
                      />
                      <TransactionDetailsItem
                        label="Your Account Name"
                        value={
                          (data?.payer?.bankAccountName as string) ||
                          (data?.name as string)
                        }
                      />

                      <TransactionDetailsItem
                        label="Type"
                        value={data?.payType}
                      />
                      <TransactionDetailsItem
                        label="Bank Name"
                        value={data?.bankName}
                      />
                      <TransactionDetailsItem
                        label="Bank Account Name"
                        value={data?.bankAccountName}
                      />

                      <TransactionDetailsItem
                        label=" Bank Number payment-details"
                        value={data?.noRekening}
                      />
                    </TransactionDetailsWrapper>

                    <div className="d-md-block d-flex flex-column w-100 mt-2">
                      <a
                        className="btn btn-whatsapp rounded-pill fw-medium text-white border-0 text-lg"
                        href="#"
                        role="button"
                      >
                        WhatsApp ke Admin
                      </a>
                    </div>
                  </section>
                ) : null}
              </div>
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

TransactionsDetail.providers = [PrivateAuthProvider];

export default TransactionsDetail;
