import {useCallback} from 'react';
import {useModalActions} from 'features/modal';
import {convertToDate} from 'utils/dateUtils';
import {useFormatDate} from 'features/locale';
import {useDatePickerContext} from 'features/datepicker';

const useLogic = ({onDateSet, hideOnSelect}) => {
  const {toggleDatePicker} = useModalActions();
  const formatDate = useFormatDate();
  const {
    state: {selectedTimestamp},
  } = useDatePickerContext();

  const handleDateSet = useCallback(
    date => {
      onDateSet(date);
      hideOnSelect && toggleDatePicker(false);
    },
    [hideOnSelect, onDateSet, toggleDatePicker]
  );

  const formatValue = useCallback(
    formatPattern =>
      formatDate(formatPattern, convertToDate(selectedTimestamp)),
    [formatDate, selectedTimestamp]
  );

  const getDate = () => convertToDate(selectedTimestamp);

  return {handleDateSet, formatValue, getDate};
};

export default useLogic;
