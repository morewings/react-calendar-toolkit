import {useCallback} from 'react';
import {
  useDatepickerActions,
  useDatepickerContext,
  useIncrementPrecision,
} from 'lib/features/datepicker';

const useLogic = (onDateSet, minPrecision) => {
  const {
    state: {precision},
  } = useDatepickerContext();
  const {setDate, setVisibility} = useDatepickerActions();
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
