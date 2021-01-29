import { CALCULATE_CRYPTO, CALCULATE_CURRENCY } from "../actions/types";

const initialState = {
  baseCurrency: "usd",
  baseCrypto: "bitcoin",
  cryptoValue: 0,
  currencyValue: 0,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case CALCULATE_CRYPTO:
      console.log(action.payload);
      return {
        ...state,
        currencyValue: action.payload.currencyValue,
        cryptoValue: action.payload.cryptoValue,
      };
    case CALCULATE_CURRENCY:
      console.log(action.payload);
      return {
        ...state,
        currencyValue: action.payload.currencyValue,
        cryptoValue: action.payload.cryptoValueInput,
      };
    default:
      return state;
  }
};
