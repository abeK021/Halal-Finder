import axios from "axios";
import { useLoadScript } from "@react-google-maps/api";
import { useDispatch } from "react-redux";

import {
  GET_RESTAURANTS,
  FETCH_PLACES_GOOGLE,
  STORE_CITY_STATE,
  PAGE_NUMBER,
  GET_RESTAURANT_INFO,
  SET_SHOW,
} from "./action-names";
import CityHeading from "../child-components/city-location-heading/city-location-heading";

// GET INITIAL RESTDARAUTNTS FOR IP ADDRESS LOCATION
export const getRestaurantsBackEnd = async () => {
  debugger;
  const { data } = await axios.get(
    // `https://halal-finder021.herokuapp.com/?city=${city}&state=${state}`
    "http://localhost:5000/"
  );
  debugger;
  return {
    type: GET_RESTAURANTS,
    payload: data,
  };
};

// GET SEARCHED CITY RESTAURANTS FORM SERVER
export const getSearchedCityRestaurant = async (cityState) => {
  debugger;
  let [city, state] = cityState.split(" ");
  debugger;
  const { data } = await axios.get(
    // `https://halal-finder021.herokuapp.com/?city=${city}&state=${state}`
    `http://localhost:5000/restaurants?city=${city}&state=${state}`
  );
  debugger;
  return {
    type: GET_RESTAURANTS,
    payload: data,
  };
};

//GET RESTARUARNT INFO
export const getRestaurantInfo = async (info) => {
  const { data } = await axios.get(
    `https://halal-finder021.herokuapp.com/restaurant?placeId=${info.placeId}`
  );

  return {
    type: GET_RESTAURANT_INFO,
    payload: data,
  };
};

export const sendRestaurant = (data) => {
  return axios.post(`http://localhost:5000/add-restaurant`, { data });
};

export const cityAction = (cityState) => {
  return {
    type: STORE_CITY_STATE,
    payload: cityState,
  };
};

export const pageAction = (pageNum) => {
  return {
    type: PAGE_NUMBER,
    payload: pageNum,
  };
};

export const activeRestaurantAction = (bool) => {
  return {
    type: SET_SHOW,
    payload: bool,
  };
};
