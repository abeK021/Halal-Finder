import { STORE_CITY_STATE, PAGE_NUMBER } from "../actions/action-names";

const INITIAL_STATE = {
  pageNum: 1,
  cityState: "",
};

export const FilterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STORE_CITY_STATE:
      return {
        ...state,
        cityState: action.payload,
      };

    case PAGE_NUMBER:
      return {
        ...state,
        pageNum: action.payload,
      };

    default:
      return state;
  }
};
