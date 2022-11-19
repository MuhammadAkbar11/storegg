import Head from "next/head";
import React from "react";
import Footer from "@components/organisms/footer";
import NavbarMenu from "@components/organisms/navbarMenu";
import PageHero from "@components/organisms/pageHero";
import useInitAOS from "utility/hooks/useInitAOS";
import FormFilterGames from "@components/molecules/formFilterGames";
import { IListGamesQueries, IListGamesResponse } from "@utility/types";
import ListGames from "@components/organisms/listGames";
import useDebounce from "@hooks/useDebounce";

type Props = {};

type ResultType = { totalShowing: number } & Omit<IListGamesResponse, "games">;

const defaultFilter = {
  limit: 20,
  page: 0,
};

function ListGamesPage({}: Props) {
  const [result, setResult] = React.useState<ResultType>({
    totalItems: 0,
    currentPage: 0,
    totalShowing: 0,
  });
  const [filter, setFilter] = React.useState<IListGamesQueries>(defaultFilter);

  useInitAOS();

  const onSetResult = (values: ResultType) => {
    setResult(values);
  };

  const onSearchingHandler = (values: string) => {
    setFilter(prevState => ({
      limit: prevState.limit,
      search: values,
    }));
  };

  return (
    <>
      <Head>
        <title>Games | StoreGG</title>
      </Head>
      <NavbarMenu />
      <PageHero title="Games" align="start" />
      <section className="">
        <div className="container">
          <FormFilterGames
            onSetFilter={setFilter}
            onSetSearching={onSearchingHandler}
          />
        </div>
      </section>
      <ListGames
        filter={filter}
        onSetResult={onSetResult}
        result={result}
        onSetFilter={setFilter}
      />
      <Footer />
    </>
  );
}

// ListGamesPage.provider = ListGamesProvider;

export default ListGamesPage;
