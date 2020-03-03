`react-calendar-toolkit` (RCT) is a set of React Components capable of rendering various calendars, datepickers etc. There are many good datepickers on the market. Unfortunately, most of them are _style-opinionated_, so if you like logic of chosen datepicker, you are subscribing to the visual style of it. But your website or application style may be completely different. With RCT you don't have hack third-party CSS, you can write your own styled UI components and RCT will render them.
 

### Localization

You can use [any locale](https://date-fns.org/docs/I18n) from `date-fns` or [create custom one](https://date-fns.org/v2.10.0/docs/I18n-Contribution-Guide).

```js
import locale from 'date-fns/esm/locale/fr';
import DatePicker from 'react-calendar-toolkit';

<DatePicker
  dateFnsLocale={locale}
  title="Demo datepicker"
  onDateSet={
    date => {
      console.log('date set', date);
    }} />
```

### Calendar views and precision

``year > month > day``

```js noeditor
import Calendar from './src/components/logic/Calendar';
import {withLocaleContext} from './src/utils/localeContext';
import {convertToTimestamp} from './src/utils/dateUtils';
import MonthGrid from './src/components/visual/Month/MonthGrid.js';
import Month from './src/components/visual/Month/Month.js';
import Year from './src/components/visual/Year/Year.js';
import YearGrid from './src/components/visual/Year/YearGrid.js';
import DayGrid from './src/components/visual/Day/DayGrid.js';
import Day from './src/components/visual/Day/Day.js';


const WrappedCalendar = withLocaleContext(Calendar);

const props = {
  todayTimestamp: convertToTimestamp(new Date()),
  selectedTimestamp: convertToTimestamp(new Date(2020, 0, 6)),
  highlightDate: () => false,
  disableDate: () => false,
  startDate: new Date(2009, 0, 1),
  endDate: new Date(2029, 1, 25),
  onDateSet: () => {},
};

const style = {
  display: 'flex',
  fontFamily: 'sans-serif'
};

<div style={style}>
  <WrappedCalendar
    {...props}
    wrapWith={YearGrid}
    renderAs={Year}
    precision="year" />

  <WrappedCalendar
    {...props}
    wrapWith={MonthGrid}
    renderAs={Month}
    precision="month" />
  <div>
    <WrappedCalendar
      {...props}
      wrapWith={DayGrid}
      renderAs={Day}
      precision="day" />
  </div>
</div>
```

Datepicker toolkit architecture introduces concepts of __precision__ and __calendar__. 

**Precision** defines accuracy of date being selected. E.g. if `props.precision === 'month'` user can select between only month entries. Also only year and month calendars are available with this setting. 

**Calendar** is a collection of date entries (year, month or day). Each entry (can be React Component or DOM node)  receives corresponding `Date` object and ``onDateSet`` props. Each Calendar has corresponding precision. Calendar renders collection of date entries and wraps them with provived Component or DOM node.

#### Changing precision

User can switch "downwards" (from bigger to smaller unit) by clicking __year__ or __month__ entries on corresponding Calendar. If target precision was met, e. g. user click year entry when `props.minPrecision === 'year'` `onDateSet` callback is triggered. The value callback receives `Date` of the beginning of specified datetime precision, e. g.  when `props.minPrecision === 'month'` `onDateSet` `Date` value is 1st day of the month, when `props.minPrecision === 'year'` - Janurary 1st.

User also can switch "downwards" and "upwards" by using Selector.


![Selector structure](selector-structure.png)

### Custom UI components API

RCT uses [render props](https://reactjs.org/docs/render-props.html), decoupled from Calendar logic, to display visual UI. Date entry components (`Day`, `Month`, `Year`) receive `date` prop, which is `Date` object, containing the date to render. Also these components receive `onDateSet` prop, function expecting `Date` object to set as selected date (e. g. on click event) for the whole Calendar.

```js static
// date comes from the props
const handleClick = () => {
  onDateSet(date);
};
```

Date entry components can be wrapped with provided React Component or DOM node, see `wrapWith` props.

`Selector` visual component gets `incrementMonth` and `decrementMonth` props to set selected date plus or minus 1 month from selected. This props are bound to month stepper arrows. Also it gets `todayDate` and `selectedDate` props instead of just `date`, since it is not related to specific date.

`Header` visual component gets `todayDate` and `selectedDate` props for the same reasons as above. Also it gets `title` prop with the custom name of Datepicker. 

`Weekday` visual component gets just day name to render.


