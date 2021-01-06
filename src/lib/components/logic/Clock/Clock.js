import React from 'react';
import PropTypes from 'prop-types';
import {useDaytimeLabels} from 'lib/features/locale';

const Clock = ({renderAs}) => {
  const {amLabel, pmLabel, timeFormat} = useDaytimeLabels();
  const Component = renderAs;
  return (
    <Component timeFormat={timeFormat} amLabel={amLabel} pmLabel={pmLabel} />
  );
};

Clock.propTypes = {
  renderAs: PropTypes.elementType.isRequired,
};

export default Clock;
