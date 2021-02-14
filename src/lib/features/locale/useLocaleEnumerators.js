import {getYears, getMonths, getDays, getHours} from 'lib/utils/enumerators';
import curry from 'lib/utils/curry';
import {useLocaleContext} from './withLocaleContext';

const useLocaleEnumerators = precision => {
  const locale = useLocaleContext();
  console.log(precision);
  return {
    // TODO: add curry here, like `getHours`
    day: getDays(locale),
    month: getMonths(locale),
    year: getYears,
    hour: curry(getHours)(locale),
    minute: curry(getHours)(locale),
  }[precision];
};

export default useLocaleEnumerators;
