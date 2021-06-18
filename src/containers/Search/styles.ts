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

  top: 135px;
  margin: auto;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 20px;

  width: 885px;
  overflow-y: visible;

  z-index: 1050;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -80px;
  right: -40px;

  width: 25px;
  height: 25px;

  font-family: "Dosis", sans-serif;
  font-size: 21px;
  font-weight: 800;

  color: var(--primary-color);
  cursor: pointer;

  outline: none;
  border: none;
  background-color: transparent;

  z-index: 1050;
`;
