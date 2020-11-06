import {useDatePickerContext} from './context';

const useHasInitialValues = () => {
  const {
    state: {selectedTimestamp, todayTimestamp, visibleTimestamp},
  } = useDatePickerContext();
  return !!selectedTimestamp && !!todayTimestamp && !!visibleTimestamp;
};

export default useHasInitialValues;
