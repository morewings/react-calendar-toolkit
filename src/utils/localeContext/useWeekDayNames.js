import {getWeekDayNames} from 'utils/enumerators';
import {useLocaleContext} from './Context';

const useWeekDayNames = () => {
  const locale = useLocaleContext();
  return getWeekDayNames(locale);
};

export default useWeekDayNames;
