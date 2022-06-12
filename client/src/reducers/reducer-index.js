import { combineReducers } from "redux";
import { ResterauntsReducer } from "./restaurant-reducer";

import { FilterReducer } from "./filter-reducer";

import { SingleRestaurantReducer } from "./single-restaurant-reducer";

const RootReducer = combineReducers({
  restaurants: ResterauntsReducer,
  filter: FilterReducer,
  restaurant: SingleRestaurantReducer,
});

export default RootReducer;
