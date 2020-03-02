import {compose} from 'redux';
import withProvider from 'utils/withProvider';
import DatePicker from 'components/DatePicker';
import getAriaLabel from 'utils/getAriaLabel';
import {useFormatDate, withLocaleContext} from 'utils/localeContext';
import {
  withTheme,
  useThemePostCSS,
  useThemeContext,
  setCSSVariable,
} from 'utils/themeContext';

export {
  getAriaLabel,
  useFormatDate,
  useThemePostCSS,
  useThemeContext,
  setCSSVariable,
};

export default compose(withProvider, withLocaleContext, withTheme)(DatePicker);
