import {SET_DATE, SET_TODAY} from './actionTypes';

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
    default:
      return state;
  }
};
