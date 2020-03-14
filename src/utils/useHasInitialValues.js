import {useSelector} from 'react-redux';
import {selectors} from 'features/datepicker';

const useHasInitialValues = () => {
  const selectedTimestamp = useSelector(selectors.getSelectedTimestamp);
  const todayTimestamp = useSelector(selectors.getTodayTimestamp);
  const visibleTimestamp = useSelector(selectors.getVisibleTimestamp);
  return !!selectedTimestamp && !!todayTimestamp && !!visibleTimestamp;
};

export default useHasInitialValues;
