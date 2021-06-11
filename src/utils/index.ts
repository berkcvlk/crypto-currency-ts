import {
  BASE_URL,
  MARKET_CAP_ORDER,
  COIN_PER_PAGE,
  PAGE,
  CURRENCY,
  SPARKLINE,
} from "../constants";

export const getCoinsUrlByMarketCap = () => {
  const PATH = "/coins/markets";
  return `${
    BASE_URL + PATH
  }?vs_currency=${CURRENCY}&order=${MARKET_CAP_ORDER}&per_page=${COIN_PER_PAGE}&page=${PAGE}&sparkline=${SPARKLINE}`;
};
