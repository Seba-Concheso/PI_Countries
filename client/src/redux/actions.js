import {
  GET_COUNTRIES,
  GET_COUNTRY_DETAIL,
  PREVIUS_PAGE,
  NEXT_PAGE,
  GET_ACTIVITIES,
  CREATE_ACTIVITIES,
  SEARCH_COUNTRY,
} from "./action.types";
import axios from "axios";

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
    console.log(response);

    return dispatch({ type: GET_ACTIVITIES, payload: response.data });
  };
};

export const searchCountry = (country) => {
  const name = country;
  return async function (dispatch) {
    try {
      const response = await axios(
        `http://localhost:3001/countries?name=${name}`
      );
      console.log(response.data);
      return dispatch({ type: SEARCH_COUNTRY, payload: response.data });
    } catch (error) {
      window.alert("Pais no encontrado");
    }
  };
};
