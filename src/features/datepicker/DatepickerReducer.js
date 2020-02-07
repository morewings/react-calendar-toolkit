import {SET_DATE, SET_TODAY, SET_PRECISION} from './actionTypes';

const initialState = {
  date: 0,
  today: 0,
  precision: 'day',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DATE: {
      const {date, precision} = action.payload;
      return {
        ...state,
        date,
        precision,
      };
    }
    case SET_TODAY: {
      const {today} = action.payload;
      return {
        ...state,
        today,
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
