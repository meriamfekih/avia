import React, { FC } from "react";
import styles from "./SearchInput.module.scss";

interface SearchInputProps {
  value: string;
  handleSearchChange: (search: string) => void;
}

const SearchInput: FC<SearchInputProps> = ({ value, handleSearchChange }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSearchChange(e.target.value);
  };

  return (
    <div className={styles.inputContainer}>
      <input
        value={value}
        className={styles.inputSearch}
        type="search"
        placeholder="Search for airports or aircompany"
        onChange={handleInputChange}
      />
      <span className={styles.searchIcon}>&#128269;</span>
    </div>
  );
};

export default SearchInput;
