import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'

import GoogleMapReact from 'google-map-react'
import { InputGroup, FormControl, Container, Row, Col } from "react-bootstrap"
import "./map-view-style.css"

import { getPlacesDataGoogle } from '../actions/actions-index'

const MapViewPage = ({center, zoom}) => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPlacesDataGoogle())
  }, [])

  return (
    <Container>
     <Row>
      <Col sm>
       <InputGroup className="mb-3 mt-3">
          <FormControl
            placeholder="Search by city or zip-code"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </Col>
    </Row>
    <div className="map row">
    <GoogleMapReact
      bootstrapURLKeys={{
       key: 'AIzaSyCHDyOVTfuBfgQePTaYwe6MkiN9jlN86Vk'
      }}
      defaultCenter= { 
        {
          lat: 35.7915, lng: -78.7811
        }
       }
      defaultZoom= { 13 }
    >
    </GoogleMapReact>
    </div>
     </Container>
  )
}



export default MapViewPage

//AIzaSyCHDyOVTfuBfgQePTaYwe6MkiN9jlN86Vk