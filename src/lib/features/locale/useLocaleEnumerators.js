import {getYears, getMonths, getDays} from 'lib/utils/enumerators';
import {useLocaleContext} from './withLocaleContext';

const useLocaleEnumerators = precision => {
  const locale = useLocaleContext();
  return {
    day: getDays(locale),
    month: getMonths(locale),
    year: getYears,
  }[precision];
};

export default useLocaleEnumerators;
