import React from 'react';
import PropTypes from 'prop-types';
import classes from './Clock.module.css';

const Clock = ({amLabel, pmLabel, timeFormat}) => (
  <div className={classes.grid}>
    <fieldset className={classes.fieldset}>
      <label className={classes.inputGroup}>
        <button
          aria-label="increment"
          type="button"
          className={classes.increment}
        />
        <input
          placeholder="hh"
          max={24}
          min={0}
          className={classes.input}
          type="number"
        />
        <button
          aria-label="decrement"
          type="button"
          className={classes.decrement}
        />
      </label>
      <span className={classes.separator}>:</span>
      <label className={classes.inputGroup}>
        <button
          aria-label="increment"
          type="button"
          className={classes.increment}
        />
        <input
          min={0}
          max={60}
          placeholder="mm"
          maxLength={2}
          className={classes.input}
          type="number"
        />
        <button
          aria-label="decrement"
          type="button"
          className={classes.decrement}
        />
      </label>
      {timeFormat === '12' && (
        <div>
          <button type="button">{amLabel}</button>
          <button type="button">{pmLabel}</button>
        </div>
      )}
    </fieldset>
  </div>
);

Clock.propTypes = {
  amLabel: PropTypes.string.isRequired,
  pmLabel: PropTypes.string.isRequired,
  timeFormat: PropTypes.oneOf(['12', '24']).isRequired,
};

export default Clock;
