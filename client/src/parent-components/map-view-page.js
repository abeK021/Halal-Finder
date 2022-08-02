// REACT STUFF
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// UTILS AND FUNCTIONS

import _ from "lodash";

import { getRestaurantInfo } from "../actions/actions-index";

// GOOGLE

import GoogleMapReact from "google-map-react";

// STYLING
import { Container, Spinner } from "react-bootstrap";
import "./map-view-style.css";

// COMPONENTS
import LocationMarker from "../child-components/location-marker/location-marker";
import LocationInfoBox from "../child-components/location-info/location-info";
import InfoTooltip from "../child-components/info-tooltip/info-tooltip";

const MapViewTab = ({ center, zoom, locationError }) => {
  const [activeRestaurant, setActiveRestaurant] = useState(false);

  const [locationInfo, setLocationInfo] = useState();
  const [clickedMarker, setClickedMarker] = useState();

  const dispatch = useDispatch();
  const cityLocation = useSelector(
    (state) => state.restaurants.cityCoordinates
  );

  const data = useSelector((state) => state.restaurants.restaurants);
  const restaurantData = useSelector((state) => state.restaurant);

  // useeffects
  useEffect(() => {
    setActiveRestaurant(false);
  }, [data]);

  useEffect(() => {
    setLocationInfo(restaurantData.restaurant);
  }, [restaurantData.restaurant]);

  const handleMarkerClick = (info) => {
    dispatch(getRestaurantInfo(info));
    setActiveRestaurant(true);
    setClickedMarker(info.placeId);
  };

  const markerClass = (placeId) => {
    if (placeId === clickedMarker) {
      return "location-icon-clicked";
    } else {
      return "location-icon";
    }
  };

  return (
    <Container>
      <div className="map row">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
          }}
          center={cityLocation}
          defaultZoom={12}
          yesIWantToUseGoogleMapApiInternals
        >
          {!_.isEmpty(data) ? (
            data.map((restaurant) => (
              <LocationMarker
                markerClassName={markerClass(restaurant.place_id)}
                info={{ placeId: restaurant.place_id, name: restaurant.name }}
                key={restaurant.place_id}
                lat={restaurant.geometry.location.lat}
                lng={restaurant.geometry.location.lng}
                onClick={handleMarkerClick}
                clickedMarker={clickedMarker}
              />
            ))
          ) : (
            <div className="fallback-text">
              {" "}
              <Spinner animation="border" variant="danger" />
            </div>
          )}
        </GoogleMapReact>
      </div>
      {activeRestaurant && <LocationInfoBox info={locationInfo} />}
    </Container>
  );
};

export default MapViewTab;
