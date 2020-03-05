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

export {
  useFormatDate,
  useThemePostCSS,
  useThemeContext,
  setCSSVariable,
  getCSSVariable,
  removeCSSVariable,
};

export default compose(withProvider, withLocaleContext, withTheme)(DatePicker);
