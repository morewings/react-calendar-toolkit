import {compose} from 'redux';
import DatePicker from './DatePicker';
import {withLocaleContext} from '../../utils/localeContext';
import {withTheme} from '../../utils/themeContext';

export default compose(withLocaleContext, withTheme)(DatePicker);
