import { FC } from "react";

import { Input } from "./styles";

interface Props {
  placeholder: string;
}

const SearchBar: FC<Props> = ({ placeholder }) => {
  return <Input placeholder={placeholder}></Input>;
};

export default SearchBar;
