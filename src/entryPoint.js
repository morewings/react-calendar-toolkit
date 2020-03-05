import {compose} from 'redux';
import withProvider from 'utils/withProvider';
import DatePicker from 'components/DatePicker';
import {useFormatDate, withLocaleContext} from 'utils/localeContext';
import {
  withTheme,
  useThemePostCSS,
  useThemeContext,
  setCSSVariable,
  removeCSSVariable,
  getCSSVariable,
} from 'utils/themeContext';
import defaultTheme from 'utils/defaultTheme';

export {
  useFormatDate,
  useThemePostCSS,
  useThemeContext,
  setCSSVariable,
  getCSSVariable,
  removeCSSVariable,
  defaultTheme,
};

export default compose(withProvider, withLocaleContext, withTheme)(DatePicker);
