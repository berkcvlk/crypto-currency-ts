import axios from "axios";

import { urlBuilder } from "../utils";
import {
  BASE_URL,
  MARKET_CAP_ORDER,
  COIN_PER_PAGE,
  PAGE,
  CURRENCY,
  SPARKLINE,
} from "../constants";

export const getCoins = async () => {
  // getCoinsUrlByMarketCap returns related url for
  // the coin list according to the constants in the
  // "constants" file.
  // This can be changed!
  const params = {
    vs_currency: CURRENCY,
    order: MARKET_CAP_ORDER,
    per_page: COIN_PER_PAGE,
    page: PAGE,
    sparkline: SPARKLINE,
  };

  const response = await axios.get(
    urlBuilder(BASE_URL, "/coins/markets", params)
  );
  const data = await response.data;

  return data;
};
