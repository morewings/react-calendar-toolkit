import {useCallback} from 'react';
import {useModalActions} from 'lib/features/modal';
import {convertToDate} from 'lib/utils/dateUtils';
import {useFormatDate} from 'lib/features/locale';
import {useDatepickerContext} from 'lib/features/datepicker';

const useLogic = ({onDateSet, hideOnSelect}) => {
  const {toggleDatepicker} = useModalActions();
  const formatDate = useFormatDate();
  const {
    state: {selectedTimestamp},
  } = useDatepickerContext();

  const handleDateSet = useCallback(
    date => {
      onDateSet(date);
      hideOnSelect && toggleDatepicker(false);
    },
    [hideOnSelect, onDateSet, toggleDatepicker]
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
