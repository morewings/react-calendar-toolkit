`Input` component renders field to attach `Datepicker`.

```js
import {DatePickerInput} from 'react-calendar-toolkit';

const style = {
  color: 'black',
  textAlign: 'center',
  padding: '6px 12px',
  fontSize: '12px',
  lineHeight: '30px',
  border: '2px dashed pink',
  cursor: 'pointer',
  background: 'white',    
}

const CustomInput = ({toggleDatepicker, value, date, onChange}) => {
  const handleClick = event => {
    event.stopPropagation();
    toggleDatepicker(true);
  };
  return (
    <input      
      readOnly
      style={style}  
      value={`Click me: ${value}`}
      onClick={handleClick}
      type="button"
    />
  );
};

<DatePickerInput
  renderInputAs={CustomInput}
  onDateSet={date => {console.log('date set', date);}}
/>
```

### Input Component example


```js { "file": "../Input.js" }
```


