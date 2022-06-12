import { GET_RESTAURANT_INFO, SET_SHOW } from "../actions/action-names";

const INITIAL_STATE = {
  restaurant: [],
  active: false,
};

export const SingleRestaurantReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_RESTAURANT_INFO:
      return {
        ...state,
        restaurant: action.payload,
      };

    case SET_SHOW:
      return {
        ...state,
        active: action.payload,
      };
    default:
      return state;
  }
};
