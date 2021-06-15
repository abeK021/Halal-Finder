import { GET_RESTAURANTS } from "../actions/action-names"

const INITIAL_STATE = {
  restaurants: []
}

export const ResterauntsReducer = (state = INITIAL_STATE, action) => {

switch (action.type) {
  case GET_RESTAURANTS:
    return {
      ...state, restaurants: action.payload
    }
    default:
      return state
}

}