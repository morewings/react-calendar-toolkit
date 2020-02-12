import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {toDate, getFormattedDate} from 'utils/dateUtils';
import {
  selectors as modalSelectors,
  actionTypes as modalActionTypes,
} from 'features/modal';
import {selectors} from 'features/datepicker';
import DatePicker from 'components/DatePicker';
import InputVisual, {
  Fieldset,
  Popover,
  Modal,
} from 'components/visual/Fieldset'; // TODO: fix {default} naming

const DatePickerFieldset = ({input, mode, formatDate, ...restProps}) => {
  const dispatch = useDispatch();
  const selectedTimestamp = useSelector(selectors.getSelectedTimestamp);
  const todayTimestamp = useSelector(selectors.getTodayTimestamp);
  const showDatepicker = useSelector(modalSelectors.getShowDatepicker);
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
        date={toDate(todayTimestamp)}
        value={formatDate(selectedTimestamp)}
        toggleDatepicker={toggleDatepicker}
      />
      {showDatepicker && (
        <InputWrapper toggleDatepicker={toggleDatepicker}>
          <DatePicker
            date={toDate(selectedTimestamp)}
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
  formatDate: PropTypes.func,
};

DatePickerFieldset.defaultProps = {
  mode: 'modal',
  hideOnSelect: true,
  input: InputVisual,
  formatDate: timestamp => getFormattedDate('MM/dd/yyyy', timestamp),
};

export default DatePickerFieldset;
