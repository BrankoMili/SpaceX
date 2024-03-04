import {
  FETCH_SHIPS_REQUEST,
  FETCH_SHIPS_SUCCESS,
  FETCH_SHIPS_FAILURE
} from "../constants/constants";

export const initialState = {
  ships: [],
  loading: false,
  error: null
};

export const shipsReducer = (state, action) => {
  switch (action.type) {
    case FETCH_SHIPS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_SHIPS_SUCCESS:
      return {
        ...state,
        loading: false,
        ships: action.payload
      };
    case FETCH_SHIPS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};
