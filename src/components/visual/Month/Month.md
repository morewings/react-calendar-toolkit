`Month` component displays specific date with __month precision__. `onDateSet` prop allows to set this date as selected. Here is how `Datepicker` with custom `Month` component looks like:

```js
import DatePicker from 'react-calendar-toolkit';

const style = {
  boxSizing: 'border-box',
  flex: '1 1 calc(100% / 3 - 4px)',
  color: 'red',
  textAlign: 'center',
  padding: '0',
  border: '2px solid lightGray',
  margin: '2px',
};

const CustomComponent = ({
  onDateSet,
  date,
  isDisabled,
  isSameMonth,
  isSelected,
  name,
  isHighlighted,
}) => {
  return (
    <div style={style}>
      {name.abbreviated}
    </div>
  )
};

<DatePicker
  minPrecision="month"
  renderMonthAs={CustomComponent}
  title="Demo datepicker" />
```

### Month Component example
```js static
import classNames from 'classnames';
import classes from './Month.module.css';

const Month = ({
  onDateSet,
  date,
  isDisabled,
  isSameMonth,
  isSelected,
  name,
  isHighlighted,
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
        /** Conditional class to display, if month is selected */
        [classes.isSelected]: isSelected,
        /** Conditional class to display, if month is disabled */
        [classes.isDisabled]: isDisabled,
        /** Conditional class to display, if month belongs to same month as today */
        [classes.isSameMonth]: isSameMonth,
        /** Conditional class to display, if month is highlighted */
        [classes.isHighlighted]: isHighlighted,
      })}>
      {name.wide}
    </div>
  );
};
```

### Wrap Month Calendar with custom component
You can provide wrapper component to Month Calendar, which can be React Component or DOM node.

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
  minPrecision="month"
  wrapMonthWith={CustomComponent}
  title="Demo datepicker" />
```


