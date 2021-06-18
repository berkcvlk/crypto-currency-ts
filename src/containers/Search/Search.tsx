import { useEffect, useState } from "react";

import { SearchBar } from "../../components/Search";
import { CoinList } from "../../components/Coin";

import { Backdrop, Results, CloseButton } from "./styles";

import { getCoins } from "../../api";
import { ICoin } from "../../types";

const Search = () => {
  const [isSearchFieldShown, setIsSearchFieldShown] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [coins, setCoins] = useState<ICoin[]>([]);
  const [filteredCoinsList, setFilteredCoinsList] = useState<ICoin[]>([]);

  const showSearchFieldHandler = () => {
    setIsSearchFieldShown(true);
  };

  const hideSearchFieldHandler = () => {
    setIsSearchFieldShown(false);

    // Clear text field
    setSearchText("");

    // Clear filtered list for next search
    setFilteredCoinsList([]);
  };

  const changeSearchTextHandler = (text: string) => {
    setSearchText(text);
  };

  useEffect(() => {
    (async () => {
      const list = await getCoins(200);
      setCoins(list);
    })();
  }, []);

  useEffect(() => {
    if (!searchText.length) {
      return;
    }

    setFilteredCoinsList(
      coins.filter((e) => e.name.toLowerCase().includes(searchText))
    );
  }, [coins, searchText]);

  const searchFieldRenderer = isSearchFieldShown && (
    <>
      <Backdrop />
      <Results>
        <CloseButton onClick={hideSearchFieldHandler}>X</CloseButton>
        <CoinList list={filteredCoinsList} />
      </Results>
    </>
  );

  return (
    <>
      <SearchBar
        onShowSearchField={showSearchFieldHandler}
        placeholder="Search"
        searchStateProps={{ state: searchText, set: changeSearchTextHandler }}
      ></SearchBar>
      {searchFieldRenderer}
    </>
  );
};

export default Search;
