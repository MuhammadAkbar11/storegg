import Link from "next/link";
import React from "react";
import { Button, Card, Spinner } from "react-bootstrap";
import { getListGameService } from "@services/player.service";
import { queriesToString } from "@utility/index.utils";
import { IGameItem, IListGamesQueries } from "@utility/types";
import { useInfiniteQuery } from "react-query";

type Props = {
  filter: IListGamesQueries;
};

function ListGames({ filter }: Props) {
  const {
    data,
    isFetched,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    isSuccess,
    error,
  } = useInfiniteQuery(
    [
      "games",
      {
        search: filter.search,
        category: filter.category,
        sortBy: filter.sortBy,
      },
    ],
    {
      queryFn: ({ pageParam = 1 }) => {
        return getListGameService({ ...filter, page: pageParam });
      },
      getNextPageParam: lastPage => {
        if (lastPage) {
          const nextPage = lastPage?.currentPage as number;
          const totaPages = lastPage?.totalPages as number;
          if (nextPage < totaPages) {
            return (nextPage + 1) as number;
          } else {
            return undefined;
          }
        }
      },
    }
  );

  return (
    <section className="pb-50 list-game">
      <div className="container">
        <div className=" row pt-50 ">
          {isSuccess
            ? data.pages.map(page =>
                page.games?.map((game: IGameItem) => {
                  return (
                    <div
                      key={game.voucherId}
                      className="col-sm-6 col-md-4 col-lg-3 mb-4"
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
                                  Top Up Now
                                </a>
                              </Link>
                            </div>
                          </Card.Body>
                        </Card>
                      </div>
                    </div>
                  );
                })
              )
            : null}
          {data &&
          data?.pages.length === 1 &&
          data.pages[0].games.length === 0 ? (
            <div className=" flex justify-center w-100 pt-50 pb-50">
              <h3 className="text-4xl fw-bold color-palette-1 text-center mb-10">
                There are No Games Found
              </h3>
            </div>
          ) : null}
          {!isFetched ? (
            <div className="col-12 d-flex justify-content-center py-5 ">
              <Spinner animation="border" variant="primary" />
            </div>
          ) : null}
          {data && hasNextPage ? (
            <div className="col-12 py-4 d-flex justify-content-center ">
              <div>
                {!isFetchingNextPage ? (
                  <Button variant="primary" onClick={() => fetchNextPage()}>
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
