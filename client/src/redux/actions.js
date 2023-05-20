import {
  GET_COUNTRIES,
  GET_COUNTRIES_BY_API,
  GET_COUNTRY_DETAIL,
  PREVIUS_PAGE,
  NEXT_PAGE,
  GET_ACTIVITIES,
  CREATE_ACTIVITIES,
  SEARCH_COUNTRY,
  FILTER_CONTINENT,
  ORDER_BY_POPULATION,
  ORDER_BY_NAME,
  FILTER_BY_ACTIVITY,
  GET_ACTIVITIES_BY_NAME
} from "./action.types";
import axios from "axios";

export const getCountriesByApi = () => {
  // const endpoint = "http://localhost:3001/countries";
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/");

    return dispatch({ type: GET_COUNTRIES_BY_API, payload: response.data });
  };
};
export const getCountriesFront = () => {
  // const endpoint = "http://localhost:3001/countries";
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/countries");

    return dispatch({ type: GET_COUNTRIES, payload: response.data });
  };
};

export const getDetail = (id) => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/countries/" + id);

    return dispatch({ type: GET_COUNTRY_DETAIL, payload: response.data });
  };
};

export const previusPage = () => {
  return {
    type: PREVIUS_PAGE,
    payload: previusPage,
  };
};

export const nextPage = () => {
  return {
    type: NEXT_PAGE,
    payload: nextPage,
  };
};
export const createActivity = (form) => {
  return async function (dispatch) {
    const response = await axios.post("http://localhost:3001/activities", form);

    return dispatch({ type: CREATE_ACTIVITIES, payload: response.data });
  };
};

export const getActivities = () => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/activities");

    return dispatch({ type: GET_ACTIVITIES, payload: response.data });
  };
};
export const filterActivitiesByName = (name) => {
  return async function (dispatch) {
     try {
     const response = await axios(`http://localhost:3001/activities?name=${name}`);
     
  
     return dispatch({ type: GET_ACTIVITIES_BY_NAME, payload: response.data });
   }
  
 catch (error) {
  window.alert("Actividad no encontrada");
 }
}

};

export const searchCountry = (country) => {
  const name = country;
  return async function (dispatch) {
    try {
      const response = await axios(
        `http://localhost:3001/countries?name=${name}`
      );
      return dispatch({ type: SEARCH_COUNTRY, payload: response.data });
    } catch (error) {
      window.alert("Pais no encontrado");
    }
  };
};

export const filterContinent = (continent) => {
  return {
    type: FILTER_CONTINENT,
    payload: continent,
  };
}

export const orderByPopulation = (order) => {
  return {  
    type: ORDER_BY_POPULATION,
    payload: order,
  };
};
export const orderByName = (order) => {
  return {
    type: ORDER_BY_NAME,
    payload: order,
    currentPage: 1,
  };
};

export const filterByActivity = (activity) => {
    return {
      type: FILTER_BY_ACTIVITY,
      payload: activity,
    };
  };


