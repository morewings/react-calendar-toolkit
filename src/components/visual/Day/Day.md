`Day` component displays specific date with __day precision__. `onDateSet` prop allows to set this date as selected. Here is how `Datepicker` with custom `Day` component looks like:

```js
import DatePicker from 'react-calendar-toolkit';

const style = {
  boxSizing: 'border-box',
  flex: '1 1 calc(100%/7 - 4px)',
  color: 'black',
  textAlign: 'center',
  padding: '0',
  fontSize: '12px',
  lineHeight: '30px',
  border: '2px dashed pink',
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


```js { "file": "../Day.js" }
```

### Wrap Day Calendar with custom component
You can provide wrapper component to Day Calendar, which can be React Component or DOM node.

```js
import DatePicker from 'react-calendar-toolkit';

const style = {
  display: 'flex',
  width: 'auto',
  flexDirection: 'row',
  flexWrap: 'wrap',
  padding: '0 8px 8px',
  margin: '0 8px 8px',
  height: '247px',
  border: '2px dashed pink',
};

const CustomComponent = ({children}) => (
  <div style={style}>{children}</div>
);

<DatePicker
  minPrecision="day"
  wrapDaysWith={CustomComponent}
  title="Demo datepicker" />
```


