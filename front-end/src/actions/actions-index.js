import axios from "axios"
import { useLoadScript } from '@react-google-maps/api';

import { GET_RESTAURANTS, FETCH_PLACES_GOOGLE, STORE_CITY_STATE, PAGE_NUMBER } from "./action-names"



export const getRestaurantsBackEnd =  async (tabClick,page,cityState) => {
  const data = await axios.get(`http://localhost:5000/restaurants?type=${tabClick}&page=${page}&cityState=${cityState}`)
  return {
      type: GET_RESTAURANTS,
      payload: data
  }
}

export const sendRestaurant =  (data) => {
  debugger
   return axios.post(`http://localhost:5000/add-restaurant`, {data})
}

export const cityAction = (cityState) => {
    return {
      type: STORE_CITY_STATE,
      payload: cityState
    }
}

export const pageAction = (pageNum) => {
  return {
    type: PAGE_NUMBER,
    payload: pageNum
  }
}






