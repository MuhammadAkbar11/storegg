import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { useGameDetailContext } from "@context/GameDetailContext";
import TopupFormNomianlList from "./topupFormNomianlList";
import TopupFormPaymentItem from "./topupFormPaymentItem";
import TopupFormTransferBank from "./topUpTransferBank";
import { Form } from "react-bootstrap";
import { toptupSchema, TopupInput } from "@utility/schema/topup.schema";
import useAuth from "@hooks/useAuth";
import { useToastContext } from "@utility/context/ToastContext";
import Cookies from "js-cookie";
import { useTopupContext } from "@utility/context/TopupContext";
import {
  IBank,
  IGameDetailItem,
  IGameNominal,
  IPaymentMethods,
  ITopupGame,
} from "@utility/types";
import { useRouter } from "next/router";

type Props = {};

function TopUpForm({}: Props) {
  const { banks, voucher, payments: listPayments } = useGameDetailContext();
  const toastCtx = useToastContext();
  const auth = useAuth();
  const topupCtx = useTopupContext();
  const router = useRouter();

  const defaultPayMethodCtx = topupCtx.topupFormData?.payment?.paymentMethod;
  const defaultPayMethodValues =
    typeof defaultPayMethodCtx === "string"
      ? defaultPayMethodCtx
      : defaultPayMethodCtx?.paymentMethodId;
  const methods = useForm<TopupInput>({
    resolver: zodResolver(toptupSchema),
    defaultValues: {
      accountID: topupCtx?.topupFormData?.accountGame || "",
      paymentMethod: defaultPayMethodValues,
      nominal: topupCtx.topupFormData?.nominal?.nominalId || "",
    },
    shouldUnregister: true,
  });

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { isValid },
    unregister,
  } = methods;

  const payMethodState = watch("paymentMethod") ?? "";
  const bankTransferState = watch("bankTransfer");
  const bankTransferAccountState = watch("bankTransferAccount");

  const findPayment =
    payMethodState?.trim() !== ""
      ? listPayments.filter(
          py =>
            py &&
            py?.paymentMethodId
              .toLowerCase()
              .includes(payMethodState?.toLowerCase())
        )
      : null;

  const listBanks =
    findPayment && findPayment.length !== 0 ? findPayment[0].banks : null;

  const isTransferMethod = (findPayment && findPayment?.length > 0) ?? false;

  const onSubmitHandler = (values: TopupInput) => {
    if (!auth.isAuth) {
      toastCtx.onAddToast({
        variant: "error",
        message: `Silahkan <strong>Sign in</strong> untuk melanjutkan top up`,
        hideDelay: 6000,
      });
      return;
    }

    const topupVoucher = voucher as IGameDetailItem;
    const selectedBank = banks.find(
      b => b?.bankId === values?.bankTransfer
    ) as IBank;
    const selectedNominal = voucher?.nominals?.find(
      nm => nm.nominalId === values.nominal
    ) as IGameNominal;
    const selectedPayment = listPayments.find(
      py => py.paymentMethodId === values.paymentMethod.trim()
    ) as IPaymentMethods;

    const inputValues: ITopupGame = {
      voucher: topupVoucher,
      accountGame: values.accountID,
      payment: {
        bank: selectedBank,
        paymentMethod: selectedPayment ? selectedPayment : values.paymentMethod,
        bankAccountName: values?.bankTransferAccount || "",
      },
      nominal: selectedNominal,
    };

    if (voucher) {
      topupCtx.onSetToptupForm(inputValues);
      router.push("/checkout");
    }
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmitHandler)} method="POST">
        <div className="pt-md-50 pt-30">
          <Form.Group controlId="ID">
            <Form.Label className="form-label text-lg fw-medium color-palette-1 mb-10">
              Verify ID
            </Form.Label>
            <Form.Control
              type="text"
              className="form-control rounded-pill text-lg"
              aria-describedby="verifyID"
              placeholder="Enter your ID"
              {...register("accountID")}
            />
            {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
          </Form.Group>
        </div>
        <div className="pt-md-50 pb-md-50 pt-30 pb-20">
          <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
            Nominal Top Up
          </p>
          <div className="row justify-content-between">
            <TopupFormNomianlList />
            <div className="col-lg-4 col-sm-6">{/* Blank */}</div>
          </div>
        </div>
        <div className="pb-md-50 pb-20">
          <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
            Payment Method
          </p>
          <fieldset id="paymentMethod">
            <div className="row justify-content-between">
              {listPayments.map(py => {
                return (
                  <TopupFormPaymentItem
                    key={py.paymentMethodId}
                    payMethodId={py.paymentMethodId}
                    title={py.type}
                    text={py?.text || ""}
                  />
                );
              })}
              {/* <TopupFormPaymentItem
                title="Transfer"
                text="Worldwide Available"
              /> */}
              <TopupFormPaymentItem title="Visa" text="Credit Card" />
              {/*
              <TopupFormPaymentItem title="Paypal" text="Simple and fast" /> */}
              <div className="col-lg-4 col-sm-6">{/* Blank */}</div>
            </div>
          </fieldset>
        </div>
        {listBanks ? (
          <div className="pb-md-50 pb-20">
            <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
              Select Bank To Transfer
            </p>
            <fieldset id="bankTransfer">
              <div className="row justify-content-between">
                {listBanks.map(bnk => {
                  return (
                    <TopupFormTransferBank
                      isRequired={isTransferMethod}
                      paymentMethod={payMethodState}
                      bankId={bnk?.bankId}
                      key={bnk?.bankId}
                      bankName={bnk?.bankName}
                      accountName={bnk?.accountName}
                      noRekening={bnk?.noRekening}
                    />
                  );
                })}
                <div className="col-lg-4 col-sm-6"></div>
              </div>
            </fieldset>
          </div>
        ) : null}
        {listBanks ? (
          <div className="pb-50">
            <label
              htmlFor="bankAccount"
              className="form-label text-lg fw-medium color-palette-1 mb-10"
            >
              Bank Account Name
            </label>
            <input
              type="text"
              className="form-control rounded-pill text-lg"
              id="bankAccount"
              aria-describedby="bankAccount"
              placeholder="Enter your Bank Account Name"
              {...register("bankTransferAccount", {
                required: isTransferMethod,
              })}
            />
          </div>
        ) : null}

        <div className="d-sm-block d-flex flex-column w-100">
          <button
            type="submit"
            className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
            disabled={isValid ? false : true}
          >
            Continue
          </button>
        </div>
      </Form>
    </FormProvider>
  );
}

export default TopUpForm;
