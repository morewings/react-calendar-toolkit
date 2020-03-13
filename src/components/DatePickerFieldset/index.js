import {compose} from 'redux';
import {withLocaleContext} from 'utils/localeContext';
import DatePickerFieldset from './DatePickerFieldset';
import {withTheme} from '../../utils/themeContext';

export default compose(withLocaleContext, withTheme)(DatePickerFieldset);
