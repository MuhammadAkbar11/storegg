import Link from "next/link";
import React from "react";
import Logo from "@atoms/logo";
import TransactionDetailsGame from "@molecules/transaction/transactionDetailsGame";
import TransactionDetailsItem from "@molecules/transaction/transactionDetailsItem";
import TransactionDetailsWrapper from "@molecules/transaction/transactionDetailsWrapper";
import Layout from "@components/organisms/layout";
import { GetServerSidePropsContext } from "next";
import { getAuthService } from "@services/auth.service";
import { notAuthRedirect, uRupiah } from "@utility/index.utils";
import { useTopupContext } from "@utility/context/TopupContext";
import { useRouter } from "next/router";
import { useToastContext } from "@utility/context/ToastContext";
import { useMutation } from "react-query";
import { postCheckoutService } from "@services/player.service";
import { ICheckout } from "@utility/types/transaction";

type Props = {};

function instanceOfPaymentObj(object: any) {
  if (object instanceof Object && "paymentMethodId" in object) {
    return true;
  }

  return false;
}

function Checkout({}: Props) {
  const [isPaid, setIsPaid] = React.useState(false);
  const isRender = React.useRef(true);
  // const router = useRou
  const toastCtx = useToastContext();

  const { topupFormData, onSetAllowRedirect, onSetResetTopup } =
    useTopupContext();
  const voucher = topupFormData?.voucher;
  const router = useRouter();

  const accountGame = topupFormData?.accountGame || "-";
  const item = `${topupFormData?.nominal?.quantity || 0} ${
    topupFormData?.nominal?.coinName || "-"
  }`;
  const price = Number(topupFormData?.nominal?.price) || 0;
  const tax = (price * 10) / 100;
  const total = price + tax;

  const paymentMethod = topupFormData?.payment?.paymentMethod;
  const bankAccountName = topupFormData?.payment?.bankAccountName || "-";
  const bank = topupFormData?.payment?.bank;

  React.useEffect(() => {
    if (isRender.current) {
      isRender.current = false;
      if (!topupFormData && !voucher) {
        router.push("/games");
        toastCtx.onAddToast(
          {
            variant: "error",
            message: "Data checkout sebelumnya telah selesai atau ter-reset!",
          },
          2000
        );
      } else {
        if (!instanceOfPaymentObj(paymentMethod)) {
          setIsPaid(true);
        }
      }
    }
  }, [voucher, topupFormData, paymentMethod]);

  const mutation = useMutation(postCheckoutService, {
    onSuccess() {
      toastCtx.onAddToast({
        variant: "success",
        message: "Topup Berhasil",
        hideDelay: 8000,
      });

      setTimeout(() => {
        router.push("/completed-checkout");
      }, 100);
      setTimeout(() => {
        onSetResetTopup();
      }, 1000);
    },
    onError(_error, _variables) {
      toastCtx.onAddToast({
        variant: "error",
        message:
          "Checkout gagal, terjadi kesalahan sistem. Mohon coba lagi nanti atau hubungi dukungan pelanggan kami",
        hideDelay: 8000,
      });
    },
  });

  const onHandleCheckout = () => {
    if (!isPaid) {
      toastCtx.onAddToast({
        variant: "error",
        message: "Jika telah melakukan pembayaran, tolong dikonfirmasi!",
      });
      return;
    }

    let resultPayment = null;

    if (
      typeof paymentMethod === "object" &&
      "paymentMethodId" in paymentMethod
    ) {
      resultPayment = paymentMethod?.paymentMethodId;
    } else {
      resultPayment = paymentMethod;
    }
    const data: ICheckout = {
      voucher: voucher?.voucherId as string,
      nominal: topupFormData?.nominal?.nominalId as string,
      payment: resultPayment as string,
      bank: bank?.bankId as string,
      name: topupFormData?.payment?.bankAccountName as string,
      accountGame: accountGame,
    };

    onSetAllowRedirect(true);
    mutation.mutate(data);
  };

  return (
    <Layout pageTitle="Checkout" navbar={false} footer={false}>
      <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
        <div className="container-fluid">
          <div className="logo text-md-center text-start pb-50">
            <Link href="/" passHref>
              <a href="/">
                <Logo />
              </a>
            </Link>
          </div>
          <div className="title-text pt-md-50 pt-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
            <p className="text-lg color-palette-1 mb-0">
              Waktunya meningkatkan cara bermain
            </p>
          </div>
          <TransactionDetailsGame
            type="Checkout"
            title={voucher?.gameName || "-"}
            image={voucher?.thumbnail || "/img/Thumbnail-3.png"}
            platform={voucher?.category || "Mobile"}
          />
          <hr />
          <TransactionDetailsWrapper
            title="Purchase Details"
            className="purchase pt-md-50 pt-30"
          >
            <TransactionDetailsItem label="Your Game ID" value={accountGame} />

            {/* <TransactionDetailsItem label="Order ID" value="#GG666" /> */}
            <TransactionDetailsItem label="Item" value={item} />
            <TransactionDetailsItem
              label="Price"
              value={uRupiah(price) || "Rp. 0"}
            />
            <TransactionDetailsItem label="Tax (10%)" value={uRupiah(tax)} />
            <TransactionDetailsItem
              label="Total"
              highlight
              value={uRupiah(total)}
            />
          </TransactionDetailsWrapper>
          {/* Payments */}
          <TransactionDetailsWrapper
            title="Payment Informations"
            className="payment pt-md-50 pb-md-50 pt-10 pb-10"
          >
            {bank ? (
              <TransactionDetailsItem
                label="Your Account Name"
                value={bankAccountName}
              />
            ) : null}
            {typeof paymentMethod === "string" ? (
              <TransactionDetailsItem
                label="Type"
                value={paymentMethod || "-"}
              />
            ) : (
              <TransactionDetailsItem
                label="Type"
                value={paymentMethod?.type || "-"}
              />
            )}
            {bank ? (
              <>
                <TransactionDetailsItem
                  label="Bank Name"
                  value={bank?.bankName || "-"}
                />
                <TransactionDetailsItem
                  label="Bank Account Name"
                  value={bank?.accountName || "-"}
                />
                <TransactionDetailsItem
                  label=" Bank Number payment-details"
                  value={bank?.noRekening || "-"}
                />
              </>
            ) : null}
          </TransactionDetailsWrapper>
          {bank ? (
            <label className="checkbox-label text-lg color-palette-1">
              I have transferred the money
              <input
                type="checkbox"
                checked={isPaid}
                onChange={() => setIsPaid(!isPaid)}
              />
              <span className="checkmark" />
            </label>
          ) : null}
          <div className=" d-flex flex-column flex-md-row w-100 pt-50 gap-2  ">
            <Link href={`/detail/${voucher?.voucherId}`} passHref>
              <a
                className="btn btn-cancel-payment fw-medium text-lg color-palette-1 rounded-pill order-1 order-md-0 "
                role="button"
              >
                Back
              </a>
            </Link>
            {/* <Link href={"/completed-checkout"}> */}
            <button
              type="button"
              className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg order-0 order-md-1"
              // role="button"
              disabled={!isPaid || mutation.isLoading}
              onClick={() => onHandleCheckout()}
            >
              Confirm Payment
            </button>
            {/* </Link> */}
          </div>
        </div>
      </section>
    </Layout>
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

export default Checkout;
