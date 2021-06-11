import styled from "styled-components";

export const Item1 = styled.div`
  width: 290px;
  height: 290px;

  grid-column: 1 / 3;
  grid-row: 1 / 3;

  background-color: var(--faded-color);
  border-radius: 25px;
`;

export const Search = styled.div`
  width: 100%;
  height: 55px;

  margin-bottom: 40px;
  background-color: var(--background-color);
  border-radius: 15px;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 25px;
`;
