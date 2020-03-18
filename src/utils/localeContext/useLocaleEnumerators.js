import {getYears, getMonths, getDays} from 'utils/enumerators';
import {useLocaleContext} from './Context';

const useLocaleEnumerators = precision => {
  const locale = useLocaleContext();
  return {
    day: getDays(locale),
    month: getMonths(locale),
    year: getYears,
  }[precision];
};

export default useLocaleEnumerators;
