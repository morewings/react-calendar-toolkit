import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {convertToDate} from 'utils/dateUtils';
import {useFormatDate} from 'utils/localeContext';
import {
  selectors as modalSelectors,
  actionTypes as modalActionTypes,
} from 'features/modal';
import {selectors} from 'features/datepicker';
import DatePicker from 'components/DatePicker/DatePicker';
import InputVisual, {
  Fieldset,
  Popover,
  Modal,
} from 'components/visual/Fieldset';

const DatePickerFieldset = ({input, mode, formatPattern, ...restProps}) => {
  const dispatch = useDispatch();
  const selectedTimestamp = useSelector(selectors.getSelectedTimestamp);
  const todayTimestamp = useSelector(selectors.getTodayTimestamp);
  const showDatepicker = useSelector(modalSelectors.getShowDatepicker);
  const formatDate = useFormatDate();
  const InputWrapper = mode === 'popover' ? Popover : Modal;
  const toggleDatepicker = useCallback(
    isVisible =>
      dispatch({
        type: modalActionTypes.TOGGLE_DATEPICKER,
        payload: isVisible,
      }),
    [dispatch]
  );
  const InputComponent = input;
  return (
    <Fieldset>
      <InputComponent
        date={convertToDate(todayTimestamp)}
        value={formatDate('MM/dd/yyyy', convertToDate(selectedTimestamp))}
        toggleDatepicker={toggleDatepicker}
      />
      {showDatepicker && (
        <InputWrapper toggleDatepicker={toggleDatepicker}>
          <DatePicker
            date={convertToDate(selectedTimestamp)}
            showHeader={false} // TODO: merge with restProps
            {...restProps}
          />
        </InputWrapper>
      )}
    </Fieldset>
  );
};

DatePickerFieldset.propTypes = {
  mode: PropTypes.oneOf(['popover', 'modal']),
  hideOnSelect: PropTypes.bool,
  input: PropTypes.elementType,
  formatPattern: PropTypes.string,
};

DatePickerFieldset.defaultProps = {
  mode: 'modal',
  hideOnSelect: true,
  input: InputVisual,
  formatPattern: 'MM/dd/yyyy',
};

export default DatePickerFieldset;
