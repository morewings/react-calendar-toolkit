import {formatDistanceStrictWithOptions} from 'date-fns/fp';
import {useLocaleContext} from './Context';

const useMonthStepperLabels = () => {
  const locale = useLocaleContext();
  const incrementMonthLabel = formatDistanceStrictWithOptions(
    {locale, addSuffix: true},
    new Date(2020, 0, 1),
    new Date(2020, 1, 1)
  );
  const decrementMonthLabel = formatDistanceStrictWithOptions(
    {locale, addSuffix: true},
    new Date(2020, 1, 1),
    new Date(2020, 0, 1)
  );
  return {
    incrementMonthLabel,
    decrementMonthLabel,
  };
};

export default useMonthStepperLabels;
