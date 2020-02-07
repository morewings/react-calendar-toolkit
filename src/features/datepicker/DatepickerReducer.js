import {SET_DATE, SET_TODAY, SET_PRECISION} from './actionTypes';

const initialState = {
  selectedTimestamp: 0,
  todayTimestamp: 0,
  precision: 'day',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DATE: {
      const {selectedTimestamp, precision} = action.payload;
      return {
        ...state,
        selectedTimestamp,
        precision,
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
