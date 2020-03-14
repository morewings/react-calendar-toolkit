/*eslint-disable*/
import React, {Fragment, useCallback} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {convertToDate} from 'utils/dateUtils';
import {useFormatDate} from 'utils/localeContext';
import {
  selectors as modalSelectors,
  actionTypes as modalActionTypes,
} from 'features/modal';
import {selectors} from 'features/datepicker';
import DatePicker, {propTypes} from 'components/DatePicker/DatePicker';
import InputVisual, {
  Fieldset,
  Popover,
  Modal,
} from 'components/visual/Fieldset';

const DatePickerFieldset = ({
  renderInputAs,
  mode,
  formatPattern,
  renderDatePickerAs,
  ...restProps
}) => {
  const dispatch = useDispatch();
  const selectedTimestamp = useSelector(selectors.getSelectedTimestamp);
  const todayTimestamp = useSelector(selectors.getTodayTimestamp);
  const isVisible = useSelector(modalSelectors.getIsVisible);
  const formatDate = useFormatDate();
  const PopoverWrapper = mode === 'popover' ? Popover : Fragment;
  const ModalWrapper = mode === 'modal' ? Modal : Fragment;
  const toggleDatepicker = useCallback(
    isVisible =>
      dispatch({
        type: modalActionTypes.TOGGLE_DATEPICKER,
        payload: isVisible,
      }),
    [dispatch]
  );
  const InputComponent = renderInputAs;
  const DatePickerComponent = renderDatePickerAs;
  const DatePickerWithProps = () => {
    return <DatePickerComponent
      date={convertToDate(selectedTimestamp)}
      showHeader={false} // TODO: merge with restProps
      {...restProps}
    />
  }
  return (
    <PopoverWrapper isVisible={isVisible} toggleDatepicker={toggleDatepicker} renderDatePickerAs={DatePickerWithProps}>
      <Fieldset>
        <InputComponent
          date={convertToDate(todayTimestamp)}
          value={formatDate('MM/dd/yyyy', convertToDate(selectedTimestamp))}
          toggleDatepicker={toggleDatepicker}
        />
        {/*<DatePickerComponent*/}
        {/*  date={convertToDate(selectedTimestamp)}*/}
        {/*  showHeader={false} // TODO: merge with restProps*/}
        {/*  {...restProps}*/}
        {/*/>*/}
      </Fieldset>
    </PopoverWrapper>
  );
};

DatePickerFieldset.propTypes = {
  mode: PropTypes.oneOf(['popover', 'modal']),
  hideOnSelect: PropTypes.bool,
  renderInputAs: PropTypes.elementType,
  renderDatePickerAs: PropTypes.elementType,
  formatPattern: PropTypes.string,
  ...propTypes,
};

DatePickerFieldset.defaultProps = {
  mode: 'popover',
  hideOnSelect: true,
  renderInputAs: InputVisual,
  renderDatePickerAs: DatePicker,
  formatPattern: 'MM/dd/yyyy',
};

export default DatePickerFieldset;
