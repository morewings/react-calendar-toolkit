import {useDatepickerContext} from './context';

const useHasInitialValues = () => {
  const {
    state: {selectedTimestamp, todayTimestamp, visibleTimestamp},
  } = useDatepickerContext();
  return !!selectedTimestamp && !!todayTimestamp && !!visibleTimestamp;
};

export default useHasInitialValues;
