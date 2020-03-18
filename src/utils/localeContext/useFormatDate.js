import {formatDateWithLocale} from 'utils/dateUtils';
import {useLocaleContext} from './Context';

const useFormatDate = () => {
  const locale = useLocaleContext();
  return formatDateWithLocale({locale});
};

export default useFormatDate;
