import config from 'lib/utils/config';
import {useDatepickerContext} from './context';
import useDatepickerActions from './actionCreators';

const useIncrementPrecision = minPrecision => {
  const {
    state: {precision},
  } = useDatepickerContext();

  const {setPrecision} = useDatepickerActions();

  const getNextPrecision = (precisionEnum, currentPrecision) => {
    const currentIndex = precisionEnum.indexOf(currentPrecision);
    return precisionEnum[currentIndex + 1];
  };

  const limitPrecision = precisionEnum => {
    const currentIndex = precisionEnum.indexOf(minPrecision);
    return precisionEnum.slice(0, currentIndex + 1);
  };

  const datepickerPrecisions = limitPrecision(
    config.supportedPrecisions,
    minPrecision
  );
  const nextPrecision = getNextPrecision(datepickerPrecisions, precision);
  return () => {
    nextPrecision && setPrecision(nextPrecision);
  };
};

export default useIncrementPrecision;
