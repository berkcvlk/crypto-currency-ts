import { FC } from "react";

import { Input } from "./styles";

interface Props {
  onFocus: () => void;
  placeholder: string;
}

const SearchBar: FC<Props> = ({ onFocus, placeholder }) => {
  return <Input onFocus={onFocus} placeholder={placeholder}></Input>;
};

export default SearchBar;
