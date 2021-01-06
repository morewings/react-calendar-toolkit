import {formatDateWithLocale} from 'lib/utils/dateUtils';
import {useLocaleContext} from './withLocaleContext';

const useDaytimeLabels = () => {
  const locale = useLocaleContext();
  const formatDate = formatDateWithLocale({locale});
  const testString = formatDate('p', new Date(2016, 0, 1, 0));
  return {
    amLabel: formatDate('aaa', new Date(2016, 0, 1, 0)),
    pmLabel: formatDate('aaa', new Date(2016, 0, 1, 16)),
    timeFormat: testString.length > 5 ? '12' : '24',
  };
};

export default useDaytimeLabels;
