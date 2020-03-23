import {getWeekDayNames} from 'utils/enumerators';
import {useLocaleContext} from './withLocaleContext';

const useWeekDayNames = () => {
  const locale = useLocaleContext();
  return getWeekDayNames(locale);
};

export default useWeekDayNames;
