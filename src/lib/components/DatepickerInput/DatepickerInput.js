import React from 'react';
import PropTypes from 'prop-types';
import {useModalContext, useModalActions} from 'lib/features/modal';
import {
  useHasInitialValues,
  useSetInitialValues,
} from 'lib/features/datepicker';
import Datepicker, {propTypes} from 'lib/components/Datepicker/Datepicker';
import Input from 'lib/components/visual/Input';
import PopoverProvider, {PopoverWrapper} from 'lib/components/visual/Popover';
import ModalProvider, {ModalWrapper} from 'lib/components/visual/Modal';
import useLogic from './useLogic';

const DatepickerInput = ({
  renderInputAs,
  mode,
  formatPattern,
  renderDatepickerAs,
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

  const {toggleDatepicker} = useModalActions();

  const {handleDateSet, formatValue, getDate} = useLogic({
    onDateSet,
    hideOnSelect,
  });

  const RenderingLogicProvider =
    mode === 'popover' ? popoverProvider : modalProvider;

  const InputComponent = renderInputAs;
  const DatepickerComponent = renderDatepickerAs;

  const DatepickerWithProps = () => (
    <DatepickerComponent
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

  // eslint-disable-next-line react/prop-types
  const RefWrap = React.forwardRef(({children}, ref) => (
    <div ref={ref}>{children}</div>
  ));

  return (
    hasInitialValues && (
      <RenderingLogicProvider
        isVisible={isVisible}
        toggleDatepicker={toggleDatepicker}
        wrapPopoverWith={wrapPopoverWith}
        wrapModalWith={wrapModalWith}
        renderDatepickerAs={DatepickerWithProps}>
        <RefWrap>
          <InputComponent
            onChange={onDateSet}
            date={getDate()}
            value={formatValue(formatPattern)}
            toggleDatepicker={toggleDatepicker}
          />
        </RefWrap>
      </RenderingLogicProvider>
    )
  );
};

DatepickerInput.propTypes = {
  /** Callback when user selects date */
  onDateSet: PropTypes.func.isRequired,
  /** __Rendering__ mode of attached Datepicker */
  mode: PropTypes.oneOf(['popover', 'modal']),
  /** Flag to __show or hide__ Datepicker when date is selected */
  hideOnSelect: PropTypes.bool,
  /** Define component which renders __Input__. */
  renderInputAs: PropTypes.elementType,
  /**
   * Define component which renders __Datepicker__ entry.
   * @ignore
   */
  renderDatepickerAs: PropTypes.elementType,
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
   * @see https://morewings.github.io/react-calendar-toolkit/#!/Available%20components/Datepicker
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

DatepickerInput.defaultProps = {
  mode: 'popover',
  hideOnSelect: true,
  renderInputAs: Input,
  renderDatepickerAs: Datepicker,
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

export default DatepickerInput;
