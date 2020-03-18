import {useEffect} from 'react';
import {useDatePickerActions} from 'features/datepicker';
import useHasInitialValues from 'utils/useHasInitialValues';

const useSetInitialValues = ({initialDate, today, minPrecision}) => {
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

export default useSetInitialValues;
