import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 310px;

  grid-column: 1 / 3;
  grid-row: 1 / 3;

  background-color: var(--background-color);
  border-radius: 25px;
`;

export const Image = styled.img`
  width: 90px;
  height: 90px;

  margin-bottom: 12px;
`;

export const Text = styled.span`
  font-size: 32px;
  font-weight: 800;

  color: var(--primary-color);

  letter-spacing: 5px;
  text-transform: uppercase;
`;
