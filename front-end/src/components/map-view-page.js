import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import GoogleMapReact  from 'google-map-react'
import { InputGroup, FormControl, Container, Row, Col } from "react-bootstrap"
import "./map-view-style.css"

import Search from './search-places/search.js'

const MapViewPage = ({center, zoom}) => {

  const dispatch = useDispatch()



  return (
    <Container>
      <Search />
    <div className="map row">
    <GoogleMapReact
      bootstrapURLKeys={{
       key: 'AIzaSyCHDyOVTfuBfgQePTaYwe6MkiN9jlN86Vk',
      }}
      defaultCenter= { 
        {
          lat: 35.7915, lng: -78.7811
        }
       }
      defaultZoom= { 13 }

      onGoogleApiLoaded={({ maps }) => {
        console.log(maps.places);
      }}
    
    >
    </GoogleMapReact>
    </div>
     </Container>
  )
}



export default MapViewPage

//AIzaSyCHDyOVTfuBfgQePTaYwe6MkiN9jlN86Vk