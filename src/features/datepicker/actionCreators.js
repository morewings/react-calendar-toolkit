import {convertToTimestamp} from 'utils/dateUtils';
import {
  SET_DATE,
  SET_PRECISION,
  SET_TODAY,
  SET_VISIBILITY,
} from './actionTypes';
import {useDatePickerContext} from './context';

const setDate = date => ({
  type: SET_DATE,
  payload: {
    selectedTimestamp: convertToTimestamp(date),
  },
});

const setVisibility = date => ({
  type: SET_VISIBILITY,
  payload: {
    visibleTimestamp: convertToTimestamp(date),
  },
});

const setToday = date => ({
  type: SET_TODAY,
  payload: {
    todayTimestamp: convertToTimestamp(date),
  },
});

const setPrecision = precision => ({
  type: SET_PRECISION,
  payload: precision,
});

const useDatePickerActions = () => {
  const {dispatch} = useDatePickerContext();
  return {
    setDate: date => {
      dispatch(setDate(date));
    },
    setToday: date => {
      dispatch(setToday(date));
    },
    setVisibility: date => {
      dispatch(setVisibility(date));
    },
    setPrecision: precision => {
      dispatch(setPrecision(precision));
    },
  };
};

export default useDatePickerActions;
