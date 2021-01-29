import { CALCULATE_CRYPTO } from "./types";
import axios from "axios";

export const calculateCryptoPrice = (
  currencyValue: any,
  selectedCurrency: any,
  selectedCrypto: any
) => {
  return async function (dispatch: any, getState: any) {
    let resData = await axios.get(
      "https://api.coingecko.com/api/v3/coins/" + selectedCrypto.toLowerCase()
    );
    const { market_data } = resData.data;
    let selectedCurrencyValue = selectedCurrency.toLowerCase();
    let cryptoValue = market_data.current_price[selectedCurrencyValue];
    cryptoValue = currencyValue / cryptoValue;
    return dispatch({
      type: CALCULATE_CRYPTO,
      payload: { cryptoValue, currencyValue },
    });
  };
};

export const calculateCurrencyPrice = (
  cryptoValueInput: any,
  selectedCurrency: any,
  selectedCrypto: any
) => {
  return async function (dispatch: any, getState: any) {
    let resData = await axios.get(
      "https://api.coingecko.com/api/v3/coins/" + selectedCrypto.toLowerCase()
    );
    const { market_data } = resData.data;
    let selectedCurrencyValue = selectedCurrency.toLowerCase();
    let cryptoValue = market_data.current_price[selectedCurrencyValue];
    let currencyValue = cryptoValue * cryptoValueInput;
    console.log("in action", currencyValue, cryptoValueInput);
    return dispatch({
      type: CALCULATE_CRYPTO,
      payload: { currencyValue, cryptoValueInput },
    });
  };
};
