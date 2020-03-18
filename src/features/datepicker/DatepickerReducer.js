import {
  SET_DATE,
  SET_TODAY,
  SET_PRECISION,
  SET_VISIBILITY,
} from './actionTypes';

export const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DATE: {
      const {selectedTimestamp, precision} = action.payload;
      return {
        ...state,
        selectedTimestamp,
        precision: precision || state.precision,
      };
    }
    case SET_VISIBILITY: {
      const {visibleTimestamp} = action.payload;
      return {
        ...state,
        visibleTimestamp,
      };
    }
    case SET_TODAY: {
      const {todayTimestamp} = action.payload;
      return {
        ...state,
        todayTimestamp,
      };
    }
    case SET_PRECISION: {
      return {
        ...state,
        precision: action.payload,
      };
    }
    default:
      return state;
  }
};
