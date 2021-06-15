import styled from "styled-components";

export const Input = styled.input`
  // Resets
  font-family: "Dosis", sans-serif;
  outline: none;
  border: none;
  box-shadow: none;

  width: 100%;
  height: 55px;

  font-size: 20px;
  font-weight: 700;
  text-align: center;

  color: var(--primary-color);
  background-color: var(--background-color);

  margin-bottom: 40px;
  border-radius: 15px;

  z-index: 1050;

  ::placeholder {
    font-weight: 600;

    color: #dddddd;
    text-transform: uppercase;
  }
`;
