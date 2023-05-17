import {
  GET_COUNTRIES,
  GET_COUNTRY_DETAIL,
  NEXT_PAGE,
  PREVIUS_PAGE,
  GET_ACTIVITIES,
  CREATE_ACTIVITIES,
  SEARCH_COUNTRY,
  FILTER_CONTINENT,
  ORDER_BY_POPULATION,
  ORDER_BY_NAME,
  FILTER_BY_ACTIVITY,
  GET_ACTIVITIES_BY_NAME,
} from "./action.types";

const initialState = {
  country: [],
  countryDetail: {},
  countryFiltered: [],
  activitiesFiltered: [],
  currentPage: 1,
  activities: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COUNTRIES:
      return {
        ...state,
        country: payload,
        currentPage: 1,
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
        // activities: payload,  //está así porque sino me da error el maps de activities
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
    case FILTER_CONTINENT:
      const countryFiltered = state.country.filter(
        (continent) => continent.continent === payload
      );

      return {
        ...state,
        countryFiltered: countryFiltered,
        currentPage: 1,
      };
    case ORDER_BY_POPULATION:
      const sortedCountry =
        payload === "ASC"
          ? state.country.sort((a, b) => a.population - b.population)
          : state.country.sort((a, b) => b.population - a.population);
      return {
        ...state,
        country: sortedCountry,
        currentPage: 1,
      };
    case ORDER_BY_NAME:
      const sortedCountryName =
        payload === "ASC"
          ? state.country.sort((a, b) => a.name.localeCompare(b.name))
          : state.country.sort((a, b) => b.name.localeCompare(a.name));
      return {
        ...state,
        country: sortedCountryName,
        currentPage: 1,
      };
    case GET_ACTIVITIES_BY_NAME:
      return {
        ...state,
        activitiesFiltered: payload,
      };
    default:
      return { ...state };
  }
};

export default reducer;
