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

const CustomComponent = () => {
  return (
    <div style={style}>
      Selector
    </div>
  )
};

<DatePicker
  minPrecision="month"
  renderSelectorAs={CustomComponent}
  title="Demo datepicker" />
```

### Selector Component example
```js { "file": "../Selector.js" }
```

