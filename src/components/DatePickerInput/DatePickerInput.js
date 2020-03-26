import React from 'react';
import PropTypes from 'prop-types';
import {useModalContext, useModalActions} from 'features/modal';
import {
  useDatePickerContext,
  useHasInitialValues,
  useSetInitialValues,
} from 'features/datepicker';
import DatePicker, {propTypes} from 'components/DatePicker/DatePicker';
import Input from 'components/visual/Input';
import PopoverProvider, {PopoverWrapper} from 'components/visual/Popover';
import ModalProvider, {ModalWrapper} from 'components/visual/Modal';
import useLogic from './useLogic';

const DatePickerInput = ({
  renderInputAs,
  mode,
  formatPattern,
  renderDatePickerAs,
  onDateSet,
  popoverProvider,
  wrapPopoverWith,
  modalProvider,
  wrapModalWith,
  hideOnSelect,
  datePickerProps,
  datePickerDefaultProps,
}) => {
  const {
    state: {isVisible},
  } = useModalContext();

  const {toggleDatePicker} = useModalActions();

  const {handleDateSet, formatValue, getDate} = useLogic({
    onDateSet,
    hideOnSelect,
  });

  const RenderingLogicProvider =
    mode === 'popover' ? popoverProvider : modalProvider;

  const InputComponent = renderInputAs;
  const DatePickerComponent = renderDatePickerAs;

  const DatePickerWithProps = () => (
    <DatePickerComponent
      showHeader={mode === 'modal'}
      onDateSet={handleDateSet}
      {...datePickerProps}
    />
  );

  const {initialDate, today, minPrecision} = {
    ...datePickerDefaultProps,
    ...datePickerProps,
  };

  useSetInitialValues({initialDate, today, minPrecision});
  const hasInitialValues = useHasInitialValues();

  return (
    hasInitialValues && (
      <RenderingLogicProvider
        isVisible={isVisible}
        toggleDatepicker={toggleDatePicker}
        wrapPopoverWith={wrapPopoverWith}
        wrapModalWith={wrapModalWith}
        renderDatePickerAs={DatePickerWithProps}>
        <InputComponent
          onChange={onDateSet}
          date={getDate()}
          value={formatValue(formatPattern)}
          toggleDatepicker={toggleDatePicker}
        />
      </RenderingLogicProvider>
    )
  );
};

DatePickerInput.propTypes = {
  /** Callback when user selects date */
  onDateSet: PropTypes.func.isRequired,
  /** __Rendering__ mode of attached Datepicker */
  mode: PropTypes.oneOf(['popover', 'modal']),
  /** Flag to __show or hide__ Datepicker when date is selected */
  hideOnSelect: PropTypes.bool,
  /** Define component which renders __Input__. */
  renderInputAs: PropTypes.elementType,
  /**
   * Define component which renders __DatePicker__ entry.
   * @ignore
   */
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
   * @see https://date-fns.org/docs/format
   */
  formatPattern: PropTypes.string,
  /**
   * Set props for __Datepicker__ component.
   * @see https://morewings.github.io/react-calendar-toolkit/#!/Available%20components/DatePicker
   */
  datePickerProps: PropTypes.shape({
    ...propTypes,
    onDateSet: undefined,
    theme: undefined,
    dateFnsLocale: undefined,
  }),
  /**
   * Default values for __Datepicker__ component.
   * @ignore
   */
  datePickerDefaultProps: PropTypes.shape({
    initialDate: PropTypes.instanceOf(Date),
    today: PropTypes.instanceOf(Date),
    minPrecision: PropTypes.string,
  }),
  /** Theme object to customize style for UI components */
  theme: PropTypes.shape({}), // eslint-disable-line react/require-default-props
  /** date-fns locale object. Defaults to english */
  dateFnsLocale: PropTypes.shape({}), // eslint-disable-line react/require-default-props
};

DatePickerInput.defaultProps = {
  mode: 'popover',
  hideOnSelect: true,
  renderInputAs: Input,
  renderDatePickerAs: DatePicker,
  formatPattern: 'MM/dd/yyyy',
  popoverProvider: PopoverProvider,
  wrapPopoverWith: PopoverWrapper,
  wrapModalWith: ModalWrapper,
  modalProvider: ModalProvider,
  datePickerProps: {},
  datePickerDefaultProps: {
    initialDate: new Date(2020, 0, 8),
    today: new Date(),
    minPrecision: 'day',
  },
};

export default DatePickerInput;
