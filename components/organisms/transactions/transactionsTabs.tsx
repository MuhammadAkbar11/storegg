import React from "react";
import { Button } from "react-bootstrap";
import clsx from "classnames";

type ActiveTypes = "*" | string;

type Props = {
  active: ActiveTypes;
  onSetActive: (value: ActiveTypes) => void;
};

function TransactionsTabs({ active, onSetActive }: Props) {
  const tabClassName = (filter: ActiveTypes) =>
    clsx("btn-status border-0 rounded-pill text-sm me-3 mb-3", {
      "btn-active": active === filter,
    });

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button: HTMLButtonElement = event.currentTarget;
    const dataFilter = button.dataset!.filter;
    onSetActive(dataFilter as ActiveTypes);
  };

  return (
    <div className="d-flex w-100 align-items-center flex-wrap overflow-x-scroll ">
      <Button
        data-filter="*"
        // href="#"
        className={tabClassName("*")}
        onClick={onClickHandler}
      >
        All Trx
      </Button>
      <Button
        data-filter="success"
        onClick={onClickHandler}
        className={tabClassName("success")}
      >
        Success
      </Button>
      <Button
        data-filter="pending"
        onClick={onClickHandler}
        className={tabClassName("pending")}
      >
        Pending
      </Button>
      <Button
        data-filter="failed"
        onClick={onClickHandler}
        className={tabClassName("failed")}
      >
        Failed
      </Button>
    </div>
  );
}

export default TransactionsTabs;
