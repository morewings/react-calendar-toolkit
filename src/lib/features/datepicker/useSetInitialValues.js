import {useEffect} from 'react';
import useHasInitialValues from './useHasInitialValues';
import useDatepickerActions from './actionCreators';

export const useSetInitialValues = ({initialDate, today, minPrecision}) => {
  const {
    setPrecision,
    setVisibility,
    setDate,
    setToday,
  } = useDatepickerActions();

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
