import { FC } from "react";
import { ICoin } from "../../../types";

import { CoinItem } from "../index";

interface Props {
  list: ICoin[];
}

const CurrencyList: FC<Props> = ({ list }) => {
  return (
    <>
      {list.map((e, i) => (
        <CoinItem item={e} key={i} />
      ))}
    </>
  );
};

export default CurrencyList;
