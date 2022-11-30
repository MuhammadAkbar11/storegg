import Head from "next/head";
import React from "react";
import Footer from "@components/organisms/footer";
import NavbarMenu from "@components/organisms/navbarMenu";
import PageHero from "@components/organisms/pageHero";
import useInitAOS from "utility/hooks/useInitAOS";
import FormFilterGames from "@components/molecules/formFilterGames";
import { IListGamesQueries } from "@utility/types";
import ListGames from "@components/organisms/listGames";

type Props = {};

const defaultFilter = {
  limit: 8,
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
    <>
      <Head>
        <title>Games | StoreGG</title>
      </Head>
      <NavbarMenu />
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
      <Footer />
    </>
  );
}

// ListGamesPage.provider = ListGamesProvider;

export default ListGamesPage;
