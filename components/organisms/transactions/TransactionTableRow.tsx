import React from "react";
import { IFTransaction } from "../../../globals/types";

interface Props extends IFTransaction {
  actionNode?: React.ReactNode;
}

function TransactionTableRow(props: Props) {
  return (
    <tr data-category="pending" className="align-middle">
      <th scope="row">
        <img
          className="float-start me-3 mb-lg-0 mb-3"
          src={props.gameImage ? props.gameImage : "/img/overview-1.png"}
          width={80}
          height={60}
          alt={""}
        />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {props.game}
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">
            {props.platform}
          </p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">{props.item}</p>
      </td>
      <td>
        <p className="fw-medium color-palette-1 m-0">{props.price}</p>
      </td>
      <td>
        <div>
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
