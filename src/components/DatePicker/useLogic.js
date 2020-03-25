import {useCallback} from 'react';
import {
  useDatePickerActions,
  useDatePickerContext,
  useIncrementPrecision,
} from 'features/datepicker';

const useLogic = (onDateSet, minPrecision) => {
  const {
    state: {precision},
  } = useDatePickerContext();
  const {setDate, setVisibility} = useDatePickerActions();
  const incrementPrecision = useIncrementPrecision(minPrecision);
  const handleDateSet = useCallback(
    date => {
      if (precision === minPrecision) {
        onDateSet(date);
        setDate(date);
      } else {
        setVisibility(date);
        incrementPrecision();
      }
    },
    [
      incrementPrecision,
      minPrecision,
      onDateSet,
      precision,
      setDate,
      setVisibility,
    ]
  );
  return {handleDateSet};
};

export default useLogic;
