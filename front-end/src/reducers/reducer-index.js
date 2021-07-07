import { combineReducers } from 'redux';
import { ResterauntsReducer } from './restaurant-reducer';

import { FilterReducer} from './filter-reducer'



const RootReducer = combineReducers({
  restaurants: ResterauntsReducer,
  filter:  FilterReducer,
});

export default RootReducer