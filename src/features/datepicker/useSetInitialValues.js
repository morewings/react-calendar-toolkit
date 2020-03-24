import {useEffect} from 'react';
import useHasInitialValues from './useHasInitialValues';
import useDatePickerActions from './actionCreators';

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
