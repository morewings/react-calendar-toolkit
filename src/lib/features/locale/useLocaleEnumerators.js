import {
  getYears,
  getMonths,
  getDays,
  getHours,
  getMinutes,
} from 'lib/utils/enumerators';
import curry from 'lib/utils/curry';
import {useLocaleContext} from './withLocaleContext';

const useLocaleEnumerators = precision => {
  const locale = useLocaleContext();
  return {
    // TODO: add curry here, like `getHours`
    day: getDays(locale),
    month: getMonths(locale),
    year: getYears,
    hour: curry(getHours)(locale),
    minute: curry(getMinutes),
  }[precision];
};

export default useLocaleEnumerators;
