import { GET_RESTAURANTS } from "../actions/action-names"

const INITIAL_STATE = {
  restaurants: [],
  pageNumber: 1,
  totalDocs: null,
  totalPages: null,

}

export const ResterauntsReducer = (state = INITIAL_STATE, action) => {

switch (action.type) {
  case GET_RESTAURANTS:
    return {
      ...state, 
            restaurants: action.payload.data.docs,
            pageNumber: action.payload.data.pageNumber,
            totalDocs: action.payload.data.totalDocs,
            totalPages: action.payload.data.totalPages
    }
    default:
      return state
}

}