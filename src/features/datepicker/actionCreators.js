import {convertToTimestamp} from 'utils/dateUtils';
import {
  SET_DATE,
  SET_PRECISION,
  SET_TODAY,
  SET_VISIBILITY,
} from './actionTypes';
import {useDatePickerContext} from './context';

const useDatePickerActions = () => {
  const {dispatch} = useDatePickerContext();
  return {
    setDate: date => {
      dispatch({
        type: SET_DATE,
        payload: {
          selectedTimestamp: convertToTimestamp(date),
        },
      });
    },
    setToday: date => {
      dispatch({
        type: SET_TODAY,
        payload: {
          todayTimestamp: convertToTimestamp(date),
        },
      });
    },
    setVisibility: date => {
      dispatch({
        type: SET_VISIBILITY,
        payload: {
          visibleTimestamp: convertToTimestamp(date),
        },
      });
    },
    setPrecision: precision => {
      dispatch({
        type: SET_PRECISION,
        payload: precision,
      });
    },
  };
};

export default useDatePickerActions;
