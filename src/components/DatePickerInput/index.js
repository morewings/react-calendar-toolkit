import {compose} from 'redux';
import {withLocaleContext} from 'utils/localeContext';
import {withTheme} from 'utils/themeContext';
import DatePickerInput from './DatePickerInput';

export default compose(withLocaleContext, withTheme)(DatePickerInput);
