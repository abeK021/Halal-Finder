import React, { useState } from 'react'
import {useDispatch, useSelector,} from 'react-redux'
import isEmpty from 'lodash.isempty'

import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import GoogleMapReact  from 'google-map-react'
import { Container } from "react-bootstrap"
import "./map-view-style.css"

import LocationMarker from '../child-components/location-marker/location-marker'
import LocationInfoBox from '../child-components/location-info/location-info'



const MapViewTab = ({center, zoom}) => {



  const [isActive, setIsActive] = useState(false)
  
  const data = useSelector(state => state.restaurants.restaurants)
  

  const dispatch = useDispatch()
  const cityLocation = useSelector(state => state.restaurants.cityCoordinates)
  const [locationInfo, setLocationInfo] = useState(null)

  
  const handleClick = () => {
    setIsActive(!isActive)
  }



  return (
    <Container>
        {/* <GooglePlacesAutocomplete

            apiKey="AIzaSyDHodYPfHlFQmhCxoQkFXzPSVLR4XBbdRE"

            selectProps={{
              value,
              onChange: setValue,
            }}

            apiOptions={{ language: 'en', region: 'us' }}
          /> */}

    <div className="map row">
    
    <GoogleMapReact
      bootstrapURLKeys={{
       key: 'AIzaSyCHDyOVTfuBfgQePTaYwe6MkiN9jlN86Vk',
      }}
      center= {cityLocation}
      defaultZoom= { 11 } 
    >
      
      { !isEmpty(data)?  data.map((restaurant) => <LocationMarker info={locationInfo} key={restaurant.name} lat={restaurant.location.geo.lat} lng={restaurant.location.geo.lng } onClick={() => {
        setLocationInfo({name: restaurant.name, geo: restaurant.location.geo, address: `${restaurant.location.street} ${restaurant.location.cityState}, ${restaurant.location.zip}`, phone: String(restaurant.number), description: restaurant.description, website: restaurant.website, }) 
      }}
   />) : <h4>map not rendering</h4>
  }  
     
    </GoogleMapReact>

    
    </div> 
    {locationInfo && <LocationInfoBox  info={locationInfo} />}
     </Container>
  )
}



export default MapViewTab

//AIzaSyCHDyOVTfuBfgQePTaYwe6MkiN9jlN86Vk