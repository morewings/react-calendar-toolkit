import React from 'react';
import PropTypes from 'prop-types';
import {useDaytimeLabels, useLocaleEnumerators} from 'lib/features/locale';
import config from 'lib/utils/config';
import {useDatepickerActions} from 'lib/features/datepicker';
import {checkIsSameHour} from 'lib/utils/dateUtils';

const getVisibleHour = (hours, visibleTimestamp) =>
  hours.find(({date}) => checkIsSameHour(date, visibleTimestamp));

const Clock = ({renderAs, visibleTimestamp, startDate, endDate, precision}) => {
  const {amLabel, pmLabel, timeFormat} = useDaytimeLabels();
  const {setVisibility, setPrecision} = useDatepickerActions();
  const Component = renderAs;
  const getItems = useLocaleEnumerators(precision);
  const hours = getItems(visibleTimestamp, startDate, endDate);

  const onIncrementHour = () => {
    const nextIndex =
      hours.findIndex(({date}) => checkIsSameHour(date, visibleTimestamp)) + 1;
    if (nextIndex < hours.length) {
      setVisibility(hours[nextIndex].date);
    }
  };
  const onDecrementHour = () => {
    const nextIndex =
      hours.findIndex(({date}) => checkIsSameHour(date, visibleTimestamp)) - 1;
    if (nextIndex >= 0) {
      setVisibility(hours[nextIndex].date);
    }
  };
  return (
    <Component
      hour={getVisibleHour(hours, visibleTimestamp)}
      onIncrementHour={onIncrementHour}
      onDecrementHour={onDecrementHour}
      timeFormat={timeFormat}
      amLabel={amLabel}
      pmLabel={pmLabel}
    />
  );
};

Clock.propTypes = {
  renderAs: PropTypes.elementType.isRequired,
  visibleTimestamp: PropTypes.number.isRequired,
  startDate: PropTypes.instanceOf(Date).isRequired,
  endDate: PropTypes.instanceOf(Date).isRequired,
  // TODO: validate if we need to use string here
  precision: PropTypes.oneOf(config.supportedPrecisions).isRequired,
};

export default Clock;
