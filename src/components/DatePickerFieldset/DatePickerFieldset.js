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
import InputVisual, {Fieldset} from 'components/visual/Fieldset';
import Popover from 'components/visual/Popover';

import useSetInitialValues from 'utils/useSetInitialValues';
import useHasInitialValues from 'utils/useHasInitialValues';

const DatePickerFieldset = ({
  renderInputAs,
  mode,
  formatPattern,
  renderDatePickerAs,
  initialDate,
  today,
  minPrecision,
  onDateSet,
  ...restProps
}) => {
  const dispatch = useDispatch();
  const selectedTimestamp = useSelector(selectors.getSelectedTimestamp);
  const todayTimestamp = useSelector(selectors.getTodayTimestamp);
  const isVisible = useSelector(modalSelectors.getIsVisible);

  const hasInitialValues = useHasInitialValues();

  const handleDateSet = date => {
    onDateSet(date);
    toggleDatepicker(false);
  };

  const formatDate = useFormatDate();

  const PopoverWrapper = mode === 'popover' ? Popover : Fragment;

  const toggleDatepicker = useCallback(
    visibility =>
      dispatch({
        type: modalActionTypes.TOGGLE_DATEPICKER,
        payload: visibility,
      }),
    [dispatch]
  );

  const InputComponent = renderInputAs;
  const DatePickerComponent = renderDatePickerAs;

  const DatePickerWithProps = () => (
    <DatePickerComponent
      date={convertToDate(selectedTimestamp)}
      showHeader={false} // TODO: merge with restProps
      onDateSet={handleDateSet}
      {...restProps}
    />
  );

  useSetInitialValues({initialDate, today, minPrecision});

  return (
    hasInitialValues && (
      <PopoverWrapper
        isVisible={isVisible}
        toggleDatepicker={toggleDatepicker}
        renderDatePickerAs={DatePickerWithProps}>
        <Fieldset>
          <InputComponent
            date={convertToDate(todayTimestamp)}
            value={formatDate('MM/dd/yyyy', convertToDate(selectedTimestamp))}
            toggleDatepicker={toggleDatepicker}
          />
        </Fieldset>
      </PopoverWrapper>
    )
  );
};

DatePickerFieldset.propTypes = {
  ...propTypes,
  /** Callback when user clicks selected date */
  onDateSet: PropTypes.func.isRequired,
  mode: PropTypes.oneOf(['popover', 'modal']),
  hideOnSelect: PropTypes.bool,
  renderInputAs: PropTypes.elementType,
  renderDatePickerAs: PropTypes.elementType,
  formatPattern: PropTypes.string,
  /** Set initial selected date when component renders. */
  initialDate: PropTypes.instanceOf(Date),
  /** Set today date. */
  today: PropTypes.instanceOf(Date),
  /** Set minimum precision (measuring unit) of calendar. Possible values: 'day', 'month', 'year'. */
  minPrecision: PropTypes.oneOf(['year', 'month', 'day']),
};

DatePickerFieldset.defaultProps = {
  mode: 'popover',
  hideOnSelect: true,
  renderInputAs: InputVisual,
  renderDatePickerAs: DatePicker,
  formatPattern: 'MM/dd/yyyy',
  initialDate: new Date(2020, 0, 6),
  today: new Date(),
  minPrecision: 'day',
};

export default DatePickerFieldset;
