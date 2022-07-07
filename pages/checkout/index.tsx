import Link from "next/link";
import React from "react";
import Logo from "../../components/atoms/logo";
import TransactionDetailsGame from "../../components/molecules/transaction/transactionDetailsGame";
import TransactionDetailsItem from "../../components/molecules/transaction/transactionDetailsItem";
import TransactionDetailsWrapper from "../../components/molecules/transaction/transactionDetailsWrapper";

type Props = {};

function Checkout({}: Props) {
  return (
    <>
      {/* Checkout Content */}
      <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
        <div className="container-fluid">
          <div className="logo text-md-center text-start pb-50">
            <Link href="/">
              <Logo />
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
            title="Mobile Legends: The New Battle 2021"
            image="/img/Thumbnail-3.png"
            platform="Mobile"
          />
          <hr />
          <TransactionDetailsWrapper
            title="Purchase Details"
            className="purchase pt-md-50 pt-30"
          >
            <TransactionDetailsItem label="Your Game ID" value="Baaev666" />
            <TransactionDetailsItem label="Order ID" value="#GG666" />
            <TransactionDetailsItem label="Item" value="666 Diamonds" />
            <TransactionDetailsItem label="Price" value="Rp. 106.666.00" />
            <TransactionDetailsItem label="Tax (10%)" value="Rp. 3.000" />
            <TransactionDetailsItem
              label="Total"
              highlight
              value="Rp. 109.666.00"
            />
          </TransactionDetailsWrapper>
          <TransactionDetailsWrapper
            title="Payment Informations"
            className="payment pt-md-50 pb-md-50 pt-10 pb-10"
          >
            <TransactionDetailsItem
              label="Your Account Name"
              value="Baaev Legieuvn"
            />
            <TransactionDetailsItem label="Type" value="Worldwide Transfer" />
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
          <label className="checkbox-label text-lg color-palette-1">
            I have transferred the money
            <input type="checkbox" />
            <span className="checkmark" />
          </label>
          <div className="d-md-block d-flex flex-column w-100 pt-50">
            <a
              className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg"
              href="./complete-checkout.html"
              role="button"
            >
              Confirm Payment
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Checkout;
