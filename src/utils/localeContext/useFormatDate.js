import {formatDateWithLocale} from 'utils/dateUtils';
import {useLocaleContext} from './withLocaleContext';

const useFormatDate = () => {
  const locale = useLocaleContext();
  return formatDateWithLocale({locale});
};

export default useFormatDate;
