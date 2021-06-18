import styled from "styled-components";

export const Div = styled.div`
  height: 130px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 25px;
  background-color: var(--background-color);

  padding: 20px;
`;

export const Image = styled.img`
  width: auto;
  height: 42px;

  opacity: 0.65;
  /* filter: grayscale(1); */
  object-fit: contain;

  margin-bottom: 12px;
`;

export const Price = styled.span`
  font-size: 16px;
  font-weight: 600;

  color: #787878;
`;
