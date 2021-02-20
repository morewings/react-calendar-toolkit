import React from 'react';
import PropTypes from 'prop-types';
import {useDaytimeLabels, useLocaleEnumerators} from 'lib/features/locale';
import config from 'lib/utils/config';
import {useDatepickerActions} from 'lib/features/datepicker';
import {
  checkIsSameHour,
  checkIsSameMinute,
  convertToDate,
} from 'lib/utils/dateUtils';

const getVisibleHour = (hours, visibleTimestamp) =>
  hours.find(({date}) => checkIsSameHour(date, visibleTimestamp));

const getVisibleMinute = (minutes, visibleTimestamp) =>
  minutes.find(({date}) => checkIsSameMinute(date, visibleTimestamp));

const Clock = ({
  renderAs,
  visibleTimestamp,
  startDate,
  endDate,
  precision,
  onDateSet,
}) => {
  const {amLabel, pmLabel, timeFormat} = useDaytimeLabels();
  const {setVisibility} = useDatepickerActions();
  const Component = renderAs;
  const getHours = useLocaleEnumerators('hour');
  const getMinutes = useLocaleEnumerators('minute');
  const hours = getHours(visibleTimestamp, startDate, endDate);
  const minutes = getMinutes(visibleTimestamp, startDate, endDate);
  console.log(visibleTimestamp);

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

  const onIncrementMinute = () => {
    const nextIndex =
      minutes.findIndex(({date}) => checkIsSameMinute(date, visibleTimestamp)) +
      1;
    if (nextIndex < minutes.length) {
      setVisibility(minutes[nextIndex].date);
    }
  };

  const onDecrementMinute = () => {
    const nextIndex =
      minutes.findIndex(({date}) => checkIsSameMinute(date, visibleTimestamp)) -
      1;
    if (nextIndex >= 0) {
      setVisibility(minutes[nextIndex].date);
    }
  };

  const handleHourChange = value => {
    const hourLimit = timeFormat === '12' ? 12 : 24;
    if (!isNaN(value) && value >= 0 && value <= hourLimit) {
      setVisibility(hours[value].date);
    }
  };

  const handleMinuteChange = value => {
    if (!isNaN(value) && value >= 0 && value < 60) {
      setVisibility(minutes[value].date);
    }
  };

  const handleDaytimeToggle = daytime => {
    const currentIndex = hours.findIndex(({date}) =>
      checkIsSameHour(date, visibleTimestamp)
    );
    const nextIndex =
      daytime === pmLabel ? currentIndex + 12 : currentIndex - 12;
    if (nextIndex >= 0 && nextIndex < hours.length) {
      setVisibility(hours[nextIndex].date);
    }
  };

  return (
    <Component
      precision={precision}
      hour={getVisibleHour(hours, visibleTimestamp)}
      minute={getVisibleMinute(minutes, visibleTimestamp)}
      onIncrementHour={onIncrementHour}
      onDecrementHour={onDecrementHour}
      onIncrementMinute={onIncrementMinute}
      onDecrementMinute={onDecrementMinute}
      onHourChange={handleHourChange}
      onMinuteChange={handleMinuteChange}
      onDaytimeToggle={handleDaytimeToggle}
      timeFormat={timeFormat}
      amLabel={amLabel}
      pmLabel={pmLabel}
      onDateSet={onDateSet}
      date={convertToDate(visibleTimestamp)}
    />
  );
};

Clock.propTypes = {
  renderAs: PropTypes.elementType.isRequired,
  onDateSet: PropTypes.func.isRequired,
  visibleTimestamp: PropTypes.number.isRequired,
  startDate: PropTypes.instanceOf(Date).isRequired,
  endDate: PropTypes.instanceOf(Date).isRequired,
  // TODO: validate if we need to use string here
  precision: PropTypes.oneOf(config.supportedPrecisions).isRequired,
};

export default Clock;
