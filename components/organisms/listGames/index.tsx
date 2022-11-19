import Link from "next/link";
import useSWR from "swr";
import React from "react";
import { Button, Card, Spinner } from "react-bootstrap";
import { listGameFetcherService } from "@services/player.service";
import { API_URI } from "@utility/constant.utils";
import { queriesToString } from "@utility/index.utils";
import {
  IGameItem,
  IListGamesQueries,
  IListGamesResponse,
} from "@utility/types";

type ResultType = { totalShowing: number } & Omit<IListGamesResponse, "games">;

type Props = {
  filter: IListGamesQueries;
  result?: ResultType;
  onSetResult: (values: ResultType) => void;
  onSetFilter: (values: IListGamesQueries) => void;
};

function ListGames({ filter, onSetResult, result, onSetFilter }: Props) {
  const [loadingMore, setLoading] = React.useState<boolean>(false);
  const queries = queriesToString<IListGamesQueries>(filter);
  const address = `${API_URI}/vouchers?${queries}`;
  // const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(address, listGameFetcherService);

  // console.log(games);
  // const { games, loading, filter, onFetchDataHandler, loadingMore, error } =
  //   useListGamesContext();

  // const { search, limit, skip, totalShowing, total } = filter;

  const totalItems = result?.totalItems as number;
  const totalShowing = result?.totalShowing as number;

  const onLoadMoreHandler = () => {};

  React.useEffect(() => {
    if (data) {
      onSetResult({
        totalItems: data.totalItems,
        totalShowing: data.games.length,
        currentPage: data.currentPage,
        totalPages: data.totalPages,
      });
    }
  }, [data]);

  return (
    <section className="pb-50 list-game">
      <div className="container">
        <div className=" row pt-50 ">
          {!data ? (
            <div className="col-12 d-flex justify-content-center py-5 ">
              <Spinner animation="border" variant="primary" />
            </div>
          ) : null}
          {data
            ? data.games?.map((game: IGameItem) => {
                return (
                  <div
                    key={game.voucherId}
                    className="col-ms-6 col-md-4 col-lg-3 mb-4"
                  >
                    <div className="list-game-item shadow-none">
                      <Card className=" w-100 border-0 list-game-card shadow-none  ">
                        <div className=" card-img-box ">
                          <Card.Img
                            variant="top"
                            className="h-100 object-cover"
                            src={game.thumbnail}
                          />
                        </div>
                        <Card.Body className="d-flex flex-column justify-content-between ">
                          <div className="pb-2">
                            <Card.Title className="flex-1  ">
                              {game.gameName}
                            </Card.Title>
                            <Card.Text className=" fw-normal mb-0  ">
                              {game.category}
                            </Card.Text>
                          </div>
                          <div className=" d-flex align-items-center w-100 justify-content-between mt-auto flex-1 pt-1 h-100">
                            <Link href={`/detail/${game.voucherId}`}>
                              <a
                                className="btn btn-topup text-nowrap  rounded-pill w-100"
                                role="button"
                              >
                                Top-up now
                              </a>
                            </Link>
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                );
              })
            : null}
          {data && data?.games.length === 0 ? (
            <div className=" flex justify-center w-100 pt-50 pb-50">
              <h3 className="text-4xl fw-bold color-palette-1 text-center mb-10">
                There are No Games Found
              </h3>
            </div>
          ) : null}
          {data && result && totalShowing < totalItems ? (
            <div className="col-12 py-4 d-flex justify-content-center ">
              <div>
                {!loadingMore ? (
                  <Button variant="primary" onClick={onLoadMoreHandler}>
                    Load More
                  </Button>
                ) : (
                  <Button variant="primary" disabled>
                    <Spinner
                      as="span"
                      animation="border"
                      className="me-2"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    Loading...
                  </Button>
                )}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default ListGames;
