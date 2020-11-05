import compose from 'lib/utils/compose';
import {withModalProvider} from 'lib/features/modal';
import {withDatepickerProvider} from 'lib/features/datepicker';
import DatePicker from 'lib/components/DatePicker';
import DatePickerInput from 'lib/components/DatePickerInput';
import {useFormatDate, withLocaleContext} from 'lib/features/locale';
import {
  withTheme,
  useThemePostCSS,
  useThemeContext,
  setCSSVariable,
  removeCSSVariable,
  getCSSVariable,
} from 'lib/features/theme';
import useOnClickOutside from 'lib/utils/useOnClickOutside';
import defaultTheme from 'lib/utils/defaultTheme';
import useScrollIntoView from 'lib/utils/scrollIntoView';

const WrappedDatePickerInput = compose(
  withDatepickerProvider,
  withModalProvider,
  withLocaleContext,
  withTheme
)(DatePickerInput);

const WrappedDatePicker = compose(
  withDatepickerProvider,
  withLocaleContext,
  withTheme
)(DatePicker);

export {
  useFormatDate,
  useThemePostCSS,
  useThemeContext,
  setCSSVariable,
  getCSSVariable,
  removeCSSVariable,
  defaultTheme,
  useScrollIntoView,
  useOnClickOutside,
  WrappedDatePickerInput as DatePickerInput,
  WrappedDatePicker as DatePicker,
};

export default WrappedDatePicker;