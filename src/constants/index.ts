export const BASE_URL = "https://api.coingecko.com/api/v3";
export const COIN_PER_PAGE = 21;
export const PAGE = 1;
export const CURRENCY = "usd";
export const MARKET_CAP_ORDER = "market_cap_desc";

// If this is true, api will return last 7 days
// data for graphic
export const SPARKLINE = false;

// This list can be get from
// ...api/v3/simple/supported_vs_currencies
// But, for now, just support these.
export enum SupportedCurrencies {
  "usd" = "$",
  "eur" = "€",
  "gbp" = "£",
  "try" = "₺",
}
