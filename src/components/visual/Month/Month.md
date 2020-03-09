`Month` component displays specific date with __month precision__. `onDateSet` prop allows to set this date as selected. Here is how `Datepicker` with custom `Month` component looks like:

```js
import DatePicker from 'react-calendar-toolkit';

const style = {
  boxSizing: 'border-box',
  flex: '1 1 calc(100% / 3 - 4px)',
  color: 'black',
  lineHeight: '50px',
  textAlign: 'center',
  padding: '0',
  border: '2px dashed pink',
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
  onDateSet={date => {console.log('date set', date);}}
  minPrecision="month"
  renderMonthAs={CustomComponent}
  title="Demo datepicker" />
```

### Month Component example

```js { "file": "../Month.js" }
```

### Wrap Month Calendar with custom component
You can provide wrapper component to Month Calendar, which can be React Component or DOM node.

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
  onDateSet={date => {console.log('date set', date);}}
  minPrecision="month"
  wrapMonthWith={CustomComponent}
  title="Demo datepicker" />
```


