import {useCallback} from 'react';
import {
  ceilMonth,
  checkIsWithinInterval,
  decrementMonth,
  floorMonth,
  incrementMonth,
} from 'utils/dateUtils';
import {useDatePickerActions} from 'features/datepicker';

const useLogic = ({startDate, endDate, visibleTimestamp}) => {
  const {setVisibility, setPrecision} = useDatePickerActions();

  const isAvailable = useCallback(
    date =>
      checkIsWithinInterval(
        {start: floorMonth(startDate), end: ceilMonth(endDate)},
        date
      ),
    [endDate, startDate]
  );

  const onSetPrecision = useCallback(
    nextPrecision => {
      setPrecision(nextPrecision);
    },
    [setPrecision]
  );

  const onIncrementMonth = useCallback(() => {
    const nextDate = incrementMonth(visibleTimestamp, 1);
    isAvailable(nextDate) && setVisibility(nextDate);
  }, [isAvailable, setVisibility, visibleTimestamp]);

  const onDecrementMonth = useCallback(() => {
    const nextDate = decrementMonth(visibleTimestamp, 1);
    isAvailable(nextDate) && setVisibility(nextDate);
  }, [isAvailable, setVisibility, visibleTimestamp]);

  return {onSetPrecision, onIncrementMonth, onDecrementMonth};
};

export default useLogic;
