import { combineReducers } from 'redux';
import { ResterauntsReducer } from './restaurant-reducer';



const RootReducer = combineReducers({
  restaurants: ResterauntsReducer
});

export default RootReducer