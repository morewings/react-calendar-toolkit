import withProvider from 'utils/withProvider';
import DatePicker from 'components/DatePicker';
import getAriaLabel from 'utils/getAriaLabel';
import {useFormatDate} from 'utils/localeContext';

export {getAriaLabel, useFormatDate};

export default withProvider(DatePicker);
