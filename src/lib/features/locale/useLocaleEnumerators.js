import {getYears, getMonths, getDays, getHours} from 'lib/utils/enumerators';
import curry from 'lib/utils/curry';
import {useLocaleContext} from './withLocaleContext';

const useLocaleEnumerators = precision => {
  const locale = useLocaleContext();
  return {
    // TODO: add curry here, like `getHours`
    day: getDays(locale),
    month: getMonths(locale),
    year: getYears,
    hours: curry(getHours),
  }[precision];
};

export default useLocaleEnumerators;
