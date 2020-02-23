```js noeditor
import DatePicker from 'react-calendar-toolkit';

const style = {
  color: 'black',
  textAlign: 'center',
  padding: '8px 0',
  border: '2px solid lightGray',
  margin: '2px'
};

const styleCalendar = {
  ...style,
  height: '245px'
};

const styleHeader = {
  ...style,
  height: '105px'
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
    wrapDaysWith={() => <CustomComponent style={styleCalendar} title="<Calendar />" />}
    wrapWeekDaysWith={() => <CustomComponent style={style} title="<Weekdays />" />}
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
  <div style={{marginLeft: '30px'}}>
    <DatePicker
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
  onDateSet={
    date => {
      console.log('date set', date);
    }}
  title="Demo datepicker" />
```

### Calendar views and precision

``year > month > day``

Datepicker toolkit architecture introduces concepts of __precision__ and __calendar__. 

Precision defines accuracy of date being selected. E.g. if `props.precision === 'month'` user can select between only month entries. Also only year and month calendars are available with this setting. 

Calendar is a collection of date entries (year, month or day). Each entry (can be React Component or DOM node)  receives corresponding `Date` object and ``onDateSet`` props. Each Calendar has corresponding precision.

![Selector structure](selector-structure.png)

User can switch "downwards" (from bigger to smaller unit) by clicking __year__ or __month__ on Calendar. If target precision was met, e. g. user click year entry when `props.precision === 'year'` `onDateSet` callback is triggered.
User can switch "downwards" and "upwards" by using Selector.

### Basic Customization

#### No header
```js
import DatePicker from 'react-calendar-toolkit';

<DatePicker
  showHeader={false}
  onDateSet={
    date => {
      console.log('date set', date);
    }} />
```

#### Disable weekend highlight
```js
import DatePicker from 'react-calendar-toolkit';

<DatePicker
  highlightWeekends={false}
  onDateSet={
    date => {
      console.log('date set', date);
    }} />
```

#### With custom locale
```js
import locale from 'date-fns/esm/locale/en-US';
import DatePicker from 'react-calendar-toolkit';

<DatePicker
  dateFnsLocale={locale}
  onDateSet={
    date => {
      console.log('date set', date);
    }} />
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
  onDateSet={
    date => {
      console.log('date set', date);
    }} />
```
You can disable (custom style and non-clickable) or highlight (custom style) any rendered date.

### UI customization
You can override wrapping element or className of Datepicker with `wrapWith` prop, which expects React.Element, DOM node or className. See Visual customization section for more info.