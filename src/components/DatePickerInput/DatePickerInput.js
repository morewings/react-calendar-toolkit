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
import DatePicker, {propTypes} from 'components/DatePicker/DatePicker';
import Input from 'components/visual/Input';
import PopoverProvider, {PopoverWrapper} from 'components/visual/Popover';
import ModalProvider, {ModalWrapper} from 'components/visual/Modal';

import useSetInitialValues from 'utils/useSetInitialValues';
import useHasInitialValues from 'utils/useHasInitialValues';

const DatePickerInput = ({
  renderInputAs,
  mode,
  formatPattern,
  renderDatePickerAs,
  initialDate,
  today,
  minPrecision,
  onDateSet,
  popoverProvider,
  wrapPopoverWith,
  modalProvider,
  wrapModalWith,
  wrapInputWith,
  hideOnSelect,
  ...restProps
}) => {
  const dispatch = useDispatch();
  const selectedTimestamp = useSelector(selectors.getSelectedTimestamp);
  const todayTimestamp = useSelector(selectors.getTodayTimestamp);
  const isVisible = useSelector(modalSelectors.getIsVisible);

  const hasInitialValues = useHasInitialValues();

  const handleDateSet = date => {
    onDateSet(date);
    hideOnSelect && toggleDatepicker(false);
  };

  const formatDate = useFormatDate();

  const RenderingLogicProvider =
    mode === 'popover' ? popoverProvider : modalProvider;

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
      showHeader={mode === 'modal'}
      onDateSet={handleDateSet}
      {...restProps}
    />
  );

  useSetInitialValues({initialDate, today, minPrecision});

  return (
    hasInitialValues && (
      <RenderingLogicProvider
        isVisible={isVisible}
        toggleDatepicker={toggleDatepicker}
        wrapPopoverWith={wrapPopoverWith}
        wrapModalWith={wrapModalWith}
        renderDatePickerAs={DatePickerWithProps}>
        <InputComponent
          date={convertToDate(todayTimestamp)}
          value={formatDate(formatPattern, convertToDate(selectedTimestamp))}
          toggleDatepicker={toggleDatepicker}
        />
      </RenderingLogicProvider>
    )
  );
};

DatePickerInput.propTypes = {
  ...propTypes,
  /** Callback when user selects date */
  onDateSet: PropTypes.func.isRequired,
  /** __Rendering__ mode of attached Datepicker */
  mode: PropTypes.oneOf(['popover', 'modal']),
  /** Flag to __show or hide__ Datepicker when date is selected */
  hideOnSelect: PropTypes.bool,
  /** Define component which renders __Input__. */
  renderInputAs: PropTypes.elementType,
  /** Define component which renders __DatePicker__ entry. */
  renderDatePickerAs: PropTypes.elementType,
  /** Define component which wraps __Popover__. */
  wrapPopoverWith: PropTypes.elementType,
  /**
   * Define rendering logic provider for __Popover__.
   * @ignore
   */
  popoverProvider: PropTypes.elementType,
  /**
   * Define rendering logic provider for __Modal__.
   * @ignore
   */
  modalProvider: PropTypes.elementType,
  /** Define component which wraps __Modal__. */
  wrapModalWith: PropTypes.elementType,
  /**
   * date-fns format pattern to format date value inside input
   * @see {@link https://date-fns.org/docs/format|docs}
   */
  formatPattern: PropTypes.string,
  /**
   * Set initial selected date when component renders.
   * @ignore
   */
  initialDate: PropTypes.instanceOf(Date),
  /**
   * Set today date.
   * @ignore
   */
  today: PropTypes.instanceOf(Date),
  /**
   * Set minimum precision (measuring unit) of calendar. Possible values: 'day', 'month', 'year'.
   * @ignore
   */
  minPrecision: PropTypes.oneOf(['year', 'month', 'day']),
};

DatePickerInput.defaultProps = {
  mode: 'popover',
  hideOnSelect: true,
  renderInputAs: Input,
  renderDatePickerAs: DatePicker,
  formatPattern: 'MM/dd/yyyy',
  initialDate: new Date(2020, 0, 6),
  today: new Date(),
  minPrecision: 'day',
  popoverProvider: PopoverProvider,
  wrapPopoverWith: PopoverWrapper,
  wrapModalWith: ModalWrapper,
  modalProvider: ModalProvider,
};

export default DatePickerInput;
