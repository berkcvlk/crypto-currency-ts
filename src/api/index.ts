import axios from "axios";

import * as cons from "../constants";
import { urlBuilder } from "../utils";

export const getCoins = async () => {
  // getCoinsUrlByMarketCap returns related url for
  // the coin list according to the constants in the
  // "constants" file.
  // This can be changed!
  const params = {
    vs_currency: cons.CURRENCY,
    order: cons.MARKET_CAP_ORDER,
    per_page: cons.COIN_PER_PAGE,
    page: cons.PAGE,
    sparkline: cons.SPARKLINE,
  };

  const response = await axios.get(
    urlBuilder(cons.BASE_URL, "/coins/markets", params)
  );
  const data = await response.data;

  return data;
};
