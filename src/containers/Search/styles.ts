import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(81, 81, 81, 0.25);
  backdrop-filter: blur(3px);

  z-index: 1040;
`;

export const Results = styled.div`
  position: absolute;
  top: 170px;
  margin: auto;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 30px;

  width: 770px;
  height: calc(100vh - 250px);

  z-index: 1050;
`;
