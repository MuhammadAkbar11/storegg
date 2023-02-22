import React from "react";
import TransactionDetailsGame from "@molecules/transaction/transactionDetailsGame";
import TransactionDetailsItem from "@molecules/transaction/transactionDetailsItem";
import TransactionDetailsWrapper from "@molecules/transaction/transactionDetailsWrapper";
import Sidebar from "@organisms/sidebar";
import { notAuthRedirect } from "@utility/index.utils";
import { getAuthService } from "@services/auth.service";
import { GetServerSidePropsContext } from "next";
import {
  PrivateAuthProvider,
  usePrivateAuthContext,
} from "@utility/context/PrivateAuthContext";
import { IUserAuth } from "@utility/types";
import MemberPageTitle from "@components/molecules/memberPageTitle";

type Props = {
  userAuth: IUserAuth;
};

function TransactionsDetail({ userAuth }: Props) {
  const privateAuthCtx = usePrivateAuthContext();

  React.useEffect(() => {
    privateAuthCtx.onSetUser(userAuth);
  }, [userAuth]);

  return (
    <>
      <section className="transactions-detail overflow-auto">
        <Sidebar />
        <main className="main-wrapper">
          <div className="ps-lg-0">
            <MemberPageTitle title="Details #GG001" />

            <div className="details">
              <div className="main-content main-content-card overflow-auto">
                <section className="checkout mx-auto">
                  <div className="d-flex flex-row  align-items-center justify-content-between mb-30">
                    <TransactionDetailsGame
                      title="Mobile Legends: The New Battle 2021"
                      image="/img/Thumbnail-3.png"
                      platform="Mobile"
                      type="TransactionDetails"
                      status="success"
                    />
                  </div>
                  <hr />
                  <TransactionDetailsWrapper
                    title="Purchase Details"
                    className="purchase pt-30"
                  >
                    <TransactionDetailsItem
                      label="Your Game ID"
                      value="Baaev666"
                    />
                    <TransactionDetailsItem label="Order ID" value="#GG666" />
                    <TransactionDetailsItem label="Item" value="666 Diamonds" />
                    <TransactionDetailsItem
                      label="Price"
                      value="Rp. 106.666.00"
                    />
                    <TransactionDetailsItem
                      label="Tax (10%)"
                      value="Rp. 3.000"
                    />
                    <TransactionDetailsItem
                      label="Total"
                      highlight
                      value="Rp. 109.666.00"
                    />
                  </TransactionDetailsWrapper>
                  <TransactionDetailsWrapper
                    title="Payment Informations"
                    className="payment pt-10 pb-10"
                  >
                    <TransactionDetailsItem
                      label="Your Account Name"
                      value="Baaev Legieuvn"
                    />
                    <TransactionDetailsItem
                      label="Type"
                      value="Worldwide Transfer"
                    />
                    <TransactionDetailsItem label="Bank Name" value="Mandiri" />
                    <TransactionDetailsItem
                      label="Bank Account Name"
                      value="PT Store GG Indonesia"
                    />

                    <TransactionDetailsItem
                      label=" Bank Number payment-details"
                      value="1800 - 9090 - 2021"
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
