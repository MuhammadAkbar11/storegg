import Skeleton from "@components/atoms/skeleton";
import useGetOverview from "@hooks/useGetOverview";
import { ITransaction } from "@utility/types/transaction";
import React from "react";

type Props = {};

function OverviewLatestTransactions({}: Props) {
  const overview = useGetOverview();

  const transactions = overview.data?.latestTransactions as ITransaction[];
  console.log(overview);
  return (
    <div className="latest-transaction">
      <p className="text-lg fw-medium color-palette-1 mb-14">
        Latest Transactions
      </p>
      <div className="main-content main-content-table overflow-auto">
        <table className="table table-borderless">
          <thead>
            <tr className="color-palette-1">
              <th className="text-start" scope="col">
                Game
              </th>
              <th scope="col">Item</th>
              <th scope="col">Price</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {overview.isLoading
              ? Array(3)
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
                      </tr>
                    );
                  })
              : transactions && transactions?.length !== 0
              ? transactions.map((tr, idx) => {
                  return (
                    <tr
                      className="align-middle text-center"
                      key={tr?.transactionId || idx}
                    >
                      <td>
                        <div>
                          <img
                            className="float-start me-3 mb-lg-0 mb-3  object-cover "
                            src={tr?.gameImage}
                            width={80}
                            height={60}
                            alt={tr?.game}
                            style={{ borderRadius: ".8rem" }}
                          />
                          <div className="game-title-header">
                            <p className="game-title fw-medium text-start color-palette-1 m-0">
                              {tr?.game}
                            </p>
                            <p className="text-xs fw-normal text-start color-palette-2 m-0">
                              {tr?.platform}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td width={200}>
                        <p className="fw-medium text-start ps-1 color-palette-1 m-0">
                          {tr?.item}
                        </p>
                      </td>
                      <td>
                        <p className="fw-medium text-start color-palette-1 m-0">
                          {tr?.price}
                        </p>
                      </td>
                      <td>
                        <div>
                          <span
                            className={`float-start icon-status ${tr?.status}`}
                          />
                          <p className="fw-medium text-start color-palette-1 m-0 position-relative text-capitalize ">
                            {tr?.status}
                          </p>
                        </div>
                      </td>
                    </tr>
                  );
                })
              : null}

            {/* {transactions ? (

            ) : null} */}

            {/* <tr className="align-middle text-center">
              <th scope="row">
                <img
                  className="float-start me-3 mb-lg-0 mb-3"
                  src="/img/overview-2.png"
                  width={80}
                  height={60}
                  alt={""}
                />
                <div className="game-title-header">
                  <p className="game-title fw-medium text-start color-palette-1 m-0">
                    Call of Duty:Modern
                  </p>
                  <p className="text-xs fw-normal text-start color-palette-2 m-0">
                    Desktop
                  </p>
                </div>
              </th>
              <td>
                <p className="fw-medium text-start color-palette-1 m-0">
                  550 Gold
                </p>
              </td>
              <td>
                <p className="fw-medium text-start color-palette-1 m-0">
                  Rp 740.000
                </p>
              </td>
              <td>
                <div>
                  <span className="float-start icon-status success" />
                  <p className="fw-medium text-start color-palette-1 m-0 position-relative">
                    Success
                  </p>
                </div>
              </td>
            </tr>
            <tr className="align-middle text-center">
              <th scope="row">
                <img
                  className="float-start me-3 mb-lg-0 mb-3"
                  src="/img/overview-3.png"
                  width={80}
                  height={60}
                  alt={""}
                />
                <div className="game-title-header">
                  <p className="game-title fw-medium text-start color-palette-1 m-0">
                    Clash of Clans
                  </p>
                  <p className="text-xs fw-normal text-start color-palette-2 m-0">
                    Mobile
                  </p>
                </div>
              </th>
              <td>
                <p className="fw-medium text-start color-palette-1 m-0">
                  100 Gold
                </p>
              </td>
              <td>
                <p className="fw-medium text-start color-palette-1 m-0">
                  Rp 120.000
                </p>
              </td>
              <td>
                <div>
                  <span className="float-start icon-status failed" />
                  <p className="fw-medium text-start color-palette-1 m-0 position-relative">
                    Failed
                  </p>
                </div>
              </td>
            </tr>
            <tr className="align-middle text-center">
              <th scope="row">
                <img
                  className="float-start me-3 mb-lg-0 mb-3"
                  src="/img/overview-4.png"
                  width={80}
                  height={60}
                  alt={""}
                />
                <div className="game-title-header">
                  <p className="game-title fw-medium text-start color-palette-1 m-0">
                    The Royal Game
                  </p>
                  <p className="text-xs fw-normal text-start color-palette-2 m-0">
                    Mobile
                  </p>
                </div>
              </th>
              <td>
                <p className="fw-medium text-start color-palette-1 m-0">
                  225 Gold
                </p>
              </td>
              <td>
                <p className="fw-medium text-start color-palette-1 m-0">
                  Rp 200.000
                </p>
              </td>
              <td>
                <div>
                  <span className="float-start icon-status pending" />
                  <p className="fw-medium text-start color-palette-1 m-0 position-relative">
                    Pending
                  </p>
                </div>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OverviewLatestTransactions;
