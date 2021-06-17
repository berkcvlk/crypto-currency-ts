import { useEffect, useState } from "react";

import { SearchBar } from "../../components/Search";
import { CoinList } from "../../components/Coin";

import { Backdrop, Results } from "./styles";

import { getCoins } from "../../api";
import { ICoin } from "../../types";

const Search = () => {
  const [isSearchFieldShown, setIsSearchFieldShown] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [coins, setCoins] = useState<ICoin[]>([]);

  const showSearchFieldHandler = () => {
    setIsSearchFieldShown(true);
  };

  useEffect(() => {
    (async () => {
      const list = await getCoins();
      setCoins(list);
    })();
  }, []);

  const searchFieldRenderer = isSearchFieldShown && (
    <>
      <Backdrop />
      <Results>
        <CoinList list={coins} />
      </Results>
    </>
  );

  return (
    <>
      <SearchBar
        onShowSearchField={showSearchFieldHandler}
        placeholder="Search"
      ></SearchBar>
      {searchFieldRenderer}
    </>
  );
};

export default Search;
