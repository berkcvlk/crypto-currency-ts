import { FC } from "react";
import { ICoin } from "../../../../types";

import { Div, Image, Price } from "./styles";

interface Props {
  item: ICoin;
}

const CoinItem: FC<Props> = ({ item: { image, current_price } }) => {
  return (
    <Div>
      <Image src={image} />
      <Price>{`$${current_price}`}</Price>
    </Div>
  );
};

export default CoinItem;
