import { useEffect, useState } from "react";

import { CoinList } from "../../components/Coin";
import { getCoins } from "../../api";
import { ICoin } from "../../types";

const Coins = () => {
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

  if (loading) {
    return <div>...</div>;
  }

  return <CoinList list={coins} />;
};

export default Coins;
