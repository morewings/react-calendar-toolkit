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
```js static
import {useFormatDate} from 'utils/localeContext';
import classes from './Header.module.css';

const Header = ({selectedDate, title, todayDate}) => {
   /**
   * Returns formatted date
   * @param {string} pattern - Formatting pattern
   * @param {Date} date - Date object to apply format
   * @return {string} Formatted date
   */
  const formatDate = useFormatDate();
  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>{title}</div>
      <div className={classes.currentDate}>
        {formatDate('MMM do', selectedDate)}
      </div>
    </div>
  );
};
```

