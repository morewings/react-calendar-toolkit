`Day` component displays specific date with __day precision__. `onDateSet` prop allows to set this date as selected. Here is how `Datepicker` with custom `Day` component looks like:

```js
import DatePicker from 'react-calendar-toolkit';

const style = {
  boxSizing: 'border-box',
  flex: '1 1 calc(100% / 7)',
  color: 'red',
  textAlign: 'center',
  padding: '0',
  border: '2px solid lightGray',
  margin: '2px'
};

const CustomComponent = ({
  onDateSet,
  date,
  isSameMonth,
  isToday,
  isSelected,
  isDisabled,
  isHighlighted,
  isWeekend,
  name
}) => {
  return (
    <div style={style}>
      {name.numeric}
    </div>
  )
};

<DatePicker
  minPrecision="day"
  renderDayAs={CustomComponent}
  title="Demo datepicker" />
```

### Day Component example
```js static
import classNames from 'classnames';
import classes from './Day.module.css';

const Day = ({
  onDateSet,
  date,
  isSameMonth,
  isToday,
  isSelected,
  isDisabled,
  isHighlighted,
  isWeekend,
  name,
}) => {
  const handleClick = () => {
    onDateSet(date);
  };
  return (
    <div
      tabIndex="0"
      role="button"
      onClick={handleClick}
      onKeyPress={handleClick}
      className={classNames({
        [classes.wrapper]: true,
        /** Conditional class to display, if this date entry belongs to another month */
        [classes.isOtherMonth]: !isSameMonth,
        /** Conditional class to display, if this day is today */
        [classes.isToday]: isToday,
        /** Conditional class to display, if this day is selected */
        [classes.isSelected]: isSelected,
        /** Conditional class to display, if this day is disabled */
        [classes.isDisabled]: isDisabled,
        /** Conditional class to display, if this day is weekend */
        [classes.isWeekend]: isWeekend,
        /** Conditional class to display, if this day is highlighted */
        [classes.isHighlighted]: isHighlighted,
      })}>
      {name.numeric}
    </div>
  );
};
```

### Wrap Day Calendar with custom component
You can provide wrapper component to Day Calendar, which can be React Component or DOM node.

```js
import DatePicker from 'react-calendar-toolkit';

const style = {
  display: 'flex',
  width: '276px',
  flexDirection: 'row',
  flexWrap: 'wrap',
  padding: '0 8px 8px',
  margin: '0 8px 8px',
  height: '247px',
  border: '2px solid lightGray',
};

const CustomComponent = ({children}) => (
  <div style={style}>{children}</div>
);

<DatePicker
  minPrecision="day"
  wrapDaysWith={CustomComponent}
  title="Demo datepicker" />
```


