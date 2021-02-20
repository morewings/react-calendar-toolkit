import React from 'react';
import PropTypes from 'prop-types';
import config from 'lib/utils/config';
import classes from './Clock.module.css';

const Clock = ({
  amLabel,
  pmLabel,
  timeFormat,
  onDecrementHour,
  onIncrementHour,
  hour,
  minute,
  onIncrementMinute,
  onDecrementMinute,
  onHourChange,
  onMinuteChange,
  onDaytimeToggle,
  onDateSet,
  date,
  precision,
}) => {
  const convertToNumber = value => parseInt(value, 10);
  const handleHourChange = e => {
    onHourChange(convertToNumber(e.target.value));
  };
  const handleMinuteChange = e => {
    onMinuteChange(convertToNumber(e.target.value));
  };

  const handleDateSet = () => {
    onDateSet(date);
  };
  return (
    <div className={classes.grid}>
      <fieldset className={classes.fieldset}>
        <label className={classes.inputGroup}>
          <button
            onClick={onIncrementHour}
            aria-label="increment"
            type="button"
            className={classes.increment}
          />
          <input
            onChange={handleHourChange}
            value={hour.name.toString().padStart(2, 0)}
            placeholder="hh"
            max={timeFormat === '12' ? 12 : 24}
            min={0}
            className={classes.input}
            type="number"
          />
          <button
            onClick={onDecrementHour}
            aria-label="decrement"
            type="button"
            className={classes.decrement}
          />
        </label>
        <span className={classes.separator}>:</span>
        <label className={classes.inputGroup}>
          <button
            disabled={precision === 'hour'}
            onClick={onIncrementMinute}
            aria-label="increment"
            type="button"
            className={classes.increment}
          />
          <input
            readOnly={precision === 'hour'}
            onChange={handleMinuteChange}
            value={minute.name.toString().padStart(2, 0)}
            min={0}
            max={60}
            placeholder="mm"
            maxLength={2}
            className={classes.input}
            type="number"
          />
          <button
            disabled={precision === 'hour'}
            onClick={onDecrementMinute}
            aria-label="decrement"
            type="button"
            className={classes.decrement}
          />
        </label>
        {timeFormat === '12' && (
          <div className={classes.dayTime}>
            <button
              onClick={() => {
                onDaytimeToggle(amLabel);
              }}
              disabled={hour.daytimeLabel === amLabel}
              type="button">
              {amLabel}
            </button>
            <button
              onClick={() => {
                onDaytimeToggle(pmLabel);
              }}
              disabled={hour.daytimeLabel === pmLabel}
              type="button">
              {pmLabel}
            </button>
          </div>
        )}
        <div className={classes.action}>
          <button type="button" onClick={handleDateSet}>
            ✓
          </button>
        </div>
      </fieldset>
    </div>
  );
};

Clock.propTypes = {
  amLabel: PropTypes.string.isRequired,
  pmLabel: PropTypes.string.isRequired,
  onDecrementHour: PropTypes.func.isRequired,
  onIncrementHour: PropTypes.func.isRequired,
  onIncrementMinute: PropTypes.func.isRequired,
  onDecrementMinute: PropTypes.func.isRequired,
  onHourChange: PropTypes.func.isRequired,
  onMinuteChange: PropTypes.func.isRequired,
  onDaytimeToggle: PropTypes.func.isRequired,
  onDateSet: PropTypes.func.isRequired,
  timeFormat: PropTypes.oneOf(['12', '24']).isRequired,
  hour: PropTypes.shape({
    date: PropTypes.instanceOf(Date).isRequired,
    name: PropTypes.number.isRequired,
    daytimeLabel: PropTypes.string.isRequired,
  }).isRequired,
  minute: PropTypes.shape({
    date: PropTypes.instanceOf(Date).isRequired,
    name: PropTypes.number.isRequired,
  }).isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  precision: PropTypes.oneOf(['hour', 'minute']).isRequired,
};

export default Clock;
