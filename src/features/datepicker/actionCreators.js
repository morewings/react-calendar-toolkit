import {convertToTimestamp} from 'utils/dateUtils';
import {
  SET_DATE,
  SET_PRECISION,
  SET_TODAY,
  SET_VISIBILITY,
} from './actionTypes';

export const setDate = date => ({
  type: SET_DATE,
  payload: {
    selectedTimestamp: convertToTimestamp(date),
  },
});

export const setVisibility = date => ({
  type: SET_VISIBILITY,
  payload: {
    visibleTimestamp: convertToTimestamp(date),
  },
});

export const setToday = date => ({
  type: SET_TODAY,
  payload: {
    todayTimestamp: convertToTimestamp(date),
  },
});

export const setPrecision = precision => ({
  type: SET_PRECISION,
  payload: precision,
});
