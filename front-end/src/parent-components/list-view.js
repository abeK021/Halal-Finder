import React, {useState, useRef, useEffect} from "react"
import { useSelector } from "react-redux"
import 'bootstrap'
import './list-view-style.css'
import LocationInfoBox from "../child-components/location-info/location-info"
import Filteration from '../child-components/filter-search/pagination'

import isEmpty from 'lodash.isempty'





const ListViewTab =() => {

  const mainRef = useRef(null)

  const initialfocus = (e) => {
    e.target.className = 'container-fluid row active-item'
  };

  const noFocus = (e) => {
    e.target.className = 'container-fluid row'
  };

  let listItem;


  const data = useSelector(state =>  state.restaurants.restaurants)

  const [listInfo, setListInfo] = useState(null)
  
  const listClick = (e) => {
   
  }
 
  const renderRestaurantList = () => {
        return  (
      <div>
          <ul className="restaurant-list-container " >
            {
            !isEmpty(data) ?
            data.map((restaurant) => 
              
            <div className="clicked-list-item">
              <div tabIndex={-1} className="container-fluid row "  onClick={() => setListInfo({name: restaurant.name, geo: restaurant.location.geo, address: `${restaurant.location.street} ${restaurant.location.cityState}, ${restaurant.location.zip}`, phone: String(restaurant.number), description: restaurant.description, website: restaurant.website, orderUrl: restaurant.orderUrl})}>
                  <div className="img-container col"><img key={restaurant.name} src={restaurant.imgUrl} alt=""></img></div>
                  <p key={restaurant.name} className="restaurant-list col mt-4">{restaurant.name}</p>
              </div>
              <hr/>
            </div>

            )
            :
            <li>No data to render</li>
          }
          </ul>
          <Filteration />
      </div>
        )
  }
  return (
    <React.Fragment>
    {renderRestaurantList()}
     {listInfo && <LocationInfoBox  info={listInfo} />}
    </React.Fragment>
  )
}

export default ListViewTab