import { GET_COUNTRIES, GET_COUNTRY_DETAIL, NEXT_PAGE, PREVIUS_PAGE } from "./action.types";

const initialState = {
  country: [],
  countryDetail: {},
  currentPage: 1,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
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
    case NEXT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage +1
      };
    case PREVIUS_PAGE:
      return {
        ...state,
        currentPage: state.currentPage -1
      };
  

    default:
      return { ...state };
  }
};

export default reducer;
