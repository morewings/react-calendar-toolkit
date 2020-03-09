`Weekday` component renders grid with weekday names on the top of `Day Calendar`. Here is how `Datepicker` with custom `Weekday` component looks like:

```js
import DatePicker from 'react-calendar-toolkit';

const style = {
  boxSizing: 'border-box',
  flex: '1 1 calc(100% / 7)',
  color: 'black',
  textAlign: 'center',
  padding: '0',
  border: '2px dashed pink',
  margin: '2px',
  fontSize: '12px',
  height: '24px',
  lineHeight: '24px'
};

const CustomComponent = ({name}) => {
  return (
    <div style={style}>
      {name.narrow}
    </div>
  )
};

<DatePicker
  onDateSet={date => {console.log('date set', date);}}
  minPrecision="day"
  renderWeekDayAs={CustomComponent}
  title="Demo datepicker" />
```

### WeekDay Component example
```js { "file": "../WeekDay.js" }
```

### Wrap WeekDay Grid with custom component
You can provide wrapper component to wrap all rendered `WeekDay`, which can be React Component or DOM node.

```js
import DatePicker from 'react-calendar-toolkit';

const style = {
  display: 'flex',
  width: 'auto',
  flexDirection: 'row',
  flexWrap: 'wrap',
  padding: '0 8px 8px',
  margin: '0 8px 8px',
  height: '24px',
  border: '2px dashed pink',
};

const CustomComponent = ({children}) => (
  <div style={style}>{children}</div>
);

<DatePicker
  onDateSet={date => {console.log('date set', date);}}
  minPrecision="day"
  wrapWeekDaysWith={CustomComponent}
  title="Demo datepicker" />
```


