import {compose} from 'redux';
import {withProvider} from 'store';
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
import useScrollIntoView from 'utils/useScrollIntoView';

const WrappedDatePickerInput = compose(
  withProvider,
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

export default compose(withProvider, withLocaleContext, withTheme)(DatePicker);
