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
```js static
import {useFormatDate} from 'utils/localeContext';
import classes from './Selector.module.css';

const Selector = ({
  selectedDate,
  todayDate,
  setPrecision,
  decrementMonth,
  incrementMonth,
}) => {
    /**
    * Returns formatted date
    * @param {string} pattern - Formatting pattern
    * @param {Date} date - Date object to apply format
    * @return {string} Formatted date
    */
  const formatDate = useFormatDate();
  const year = formatDate('y', selectedDate);
  const month = formatDate('LLLL', selectedDate);
  return (
    <div className={classes.wrapper}>
      {/** Renders precision selectors */}
      <div className={classes.buttons}>
        <button
          onClick={() => {
            setPrecision('year');
          }}
          type="button">
          {year}
        </button>
        <button
          onClick={() => {
            setPrecision('month');
          }}
          type="button">
          {month}
        </button>
      </div>
      {/** Renders month stepper */}
      <div className={classes.stepper}>
        <button
          onClick={() => {
            decrementMonth(selectedDate);
          }}
          type="button">
          ⟨
        </button>
        <button
          onClick={() => {
            incrementMonth(selectedDate);
          }}
          type="button">
          ⟩
        </button>
      </div>
    </div>
  );
};
```

