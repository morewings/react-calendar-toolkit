import {useEffect} from 'react';
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

export const useHasInitialValues = () => {
  const {
    state: {selectedTimestamp, todayTimestamp, visibleTimestamp},
  } = useDatePickerContext();
  return !!selectedTimestamp && !!todayTimestamp && !!visibleTimestamp;
};

export const useSetInitialValues = ({initialDate, today, minPrecision}) => {
  const {
    setPrecision,
    setVisibility,
    setDate,
    setToday,
  } = useDatePickerActions();

  const hasInitialValues = useHasInitialValues();
  useEffect(() => {
    if (!hasInitialValues) {
      setDate(initialDate);
      setVisibility(initialDate);
      setToday(today);
      setPrecision(minPrecision);
    }
  }, [
    hasInitialValues,
    initialDate,
    minPrecision,
    setDate,
    setPrecision,
    setToday,
    setVisibility,
    today,
  ]);
};

export default useDatePickerActions;
