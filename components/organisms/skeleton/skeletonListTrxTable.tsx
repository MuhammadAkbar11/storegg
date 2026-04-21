import Skeleton from "@components/atoms/skeleton";
import React from "react";

type Props = {};

function SkeletonListTrxTable({}: Props) {
  return (
    <>
      {Array(3)
        .fill(null)
        .map((_, idx) => {
          return (
            <tr key={idx} className="align-middle">
              <th scope="row">
                <Skeleton
                  width={80}
                  height={60}
                  className="float-start rounded-3 me-3 mb-lg-0  mb-3"
                />
                <div className="game-title-header">
                  <div className="game-title fw-medium text-start color-palette-1 m-0 mb-1">
                    <Skeleton height={18} />
                  </div>
                  <div className="game-title text-xs fw-normal text-start color-palette-2 m-0">
                    <Skeleton height={16} width={100} />
                  </div>
                </div>
              </th>
              <td>
                <div className="fw-medium color-palette-1 m-0">
                  <Skeleton height={20} width={100} />
                </div>
              </td>
              <td>
                <div className="fw-medium text-start color-palette-1 m-0">
                  <Skeleton height={20} width={120} />
                </div>
              </td>
              <td>
                <div>
                  <Skeleton height={20} width={80} />
                </div>
              </td>
              <td>
                <div>
                  <Skeleton height={30} width={50} />
                </div>
              </td>
            </tr>
          );
        })}
    </>
  );
}

export default SkeletonListTrxTable;
