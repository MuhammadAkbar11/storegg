import React from "react";
import ExploreIcon from "@components/atoms/icons/exploreIcon";
import { Form } from "react-bootstrap";
import useDebounce from "utility/hooks/useDebounce";
import { IListGamesQueries } from "@utility/types";

type Props = {
  filterData: IListGamesQueries;
  onSetFilter: (values: Partial<IListGamesQueries>) => void;
  onSetSearching: (value: string) => void;
};

function FormSeachGames({ onSetSearching, onSetFilter, filterData }: Props) {
  const [filterType, setFilterType] = React.useState("NAME");
  const [filterCategory, setFilterCategory] = React.useState("ALL");
  const [loadingSearch, setLoadingSearch] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [focusSearch, setFocusSearch] = React.useState(false);

  const debounceSearch = useDebounce(search, 800);

  React.useEffect(() => {
    if (debounceSearch.trim() !== "") {
      onSetSearching(debounceSearch || "");
      setLoadingSearch(false);
    } else {
      onSetSearching("");
      setLoadingSearch(false);
    }
  }, [debounceSearch]);

  React.useEffect(() => {
    const category =
      filterCategory !== "ALL" ? filterCategory.toLocaleLowerCase() : "";
    const sortBy = filterType.toLocaleLowerCase();
    onSetFilter({ category: category, sortBy: sortBy });
  }, [filterType, filterCategory]);

  const onFilterByCategoryHandler = (value: string) => {
    setFilterCategory(value);
  };

  const onFilterByHandler = (eventKey: string) => {
    setFilterType(eventKey);
  };

  const onChangeSearchHandler = (value: string) => {
    setLoadingSearch(true);
    setSearch(value);
  };

  const activeSearching = focusSearch ? "hover" : "";

  return (
    <>
      <div className="row flex align-items-center ">
        <div className="col-12 col-md-6 col-lg-5  ">
          <Form className=" rounded-pill " action="#">
            <div
              className={[
                "list-search-form rounded-pill px-4 my-auto",
                activeSearching,
              ].join(" ")}
            >
              <button className=" ps-0 pe-3 ">
                {loadingSearch ? (
                  <div className="spin relative ">
                    <span
                      className="spinner-border spinner-border-sm  text-primary"
                      role="status"
                    >
                      <span className="visually-hidden">Loading...</span>
                    </span>
                  </div>
                ) : (
                  <span className="icon">
                    <ExploreIcon />
                  </span>
                )}
              </button>
              <div className=" flex w-100">
                <Form.Control
                  onFocus={() => setFocusSearch(true)}
                  onBlur={() => setFocusSearch(false)}
                  onChange={e => onChangeSearchHandler(e.target.value)}
                  type="text"
                  placeholder="Search here..."
                  className="list-search-input px-3 py-0"
                />
              </div>
            </div>
          </Form>
        </div>
        <div className="mt-3 ms-auto mt-md-0 col-sm-6 col-md-6 col-lg-3  ">
          <Form.Group className="d-flex h-100 w-100 align-items-start flex-nowrap ">
            <Form.Label className="d-none d-md-flex text-nowrap my-auto text-palette-1  ">
              Filter by :
            </Form.Label>
            <Form.Control
              size="sm"
              as="select"
              value={filterType}
              className="bg-transparent ms-md-3 px-3 text-black-50 py-2 rounded-pill"
              onChange={e => onFilterByHandler(e.target.value)}
            >
              <option value="NAME">A-Z</option>
              <option value="FEATURED">Popular</option>
            </Form.Control>
          </Form.Group>
        </div>
        <div className="mt-3 mt-lg-0 col-sm-6 col-md-5 col-lg-3 ms-auto  ms-lg-2  ">
          <Form.Group className="d-flex h-100 w-100 align-items-start flex-nowrap ">
            <Form.Label className="d-none d-md-flex text-nowrap my-auto text-palette-1  ">
              Category by :
            </Form.Label>
            <Form.Control
              size="sm"
              as="select"
              value={filterCategory}
              className="bg-transparent ms-md-3 px-3 text-black-50 py-2 rounded-pill"
              onChange={e => onFilterByCategoryHandler(e.target.value)}
            >
              <option value="ALL">All</option>
              <option value="MOBILE">Mobile</option>
              <option value="DESKTOP">Desktop</option>
              <option value="OTHERS">Others</option>
            </Form.Control>
          </Form.Group>
        </div>
      </div>
    </>
  );
}

export default FormSeachGames;
