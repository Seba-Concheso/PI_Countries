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
  GET_ACTIVITIES_BY_NAME,
  GET_COUNTRIES_BY_API,
} from "./action.types";

const initialState = {
  country: [],
  countryDetail: {},
  countrySearch: [],
  countryFiltered: [],
  activitiesFiltered: [],
  currentPage: 1,
  activities: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COUNTRIES_BY_API:
      return {
        countryFiltered: [],
        countrySearch: [],
        country: payload,
        currentPage: 1,
      };
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
      };
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: payload,
      };
    case SEARCH_COUNTRY:
      return {
        ...state,
        countrySearch: payload,
        currentPage: 1,
      };
    case FILTER_CONTINENT:
      const allCountries = state.country;
      if (payload === "All") {
        return {
          ...state,
          countryFiltered: allCountries,
          currentPage: 1,
        };
      }
      const countryFiltered = state.country.filter(
        (continent) => continent.continent === payload
      );

      return {
        ...state,
        countryFiltered: countryFiltered,
        currentPage: 1,
      };
    case ORDER_BY_POPULATION:
      const sortedCountryFiltered =
        payload === "ASC"
          ? state.countryFiltered.sort((a, b) => a.population - b.population)
          : state.countryFiltered.sort((a, b) => b.population - a.population);
      const sortedCountry =
        payload === "ASC"
          ? state.country.sort((a, b) => a.population - b.population)
          : state.country.sort((a, b) => b.population - a.population);
      return {
        ...state,
        country: sortedCountry,
        countryFiltered: sortedCountryFiltered,
        currentPage: 1,
      };

    case ORDER_BY_NAME:
      const orderCountryName =
        payload === "ASC"
          ? state.country.sort((a, b) => a.name.localeCompare(b.name))
          : state.country.sort((a, b) => b.name.localeCompare(a.name));
      const orderCountryFiltered =
        payload === "ASC"
          ? state.countryFiltered.sort((a, b) => a.name.localeCompare(b.name))
          : state.countryFiltered.sort((a, b) => b.name.localeCompare(a.name));
      return {
        ...state,
        countryFiltered: orderCountryFiltered,
        country: orderCountryName,
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
