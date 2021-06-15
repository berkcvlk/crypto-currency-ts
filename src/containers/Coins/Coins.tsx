import { useEffect, useState } from "react";

import { CoinList } from "../../components/Coin";
import { getCoins } from "../../api";
import { ICoin } from "../../types";

const CurrencyContainer = () => {
  const [coins, setCoins] = useState<ICoin[]>([]);
  const [loading, setLoading] = useState(true);

  // Get coin list from coingecko api
  useEffect(() => {
    (async () => {
      const list = await getCoins();
      setCoins(list);
      setLoading(false);
    })();
  }, []);

  let loadingRenderer;
  if (loading) {
    loadingRenderer = <div>...</div>;
  }

  return loadingRenderer || <CoinList list={coins} />;
};

export default CurrencyContainer;
