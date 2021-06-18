import axios from "axios";

import * as cons from "../constants";
import { urlBuilder } from "../utils";

export const getCoins = async (coinPerPage: number = cons.COIN_PER_PAGE) => {
  const params = {
    // Fields need to match coingecko api
    // for the documents, check the swagger.json
    // https://www.coingecko.com/api/documentations/v3#/
    vs_currency: cons.CURRENCY,
    order: cons.MARKET_CAP_ORDER,
    per_page: coinPerPage,
    page: cons.PAGE,
    sparkline: cons.SPARKLINE,
  };

  // urlBuilder returns related url for
  // the coin list according to the constants in the
  // "constants" file. This can be changed!
  const path = "/coins/markets";
  const response = await axios.get(urlBuilder(cons.BASE_URL, path, params));
  const data = await response.data;

  return data;
};
