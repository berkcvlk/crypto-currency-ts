import styled from "styled-components";
import { SearchBar } from "../../components/Search";

const Search = () => {
  return (
    <>
      <Backdrop />
      <SearchBar placeholder="Search"></SearchBar>
    </>
  );
};

const Backdrop = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;

  background-color: rgba(81, 81, 81, 0.25);
  backdrop-filter: blur(3px);

  z-index: 1040;
`;

export default Search;
