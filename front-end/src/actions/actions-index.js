import axios from "axios"
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

export const  getPlacesDataGoogle = async (query) => {

  const res =  await axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=35.7915,-78.7811&radius=10&type=restaurant&keyword=halal&key=AIzaSyDHodYPfHlFQmhCxoQkFXzPSVLR4XBbdRE')

  return {
    type: FETCH_PLACES_GOOGLE,
    payload: res
  }
}