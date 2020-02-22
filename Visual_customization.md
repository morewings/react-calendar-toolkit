You can define visual representation of each exported component by providing your own visual components. Here is how Datepicker with custom Header looks like:

```js
import DatePicker from 'react-calendar-toolkit';

const CustomHeader = props => {
  return (
    <div style={{
      color: 'red',
      textAlign: 'center',
      padding: '16px 0'
    }}>
      {props.title}
    </div>
  )
}

<DatePicker
  renderHeaderAs={CustomHeader}
  title="Demo datepicker" />
```

