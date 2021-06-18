import React, { FC } from "react";

import { Input } from "./styles";

interface Props {
  // When user focus on the search input
  // show the search field which contains
  // results that get by searchText
  onShowSearchField: () => void;

  // Object contains search text state and
  // state set function handler
  searchStateProps: { state: string; set: (text: string) => void };
  placeholder: string;
}

const SearchBar: FC<Props> = ({
  onShowSearchField,
  placeholder,
  searchStateProps,
}) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchStateProps.set(e.target.value);
  };

  return (
    <Input
      value={searchStateProps.state}
      onFocus={onShowSearchField}
      onChange={onChangeHandler}
      placeholder={placeholder}
    ></Input>
  );
};

export default SearchBar;
