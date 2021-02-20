import React from 'react';
import PropTypes from 'prop-types';
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
}) => (
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
          value={hour.name}
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
          onClick={onIncrementMinute}
          aria-label="increment"
          type="button"
          className={classes.increment}
        />
        <input
          value={minute.name}
          min={0}
          max={60}
          placeholder="mm"
          maxLength={2}
          className={classes.input}
          type="number"
        />
        <button
          onClick={onDecrementMinute}
          aria-label="decrement"
          type="button"
          className={classes.decrement}
        />
      </label>
      {timeFormat === '12' && (
        <div className={classes.dayTime}>
          <button
            className={hour.daytimeLabel === amLabel ? classes.active : ''}
            type="button">
            {amLabel}
          </button>
          <button
            className={hour.daytimeLabel === pmLabel ? classes.active : ''}
            type="button">
            {pmLabel}
          </button>
        </div>
      )}
      <div className={classes.action}>
        <button type="button">✓</button>
      </div>
    </fieldset>
  </div>
);

Clock.propTypes = {
  amLabel: PropTypes.string.isRequired,
  pmLabel: PropTypes.string.isRequired,
  onDecrementHour: PropTypes.func.isRequired,
  onIncrementHour: PropTypes.func.isRequired,
  onIncrementMinute: PropTypes.func.isRequired,
  onDecrementMinute: PropTypes.func.isRequired,
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
};

export default Clock;
