import { ERR_SEARCH, GET_RESTAURANTS } from "../actions/action-names";

const INITIAL_STATE = {
  restaurants: null,

  totalDocs: null,
  totalPages: null,
  cityCoordinates: null,
  cityState: null,
  error: null,
  errorMessage: "",
};

export const ResterauntsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_RESTAURANTS:
      debugger;
      return {
        ...state,
        restaurants: action.payload.restaurants,

        totalDocs: action.payload.restaurants.length,
        totalPages: Math.ceil(action.payload.restaurants.length / 5),
        cityCoordinates: action.payload.cityCoords,
        cityState: action.payload.cityState,
        error: false,
      };

    case ERR_SEARCH:
      debugger;
      return {
        ...state,
        error: action.payload.err,
        errorMessage: action.payload.message,
      };
    default:
      return state;
  }
};
