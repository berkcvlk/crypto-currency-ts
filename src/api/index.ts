import axios from "axios";
import { getCoinsUrlByMarketCap } from "../utils";

export const getCoins = async () => {
  // getCoinsUrlByMarketCap returns related url for
  // the coin list according to the constants in the
  // "constants" file.
  // This can be changed!
  const response = await axios.get(getCoinsUrlByMarketCap());
  const data = response.data;

  return data;
};
