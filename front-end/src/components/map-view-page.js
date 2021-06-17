import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector,} from 'react-redux'
import isEmpty from 'lodash.isempty'

import GoogleMapReact  from 'google-map-react'
import { InputGroup, FormControl, Container, Row, Col } from "react-bootstrap"
import "./map-view-style.css"

import Search from './search-places/search.js'
import { getRestaurantsBackEnd } from '../actions/actions-index'
import LocationMarker from './location-marker'



const MapViewPage = ({center, zoom}) => {

  const data = useSelector(state => state.restaurants.restaurants.data)
  const [loading, setLoading] = useState()
  const dispatch = useDispatch()
  const [mapLocation, setLocation] = useState({})
  console.log(data)

useEffect(() => {
  setLoading(true)
  setLocation({
    lat: 35.7915, lng: -78.7811
  })
  dispatch(getRestaurantsBackEnd())
  setLoading(false)
}, [])

 
  return (
    <Container>
      <Search />
    <div className="map row">
    
    <GoogleMapReact
      bootstrapURLKeys={{
       key: 'AIzaSyCHDyOVTfuBfgQePTaYwe6MkiN9jlN86Vk',
      }}
      defaultCenter= {mapLocation}
      defaultZoom= { 11 } 
    >
      { !isEmpty(data) ? data[0].map(restaurant => <LocationMarker lat={restaurant.location.geo.lat} lng={restaurant.location.geo.lng} />) : <></>}

    </GoogleMapReact>
       
     
    </div> 
     </Container>
  )
}



export default MapViewPage

//AIzaSyCHDyOVTfuBfgQePTaYwe6MkiN9jlN86Vk