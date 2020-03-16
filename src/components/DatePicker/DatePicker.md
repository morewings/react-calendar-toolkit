```js noeditor
import DatePicker from 'react-calendar-toolkit';

const style = {
  color: 'black',
  textAlign: 'center',
  padding: '8px 0',
  border: '2px dashed pink',
  margin: '2px'
};

const styleCalendar = {
  ...style,
  height: '225px'
};

const styleHeader = {
  ...style,
  height: '70px'
};

const styleSelector = {
  ...style,
  height: '26px'
};

const CustomComponent = props => {
  return (
    <div style={props.style}>
      {props.title}
    </div>
  )
};


<div style={{display: 'flex'}}>
  <DatePicker
    renderHeaderAs={() => <CustomComponent style={styleHeader} title="<Header />" />}
    renderSelectorAs={() => <CustomComponent style={styleSelector} title="<Selector />" />}
    wrapMonthWith={() => <CustomComponent style={styleCalendar} title="<Calendar />" />}
    wrapWeekDaysWith={() => <CustomComponent style={style} title="<Weekdays />" />}
    minPrecision="month"
    initialDate={new Date(2020, 1, 6)}
    startDate={new Date(2019, 11, 6)}
    endDate={new Date(2020, 1, 25)}
    today={new Date()}
    onDateSet={date => {console.log('date set', date);}}
    title="Demo datepicker" />
  <div style={{marginLeft: '30px'}}>
    <DatePicker
      minPrecision="month"
      initialDate={new Date(2020, 1, 6)}
      startDate={new Date(2019, 11, 6)}
      endDate={new Date(2020, 1, 25)}
      today={new Date()}
      onDateSet={
        date => {
          console.log('date set', date);
      }}
      title="Demo datepicker" />
  </div>
</div>
```

Datepicker is a component which allows user to see and pick from Calendar of provided dates. It has Selector, which allows to switch between precisions and step between months. Also renders Header with selected date and Datepicker title. 

```js
import DatePicker from 'react-calendar-toolkit';

<DatePicker
  initialDate={new Date(2020, 1, 6)}
  startDate={new Date(2019, 11, 6)}
  endDate={new Date(2020, 1, 25)}
  today={new Date()}
  onDateSet={date => {console.log('date set', date);}}
  title="Demo datepicker" />
```

### Basic Customization

#### No header
```js
import DatePicker from 'react-calendar-toolkit';

<DatePicker
  showHeader={false}
  onDateSet={date => {console.log('date set', date);}} />
```

#### Disable weekend highlight
```js
import DatePicker from 'react-calendar-toolkit';

<DatePicker
  highlightWeekends={false}
  onDateSet={date => {console.log('date set', date);}}/>
```

#### With custom locale

```js
import locale from 'date-fns/esm/locale/ru';
import DatePicker from 'react-calendar-toolkit';

<DatePicker
  dateFnsLocale={locale}
  onDateSet={date => {console.log('date set', date);}} />
```
You can provided any included ``date-fns`` locale. Or create a [custom one](https://date-fns.org/v2.9.0/docs/I18n-Contribution-Guide#adding-a-new-locale). First day of the week is taken from locale object, `locale.options.weekStartsOn`.

#### Disable and highlight dates
```js
import {isSameDay} from 'date-fns'
import DatePicker from 'react-calendar-toolkit';

const disableWeekends = ({isWeekend, precision}) => {
  // NB precision check, otherWise all months will be disabled in Month Calendar view
  return precision==='day' && isWeekend
};

const highlightDate = ({date, precision}) => {
  return isSameDay(date, new Date(2020, 0, 7))
};

<DatePicker
  disableDate={disableWeekends}
  highlightDate={highlightDate}
  onDateSet={date => {console.log('date set', date);}} />
```
You can disable (custom style and non-clickable) or highlight (custom style) any rendered date.

#### Define minimal precision of `Calendar`

Setting `minPrecision` prop allows to define what kind of date user is able to select. E. g. if `minPrecision === 'month''`, user can select only between _months_ and _years_. 

```js
import DatePicker from 'react-calendar-toolkit';

<DatePicker
  minPrecision="month"
  onDateSet={date => {console.log('date set', date);}} />
```

```js
import DatePicker from 'react-calendar-toolkit';

<DatePicker
      minPrecision="year"
      startDate={new Date(1990, 0, 1)}
      endDate={new Date(2020, 1, 25)}
      onDateSet={date => {console.log('date set', date);}} />
```

### UI customization
You can override wrapping element or className of `Datepicker` with `wrapWith` prop, which expects React.Element or DOM node. 

#### Wrap Datepicker with custom component

`Datepicker` `wrapWith` component wraps it with provided `DOM node` or `React.Element`. ALso in Default UI it's used to set CSS variables with `useThemePostCSS` hook, otherwise CSS variables will be undefined.

```js
import React, {useRef} from 'react';
import DatePicker, {useThemePostCSS} from 'react-calendar-toolkit';

const style = {
  fontFamily: 'sans-serif',
  width: '260px',
  border: '2px dashed pink',
};

const CustomComponent = props => {

  /** Hook to set style variables from Theme Context */
  const [ref] = useThemePostCSS();
  return (
    <div
      ref={ref}
      style={style}
      aria-label={props.title}
      role="dialog">
      {props.children}
    </div>
  );
};

<DatePicker
  onDateSet={date => {console.log('date set', date);}}
  minPrecision="day"
  wrapWith={CustomComponent}
  title="Demo datepicker" />
```

#### Default wrapper
```js { "file": "./../../../../src/components/visual/Datepicker/DatepickerWrapper.js" }
```

See **Provide custom UI** section for more info.