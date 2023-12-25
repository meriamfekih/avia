import React, { FC } from "react";
import useFakeAutoComplete from "../../../hooks/useFakeAutocomplete";
import styles from "./FlightsSearchBar.module.scss";
import AutocompleteDropdown from "../../views/AutocompleteDropdown/AutocompleteDropdown";
import SearchInput from "../../views/SearchInput/SearchInput";
import AirplaneImage from "../../../assets/images/airplane.png";
import { useNavigate, createSearchParams } from "react-router-dom";

const FlightsSearchBar = () => {
  const navigate = useNavigate();

  const {
    search,
    suggestions: { airlines, airports },
    setSearch,
  } = useFakeAutoComplete();

  const handleSelectFilter = (params: any) => {
    setSearch("");
    navigate({ pathname: "search", search: `?${createSearchParams(params)}` });
  };

  return (
    <div className={styles.container}>
      <img
        className={styles.airplaneImg}
        src={AirplaneImage}
        alt="airplane image"
      />
      <h1>Start Your Flight Search</h1>
      <div className={styles.searchContainer}>
        <SearchInput value={search} handleSearchChange={setSearch} />
        <AutocompleteDropdown
          airports={airports}
          airlines={airlines}
          handleSelectFilter={handleSelectFilter}
        />
      </div>
    </div>
  );
};

export default FlightsSearchBar;
