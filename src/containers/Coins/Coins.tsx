import { useEffect, useState } from "react";

import { CoinList } from "../../components/Coin";
import { getCoins } from "../../api";
import { ICoin } from "../../types";

const CurrencyContainer = () => {
  const [coins, setCoins] = useState<ICoin[]>([]);

  // Get coin list from coingecko api
  useEffect(() => {
    (async () => {
      const list = await getCoins();
      console.log(`list`, list);
      setCoins(list);
    })();
  }, []);

  console.log(`coins`, coins);

  return <CoinList list={coins} />;
};

export default CurrencyContainer;
