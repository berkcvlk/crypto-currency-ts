import { CURRENCY, currencies } from "../constants";

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

export const currencyPicker = () => {
  return currencies[CURRENCY];
};
