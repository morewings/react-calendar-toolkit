import compose from 'utils/compose';
import {withDatepickerProvider} from 'store';
import {withModalProvider} from 'features/modal';
import DatePicker from 'components/DatePicker';
import DatePickerInput from 'components/DatePickerInput';
import {useFormatDate, withLocaleContext} from 'utils/localeContext';
import {
  withTheme,
  useThemePostCSS,
  useThemeContext,
  setCSSVariable,
  removeCSSVariable,
  getCSSVariable,
} from 'utils/themeContext';
import useOnClickOutside from 'utils/useOnClickOutside';
import defaultTheme from 'utils/defaultTheme';
import useScrollIntoView from 'utils/scrollIntoView';

const WrappedDatePickerInput = compose(
  withDatepickerProvider,
  withModalProvider,
  withLocaleContext,
  withTheme
)(DatePickerInput);

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
};

export default compose(
  withDatepickerProvider,
  withLocaleContext,
  withTheme
)(DatePicker);
