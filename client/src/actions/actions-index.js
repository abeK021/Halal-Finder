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

// GET ALL RESTDARAUTNTS FOR A CITY
export const getRestaurantsBackEnd = async (cityState, userLocation) => {
  let city, state;
  if (cityState == undefined) {
    city = userLocation.city;
    state = userLocation.state;
  } else {
    const location = cityState.split(" ");
    city = location[0];
    state = location[1];
  }

  const { data } = await axios.get(
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
    `http://localhost:5000/restaurant?placeId=${info.placeId}`
  );
  debugger;
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
