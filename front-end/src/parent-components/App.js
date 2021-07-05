import MapViewTab from "./map-view-page"
import NavBar from "../child-components/navbar/nav-bar"
import AddRestaurantForm from "../child-components/add-restaurant-form/add-restaurant"
import ListViewTab from "./list-view"
import './tab-style.css'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';



const App = () => {
  return (
    <>
    <NavBar />

    <Tabs>
    <TabList>
      <Tab>Map View</Tab>
      <Tab>List View</Tab>
    </TabList>

    <TabPanel>
      <MapViewTab />
    </TabPanel>

    <TabPanel>
      <ListViewTab />
    </TabPanel>

  </Tabs>
    </>
  )
}

export default App