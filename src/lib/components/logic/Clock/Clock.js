import React from 'react';
import PropTypes from 'prop-types';
import {useDaytimeLabels, useLocaleEnumerators} from 'lib/features/locale';
import {getHours} from 'lib/utils/enumerators';
import config from 'lib/utils/config';

const Clock = ({renderAs, visibleTimestamp, startDate, endDate, precision}) => {
  const {amLabel, pmLabel, timeFormat} = useDaytimeLabels();
  const Component = renderAs;
  const getItems = useLocaleEnumerators(precision);
  console.log(getHours(visibleTimestamp, startDate, endDate));
  return (
    <Component timeFormat={timeFormat} amLabel={amLabel} pmLabel={pmLabel} />
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
