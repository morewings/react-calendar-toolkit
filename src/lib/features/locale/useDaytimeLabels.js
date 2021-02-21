import getDaytimeLabels from 'lib/utils/getDaytimeLabels';
import {useLocaleContext} from './withLocaleContext';

const useDaytimeLabels = () => {
  const locale = useLocaleContext();
  const {timeFormat, amLabel, pmLabel} = getDaytimeLabels(locale);
  return {
    amLabel,
    pmLabel,
    timeFormat,
  };
};

export default useDaytimeLabels;
