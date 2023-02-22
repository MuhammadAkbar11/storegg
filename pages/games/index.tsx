import Head from "next/head";
import React from "react";
import PageHero from "@components/organisms/pageHero";
import useInitAOS from "utility/hooks/useInitAOS";
import FormFilterGames from "@components/molecules/formFilterGames";
import { IListGamesQueries } from "@utility/types";
import ListGames from "@components/organisms/listGames";
import Layout from "@components/organisms/layout";

type Props = {};

const defaultFilter = {
  limit: 12,
  page: 0,
};

function ListGamesPage({}: Props) {
  const [filter, setFilter] = React.useState<IListGamesQueries>(defaultFilter);

  useInitAOS();

  const onSearchingHandler = (values: string) => {
    setFilter(prevState => ({
      ...prevState,
      limit: prevState.limit,
      search: values,
    }));
  };

  const onFilteringHandler = (values: Partial<IListGamesQueries>) => {
    setFilter(prevState => ({
      ...prevState,
      ...values,
    }));
  };

  return (
    <Layout pageTitle="Games">
      <PageHero title="Games" align="start" />
      <section className="">
        <div className="container">
          <FormFilterGames
            filterData={filter}
            onSetFilter={onFilteringHandler}
            onSetSearching={onSearchingHandler}
          />
        </div>
      </section>
      <ListGames filter={filter} />
    </Layout>
  );
}

export default ListGamesPage;
