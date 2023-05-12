import { GET_COUNTRIES, GET_COUNTRY_DETAIL } from "./action.types";
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
    console.log(response);

    return dispatch({ type: GET_COUNTRY_DETAIL, payload: response.data });
  };
};
