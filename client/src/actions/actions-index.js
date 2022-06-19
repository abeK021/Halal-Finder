import axios from "axios";
import {
  GET_RESTAURANTS,
  STORE_CITY_STATE,
  PAGE_NUMBER,
  GET_RESTAURANT_INFO,
  SET_SHOW,
} from "./action-names";

// GET INITIAL RESTDARAUTNTS FOR IP ADDRESS LOCATION
export const getRestaurantsBackEnd = async () => {
  debugger;
  const { data } = await axios.get(
    // "/"
    "/home"
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
    `/restaurants?city_state=${cityState}`
  );
  debugger;
  return {
    type: GET_RESTAURANTS,
    payload: data,
  };
};

//GET RESTARUARNT INFO
export const getRestaurantInfo = async (info) => {
  debugger;
  const { data } = await axios.get(
    // `https://halal-finder021.herokuapp.com/restaurant?placeId=${info.placeId}`
    `/restaurant?placeId=${info.placeId}`
  );
  debugger;
  return {
    type: GET_RESTAURANT_INFO,
    payload: data.restaurant,
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
