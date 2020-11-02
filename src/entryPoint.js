import compose from 'utils/compose';
import {withModalProvider} from 'features/modal';
import {withDatepickerProvider} from 'features/datepicker';
import DatePicker from 'components/DatePicker';
import DatePickerInput from 'components/DatePickerInput';
import {useFormatDate, withLocaleContext} from 'features/locale';
import {
  withTheme,
  useThemePostCSS,
  useThemeContext,
  setCSSVariable,
  removeCSSVariable,
  getCSSVariable,
} from 'features/theme';
import useOnClickOutside from 'utils/useOnClickOutside';
import defaultTheme from 'utils/defaultTheme';
import useScrollIntoView from 'utils/scrollIntoView';

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
