import {useDatePickerContext} from 'features/datepicker';

const useHasInitialValues = () => {
  const {
    state: {selectedTimestamp, todayTimestamp, visibleTimestamp},
  } = useDatePickerContext();
  return !!selectedTimestamp && !!todayTimestamp && !!visibleTimestamp;
};

export default useHasInitialValues;
