import { CURRENCY, SupportedCurrencies } from "../constants";

export const urlBuilder = (base: string, path: string, params?: {}) => {
  if (!path.includes("?") && params) {
    path = path + "?";
  }

  // Add the query params if there is
  // params object
  const query = params
    ? Object.entries(params).reduce((q, v) => q + `&${v[0] + "=" + v[1]}`, "")
    : "";

  return base + path + query;
};

// According to CURRENCY constant
// change CoinItem currency symbol
// For now, just supported "SupportedCurrencies" enum
export const currencyPicker = () => {
  return SupportedCurrencies[CURRENCY];
};
