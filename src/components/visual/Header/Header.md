Here is how `Datepicker` with custom `Header` looks like:

```js
import DatePicker from 'react-calendar-toolkit';

const style = {
  color: 'red',
  textAlign: 'center',
  padding: '16px 0',
  border: '2px solid lightGray',
  margin: '2px'
};

const CustomComponent = ({selectedDate, title, todayDate}) => {
  return (
    <div style={style}>
      {title}
    </div>
  )
};

<DatePicker
  minPrecision="month"
  renderHeaderAs={CustomComponent}
  title="Demo datepicker" />
```

### Header Component example

```js { "file": "../Header.js" }
```
