import React from "react";
import Sidebar from "../../components/organisms/sidebar";

type Props = {};

function Transactions({}: Props) {
  return (
    <>
      <section className="transactions overflow-auto">
        <Sidebar activePath="/member/transactions" />
        <main className="main-wrapper">
          <div className="ps-lg-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-30">
              My Transactions
            </h2>
            <div className="mb-30">
              <p className="text-lg color-palette-2 mb-12">You’ve spent</p>
              <h3 className="text-5xl fw-medium color-palette-1">
                Rp 4.518.000.500
              </h3>
            </div>
            <div className="row mt-30 mb-20">
              <div className="col-lg-12 col-12 main-content">
                <div id="list_status_title">
                  <a
                    data-filter="*"
                    href="#"
                    className="btn btn-status rounded-pill text-sm btn-active me-3"
                  >
                    All Trx
                  </a>
                  <a
                    data-filter="success"
                    href="#"
                    className="btn btn-status rounded-pill text-sm me-3"
                  >
                    Success
                  </a>
                  <a
                    data-filter="pending"
                    href="#"
                    className="btn btn-status rounded-pill text-sm me-3"
                  >
                    Pending
                  </a>
                  <a
                    data-filter="failed"
                    href="#"
                    className="btn btn-status rounded-pill text-sm me-3"
                  >
                    Failed
                  </a>
                </div>
              </div>
            </div>
            <div className="latest-transaction">
              <p className="text-lg fw-medium color-palette-1 mb-14">
                Latest Transactions
              </p>
              <div className="main-content main-content-table overflow-auto">
                <table className="table table-borderless">
                  <thead>
                    <tr className="color-palette-1">
                      <th className={""} scope="col">
                        Game
                      </th>
                      <th scope="col">Item</th>
                      <th scope="col">Price</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody id="list_status_item">
                    <tr data-category="pending" className="align-middle">
                      <th scope="row">
                        <img
                          className="float-start me-3 mb-lg-0 mb-3"
                          src="/img/overview-1.png"
                          width={80}
                          height={60}
                          alt={""}
                        />
                        <div className="game-title-header">
                          <p className="game-title fw-medium text-start color-palette-1 m-0">
                            Mobile Legends: The New Battle 2021
                          </p>
                          <p className="text-xs fw-normal text-start color-palette-2 m-0">
                            Desktop
                          </p>
                        </div>
                      </th>
                      <td>
                        <p className="fw-medium color-palette-1 m-0">
                          200 Gold
                        </p>
                      </td>
                      <td>
                        <p className="fw-medium color-palette-1 m-0">
                          Rp 290.000
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
                      <td>
                        <a
                          href="../member/transactions-detail.html"
                          className="btn btn-status rounded-pill text-sm"
                        >
                          Details
                        </a>
                      </td>
                    </tr>
                    <tr data-category="success" className="align-middle">
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
                        <p className="fw-medium color-palette-1 m-0">
                          550 Gold
                        </p>
                      </td>
                      <td>
                        <p className="fw-medium color-palette-1 m-0">
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
                      <td>
                        <a
                          href="../member/transactions-detail.html"
                          className="btn btn-status rounded-pill text-sm"
                        >
                          Details
                        </a>
                      </td>
                    </tr>
                    <tr data-category="failed" className="align-middle">
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
                        <p className="fw-medium color-palette-1 m-0">
                          100 Gold
                        </p>
                      </td>
                      <td>
                        <p className="fw-medium color-palette-1 m-0">
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
                      <td>
                        <a
                          href="../member/transactions-detail.html"
                          className="btn btn-status rounded-pill text-sm"
                        >
                          Details
                        </a>
                      </td>
                    </tr>
                    <tr data-category="pending" className="align-middle">
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
                        <p className="fw-medium color-palette-1 m-0">
                          225 Gold
                        </p>
                      </td>
                      <td>
                        <p className="fw-medium color-palette-1 m-0">
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
                      <td>
                        <a
                          href="../member/transactions-detail.html"
                          className="btn btn-status rounded-pill text-sm"
                        >
                          Details
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default Transactions;
