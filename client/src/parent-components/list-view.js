import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap";
import "./list-view-style.css";
import LocationInfoBox from "../child-components/location-info/location-info";
import Filteration from "../child-components/filter-search/pagination";
import { Icon } from "@iconify/react";
import isEmpty from "lodash.isempty";

import {
  activeRestaurantAction,
  getRestaurantInfo,
} from "../actions/actions-index";

const ListViewTab = () => {
  const dispatch = useDispatch();

  const [listInfo, setListInfo] = useState(null);
  const [locationInfo, setLocationInfo] = useState();
  const [activeRestaurant, setActiveRestaurant] = useState(false);
  const restaurantData = useSelector((state) => state.restaurant);

  const data = useSelector((state) => state);

  const mainRef = useRef(null);

  const initialfocus = (e) => {
    e.target.className = "container-fluid row active-item";
  };

  const noFocus = (e) => {
    e.target.className = "container-fluid row";
  };

  useEffect(() => {
    setActiveRestaurant(false);
  }, [data.restaurants]);

  useEffect(() => {
    setLocationInfo(restaurantData.restaurant);
  }, [restaurantData]);

  const handleListClick = (info) => {
    dispatch(getRestaurantInfo(info));
    setActiveRestaurant(true);
  };

  const renderRestaurantList = () => {
    const paginateGood = (array, page_size, page_number) => {
      return array.slice((page_number - 1) * page_size, page_number * 5);
    };

    const paginatedRestaurants = paginateGood(
      data.restaurants.restaurants,
      5,
      data.filter.pageNum
    );

    return (
      <div>
        <ul className="restaurant-list-container ">
          {!isEmpty(data.restaurants) ? (
            paginatedRestaurants.map((restaurant) => (
              <div className="clicked-list-item" key={restaurant.place_id}>
                <div
                  tabIndex={-1}
                  className="container-fluid row "
                  onClick={() =>
                    handleListClick({ placeId: restaurant.place_id })
                  }
                >
                  <div className="img-container col">
                    <Icon
                      icon="uil:restaurant"
                      color="#9e1a1a"
                      inline={true}
                      width="80%"
                    />
                  </div>
                  <p key={restaurant.name} className="restaurant-list col mt-4">
                    {restaurant.name}
                  </p>
                </div>
                <hr />
              </div>
            ))
          ) : (
            <li>No data to render</li>
          )}
        </ul>
        <Filteration />
      </div>
    );
  };
  return (
    <React.Fragment>
      {renderRestaurantList()}
      {activeRestaurant && <LocationInfoBox info={locationInfo} />}
    </React.Fragment>
  );
};

export default ListViewTab;
