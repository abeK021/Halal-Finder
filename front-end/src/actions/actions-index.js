import axios from "axios"
import { useLoadScript } from '@react-google-maps/api';

import { GET_RESTAURANTS, FETCH_PLACES_GOOGLE } from "./action-names"



export const getRestaurantsBackEnd =  (pageNumber) => {
  return axios.get(`http://localhost:5000/restaurants?page=${pageNumber}`)
    .then(res => {
      return {
        type: GET_RESTAURANTS,
        payload: res
      }
    })
}


