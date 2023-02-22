import React from "react";
import { ITransaction } from "@utility/types/transaction";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

interface Props extends ITransaction {
  actionNode?: React.ReactNode;
}

function TransactionTableRow(props: Props) {
  return (
    <tr data-category="pending" className="align-middle">
      <td>
        <div className=" d-flex ">
          <img
            className="float-start me-3 mb-lg-0 mb-3  object-cover "
            src={props?.gameImage}
            width={80}
            height={60}
            alt={props?.game}
            style={{ borderRadius: ".8rem" }}
          />
          <div className="game-title-header">
            <p className="game-title fw-medium text-start color-palette-1 m-0">
              {props?.game}
            </p>
            <p className="text-xs fw-normal text-start color-palette-2 m-0">
              {props?.platform}
            </p>
          </div>
        </div>
      </td>
      <td className=" text-nowrap pe-3 ">
        <p className="fw-medium color-palette-1 m-0">{props.item}</p>
      </td>
      <td className=" text-nowrap pe-3 ">
        <p className="fw-medium color-palette-1 m-0">{props.price}</p>
      </td>
      <td className=" text-nowrap ">
        <div className=" pe-5 pe-md-3">
          <span className={`float-start icon-status ${props.status}`} />
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {props.status}
          </p>
        </div>
      </td>
      {props.actionNode && props.actionNode}
    </tr>
  );
}

export default TransactionTableRow;
