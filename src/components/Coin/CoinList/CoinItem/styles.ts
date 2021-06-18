import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 25px;
  background-color: var(--background-color);

  padding: 20px;
  min-height: 145px;
`;

export const Image = styled.img`
  width: auto;
  height: 42px;

  opacity: 0.65;
  /* filter: grayscale(1); */
  object-fit: contain;

  margin-bottom: 12px;
`;

export const Name = styled.span`
  font-size: 14px;
  font-weight: 600;

  margin-bottom: 5px;

  color: var(--primary-color);
`

export const Price = styled.span`
  font-size: 16px;
  font-weight: 600;

  color: #787878;
`;
