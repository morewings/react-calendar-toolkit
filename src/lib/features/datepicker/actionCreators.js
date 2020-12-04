import {convertToTimestamp} from 'lib/utils/dateUtils';
import {
  SET_DATE,
  SET_PRECISION,
  SET_TODAY,
  SET_VISIBILITY,
} from './actionTypes';
import {useDatepickerContext} from './context';

const useDatepickerActions = () => {
  const {dispatch} = useDatepickerContext();
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

export default useDatepickerActions;
