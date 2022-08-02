import MapViewTab from "./map-view-page";
import NavBar from "../child-components/navbar/nav-bar";
// import AddRestaurantForm from "../child-components/add-restaurant-form/add-restaurant";
import ListViewTab from "./list-view";
import "./tab-style.css";
import Search from "../child-components/search-places/search";
import CityHeading from "../child-components/city-location-heading/city-location-heading";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantsBackEnd } from "../actions/actions-index";
import { pageAction } from "../actions/actions-index";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import { findLastIndex } from "lodash";

const App = () => {
  const cityLocation = useSelector((state) => state.restaurants.cityState);

  const [userLocation, setUserLocation] = useState(null);
  const [locationError, setLocationError] = useState(false);
  const [tabClick, setTabClick] = useState({
    type: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurantsBackEnd());
  }, []);

  return (
    <>
      <NavBar />
      <Search />

      <CityHeading />
      <Tabs>
        <TabList>
          <Tab onClick={() => setTabClick({ type: "map" })}>Map View</Tab>
          <Tab
            onClick={() => {
              dispatch(pageAction(1));
              setTabClick({ type: "list" });
            }}
          >
            List View
          </Tab>
        </TabList>

        <TabPanel>
          <MapViewTab locationError={userLocation} />
        </TabPanel>

        <TabPanel>
          <ListViewTab />
        </TabPanel>
      </Tabs>
    </>
  );
};

export default App;
