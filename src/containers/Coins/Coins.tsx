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
      setCoins(list);
    })();
  }, []);

  return <CoinList list={coins} />;
};

export default CurrencyContainer;
