import {compose} from 'redux';
import {withLocaleContext} from 'utils/localeContext';
import {withTheme} from 'utils/themeContext';
import DatePicker from './DatePicker';

export default compose(withLocaleContext, withTheme)(DatePicker);
