import { FC } from "react";

import { ICoin } from "../../../../types";
import { currencyPicker } from "../../../../utils";
import { Div, Image, Price, Name } from "./styles";

interface Props {
  item: ICoin;
}

const CoinItem: FC<Props> = ({ item: { image, current_price, name } }) => {
  return (
    <Div>
      <Image src={image} />
      <Name>{name}</Name>
      <Price>{currencyPicker() + current_price}</Price>
    </Div>
  );
};

export default CoinItem;
