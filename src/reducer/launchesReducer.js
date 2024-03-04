import {
  FETCH_LAUNCHES_REQUEST,
  FETCH_LAUNCHES_SUCCESS,
  FETCH_LAUNCHES_FAILURE
} from "../constants/constants";

export const initialState = {
  launches: [],
  loading: false,
  error: null
};

export const launchesReducer = (state, action) => {
  switch (action.type) {
    case FETCH_LAUNCHES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_LAUNCHES_SUCCESS:
      return {
        ...state,
        loading: false,
        launches: action.payload
      };
    case FETCH_LAUNCHES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload //false
      };
    default:
      return state;
  }
};
