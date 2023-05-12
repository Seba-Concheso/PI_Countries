import { GET_COUNTRIES, GET_COUNTRY_DETAIL, GET_COUNTRIES_API } from "./action.types";

const initialState = {
  country: [],
  countryDetail: {},
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COUNTRIES_API:
      return {
        ...state,
        country: payload,
      };
    case GET_COUNTRIES:
      return {
        ...state,
        country: payload,
      };
    case GET_COUNTRY_DETAIL:
      return {
        ...state,
        countryDetail: payload,
      };

    default:
      return { ...state };
  }
};

export default reducer;
