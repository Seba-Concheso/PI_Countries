import { GET_COUNTRIES, GET_COUNTRY_DETAIL, GET_COUNTRIES_API } from "./action.types";
import axios from "axios";

export const getCountriesApi = () => {
  // const endpoint = "http://localhost:3001/countries";
  return async function (dispatch) {
    const response = await axios.get("https://restcountries.com/v3.1/all");

    return dispatch({ type: GET_COUNTRIES_API, payload: response.data });
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
    console.log(response);

    return dispatch({ type: GET_COUNTRY_DETAIL, payload: response.data });
  };
};
