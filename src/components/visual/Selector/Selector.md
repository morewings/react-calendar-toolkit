Here is how `Datepicker` with custom `Header` looks like:

```js
import DatePicker from 'react-calendar-toolkit';

const style = {
  color: 'black',
  textAlign: 'center',
  padding: '16px 0',
  border: '2px dashed pink',
  margin: '2px'
};

const CustomComponent = () => {
  return (
    <div style={style}>
      {`<Selector />`}
    </div>
  )
};

<DatePicker
  onDateSet={date => {console.log('date set', date);}}
  minPrecision="month"
  renderSelectorAs={CustomComponent}
  title="Demo datepicker" />
```

### Selector Component example
```js { "file": "../Selector.js" }
```

