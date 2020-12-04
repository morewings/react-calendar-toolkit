import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {
  useDatepickerContext,
  useHasInitialValues,
  useSetInitialValues,
} from 'lib/features/datepicker';
import {useWeekDayNames} from 'lib/features/locale';
import Calendar from 'lib/components/logic/Calendar';
import Selector from 'lib/components/logic/Selector';
import Header from 'lib/components/logic/Header';
import DatepickerWrapper from 'lib/components/visual/Datepicker';
import HeaderUI from 'lib/components/visual/Header';
import SelectorVisual from 'lib/components/visual/Selector';
import Day, {DayGrid} from 'lib/components/visual/Day';
import Month, {MonthGrid} from 'lib/components/visual/Month';
import Year, {YearGrid} from 'lib/components/visual/Year';
import Weekdays from 'lib/components/visual/Weekdays';
import useLogic from './useLogic';

const Datepicker = ({
  initialDate,
  today,
  showHeader,
  title,
  minPrecision,
  onDateSet,
  renderDayAs,
  wrapDaysWith,
  renderMonthAs,
  wrapMonthWith,
  renderYearAs,
  wrapYearWith,
  renderWeekdaysAs,
  startDate,
  endDate,
  disableDate,
  highlightWeekends,
  renderHeaderAs,
  renderSelectorAs,
  highlightDate,
  wrapWith,
}) => {
  const {
    state: {selectedTimestamp, todayTimestamp, visibleTimestamp, precision},
  } = useDatepickerContext();

  const hasInitialValues = useHasInitialValues();

  const {handleDateSet} = useLogic(onDateSet, minPrecision);

  useSetInitialValues({initialDate, today, minPrecision});

  const Wrapper = wrapWith;

  const WeekdaysComponent = renderWeekdaysAs;

  const weekDayNames = useWeekDayNames();

  return (
    hasInitialValues && (
      <Wrapper title={title}>
        {showHeader && <Header renderAs={renderHeaderAs} title={title} />}
        <Selector
          precision={precision}
          renderAs={renderSelectorAs}
          selectedTimestamp={selectedTimestamp}
          todayTimestamp={todayTimestamp}
          visibleTimestamp={visibleTimestamp}
          startDate={startDate}
          endDate={endDate}
        />
        {precision === 'day' && (
          <Fragment>
            <WeekdaysComponent names={weekDayNames} />
            <Calendar
              precision="day"
              highlightWeekends={highlightWeekends}
              wrapWith={wrapDaysWith}
              renderAs={renderDayAs}
              disableDate={disableDate}
              highlightDate={highlightDate}
              selectedTimestamp={selectedTimestamp}
              visibleTimestamp={visibleTimestamp}
              todayTimestamp={todayTimestamp}
              onDateSet={handleDateSet}
              startDate={startDate}
              endDate={endDate}
            />
          </Fragment>
        )}
        {precision === 'month' && (
          <Calendar
            precision="month"
            disableDate={disableDate}
            highlightDate={highlightDate}
            wrapWith={wrapMonthWith}
            renderAs={renderMonthAs}
            selectedTimestamp={selectedTimestamp}
            visibleTimestamp={visibleTimestamp}
            todayTimestamp={todayTimestamp}
            onDateSet={handleDateSet}
            startDate={startDate}
            endDate={endDate}
          />
        )}
        {precision === 'year' && (
          <Calendar
            precision="year"
            disableDate={disableDate}
            highlightDate={highlightDate}
            wrapWith={wrapYearWith}
            renderAs={renderYearAs}
            selectedTimestamp={selectedTimestamp}
            visibleTimestamp={visibleTimestamp}
            todayTimestamp={todayTimestamp}
            onDateSet={handleDateSet}
            startDate={startDate}
            endDate={endDate}
          />
        )}
      </Wrapper>
    )
  );
};

export const propTypes = {
  /** Set initial selected date when component renders. */
  initialDate: PropTypes.instanceOf(Date),
  /** Set today date. */
  today: PropTypes.instanceOf(Date),
  /** Set start date of calendar. */
  startDate: PropTypes.instanceOf(Date),
  /** Set end date of calendar. */
  endDate: PropTypes.instanceOf(Date),
  /** Flag to show or hide header. */
  showHeader: PropTypes.bool,
  /** Set title of calendar show in Header. */
  title: PropTypes.string,
  /** Set minimum precision (measuring unit) of calendar. Possible values: 'day', 'month', 'year'. */
  minPrecision: PropTypes.oneOf(['year', 'month', 'day']),
  /** Callback when user clicks selected date */
  onDateSet: PropTypes.func.isRequired,
  /** Define component which wraps __Datepicker__. */
  wrapWith: PropTypes.elementType,
  /** Define component which renders __day__ entry. */
  renderDayAs: PropTypes.elementType,
  /** Define component which wraps __day__ entry. */
  wrapDaysWith: PropTypes.elementType,
  /** Define component which renders __month__ entry. */
  renderMonthAs: PropTypes.elementType,
  /** Define component which wraps __month__ entry. */
  wrapMonthWith: PropTypes.elementType,
  /** Define component which renders __year__ entry. */
  renderYearAs: PropTypes.elementType,
  /** Define component which wraps __year__ entry. */
  wrapYearWith: PropTypes.elementType,
  /** Define component which renders __week days__ row inside day calendar. */
  renderWeekdaysAs: PropTypes.elementType,
  /** Define component which renders __Header__. */
  renderHeaderAs: PropTypes.elementType,
  /** Define component which renders __Precision selector__. */
  renderSelectorAs: PropTypes.elementType,
  /** Function which decides if date should be __disabled__. It gets `isWeekend`, `precision` and `date` and outputs Boolean.
   * `({isWeekend, precision, date}) => false`
   * */
  disableDate: PropTypes.func,
  /** Function which decides if date should be __highlighted__. It gets `isWeekend`, `precision` and `date` and outputs Boolean.
   * `({isWeekend, precision, date}) => false`
   * */
  highlightDate: PropTypes.func,
  /** Flag to enable __weekend highlight__ prop. */
  highlightWeekends: PropTypes.bool,
  /** date-fns locale object. Defaults to english */
  dateFnsLocale: PropTypes.shape({}), // eslint-disable-line react/require-default-props
  /** Theme object to customize style for UI components */
  theme: PropTypes.shape({}), // eslint-disable-line react/require-default-props
};

Datepicker.propTypes = propTypes;

Datepicker.defaultProps = {
  initialDate: new Date(2020, 0, 6),
  startDate: new Date(2020, 0, 1),
  endDate: new Date(2020, 1, 25),
  today: new Date(Date.now()),
  showHeader: true,
  title: '',
  minPrecision: 'day',
  wrapWith: DatepickerWrapper,
  renderDayAs: Day,
  wrapDaysWith: DayGrid,
  renderMonthAs: Month,
  wrapMonthWith: MonthGrid,
  renderYearAs: Year,
  wrapYearWith: YearGrid,
  renderWeekdaysAs: Weekdays,
  renderHeaderAs: HeaderUI,
  renderSelectorAs: SelectorVisual,
  disableDate: ({isWeekend, precision, date}) => false,
  highlightDate: ({isWeekend, precision, date}) => false,
  highlightWeekends: true,
};

export default Datepicker;
