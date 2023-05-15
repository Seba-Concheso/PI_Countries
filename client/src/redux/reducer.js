import {
  GET_COUNTRIES,
  GET_COUNTRY_DETAIL,
  NEXT_PAGE,
  PREVIUS_PAGE,
  GET_ACTIVITIES,
  CREATE_ACTIVITIES,
  SEARCH_COUNTRY,
} from "./action.types";

const initialState = {
  country: [],
  countryDetail: {},
  currentPage: 1,
  activities: [],
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
        currentPage: state.currentPage + 1,
      };
    case PREVIUS_PAGE:
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };
    case CREATE_ACTIVITIES:
      return {
        ...state,
        activities: payload,
      };
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: payload,
      };
    case SEARCH_COUNTRY:
      return {
        ...state,
        country: payload,
      };
    default:
      return { ...state };
  }
};

export default reducer;
