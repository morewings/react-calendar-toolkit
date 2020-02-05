import {SET_DATE} from './actionTypes';

const initialState = {
  date: 0,
  precision: 'day',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DATE:
      return {
        date: action.payload.date,
        precision: action.payload.precision,
      };

    default:
      return state;
  }
};
