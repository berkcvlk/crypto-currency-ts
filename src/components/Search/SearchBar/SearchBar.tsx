import { FC } from "react";

import { Input } from "./styles";

interface Props {
  // When user focus on the search input
  // show the search field which contains
  // results that get by searchText
  onShowSearchField: () => void;
  placeholder: string;
}

const SearchBar: FC<Props> = ({ onShowSearchField, placeholder }) => {
  return <Input onFocus={onShowSearchField} placeholder={placeholder}></Input>;
};

export default SearchBar;
