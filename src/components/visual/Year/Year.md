`Year` component displays specific date with __year precision__. `onDateSet` prop allows to set this date as selected. Here is how `Datepicker` with custom `Year` component looks like:

```js
import DatePicker from 'react-calendar-toolkit';

const style = {
  boxSizing: 'border-box',
  flex: '1 1 calc(100% / 5 - 4px)',
  color: 'black',
  textAlign: 'center',
  padding: '0',
  border: '2px dashed pink',
  margin: '6px 2px',
  height: '36px',
  lineHeight: '36px'
};

const CustomComponent = ({
  isHighlighted,
  onDateSet,
  date,
  isSelected,
  isSameYear,
  name,
}) => {
  return (
    <div style={style}>
      {name.numeric}
    </div>
  )
};

<DatePicker
  renderYearAs={CustomComponent}
  minPrecision="year"
  startDate={new Date(1999, 0, 1)}
  endDate={new Date(2020, 1, 25)}
  title="Demo datepicker" />
```

### Year Component example
```js { "file": "../Year.js" }
```

### Wrap Year Calendar with custom component
You can provide wrapper component to Year Calendar, which can be React Component or DOM node.

```js
import DatePicker from 'react-calendar-toolkit';

const style = {
  display: 'flex',
  width: '276px',
  flexDirection: 'row',
  flexWrap: 'wrap',
  padding: '0 8px 8px',
  margin: '0 8px 8px',
  height: '260px',
  border: '2px dashed pink',
  overflow: 'auto',
};

const CustomComponent = ({children}) => (
  <div style={style}>{children}</div>
);

<DatePicker
  minPrecision="year"
  wrapYearWith={CustomComponent}
  startDate={new Date(1999, 0, 1)}
  endDate={new Date(2020, 1, 25)}
  title="Demo datepicker" />
```


