import {SET_DATE, SET_PRECISION, SET_TODAY} from './actionTypes';

export const setDate = date => ({
  type: SET_DATE,
  payload: {
    selectedTimestamp: date,
  },
});

export const setToday = date => ({
  type: SET_TODAY,
  payload: {
    todayTimestamp: date,
  },
});

export const setPrecision = precision => ({
  type: SET_PRECISION,
  payload: precision,
});
