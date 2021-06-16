import { useEffect, useState } from "react";

import { SearchBar } from "../../components/Search";
import { CoinList } from "../../components/Coin";

import { Backdrop, Results } from "./styles";

import { getCoins } from "../../api";
import { ICoin } from "../../types";

const Search = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [coins, setCoins] = useState<ICoin[]>([]);

  const onFocusHandler = () => {
    setIsFocused(true);
  };

  useEffect(() => {
    (async () => {
      const list = await getCoins();
      setCoins(list);
    })();
  }, []);

  return (
    <>
      <SearchBar onFocus={onFocusHandler} placeholder="Search"></SearchBar>

      {!isFocused || (
        <>
          <Backdrop />
          <Results>
            <CoinList list={coins} />
          </Results>
        </>
      )}
    </>
  );
};

export default Search;
