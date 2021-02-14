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
import Clock from 'lib/components/logic/Clock';
import DatepickerWrapper from 'lib/components/visual/Datepicker';
import HeaderUI from 'lib/components/visual/Header';
import SelectorVisual from 'lib/components/visual/Selector';
import Day from 'lib/components/visual/Day';
import Month from 'lib/components/visual/Month';
import Year from 'lib/components/visual/Year';
import Weekdays from 'lib/components/visual/Weekdays';
import ClockUI from 'lib/components/visual/Clock';
import useLogic from './useLogic';

const Datepicker = ({
  initialDate,
  today,
  showHeader,
  title,
  minPrecision,
  onDateSet,
  renderDayAs,
  dayCalendarClassName,
  renderMonthAs,
  monthCalendarClassName,
  renderYearAs,
  yearCalendarClassName,
  renderWeekdaysAs,
  startDate,
  endDate,
  disableDate,
  highlightWeekends,
  renderHeaderAs,
  renderSelectorAs,
  highlightDate,
  wrapperClassName,
  renderClockAs,
}) => {
  const {
    state: {selectedTimestamp, todayTimestamp, visibleTimestamp, precision},
  } = useDatepickerContext();

  const hasInitialValues = useHasInitialValues();

  const {handleDateSet} = useLogic(onDateSet, minPrecision);

  useSetInitialValues({initialDate, today, minPrecision});

  const WeekdaysComponent = renderWeekdaysAs;

  const weekDayNames = useWeekDayNames();

  return (
    hasInitialValues && (
      <DatepickerWrapper
        className={wrapperClassName || undefined}
        title={title}>
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
        {(precision === 'hour' || precision === 'minute') && (
          <Clock
            renderAs={renderClockAs}
            precision={precision}
            onDateSet={handleDateSet}
            selectedTimestamp={selectedTimestamp}
            visibleTimestamp={visibleTimestamp}
            startDate={startDate}
            endDate={endDate}
          />
        )}
        {precision === 'day' && (
          <Fragment>
            <WeekdaysComponent names={weekDayNames} />
            <Calendar
              precision="day"
              highlightWeekends={highlightWeekends}
              wrapperClassName={dayCalendarClassName}
              renderAs={renderDayAs}
              disableDate={disableDate}
              highlightDate={highlightDate}
              selectedTimestamp={selectedTimestamp}
              visibleTimestamp={visibleTimestamp}
              todayTimestamp={todayTimestamp}
              onDateSet={handleDateSet}
              onDateSet2={onDateSet}
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
            wrapperClassName={monthCalendarClassName}
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
            wrapperClassName={yearCalendarClassName}
            renderAs={renderYearAs}
            selectedTimestamp={selectedTimestamp}
            visibleTimestamp={visibleTimestamp}
            todayTimestamp={todayTimestamp}
            onDateSet={handleDateSet}
            startDate={startDate}
            endDate={endDate}
          />
        )}
      </DatepickerWrapper>
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
  minPrecision: PropTypes.oneOf(['year', 'month', 'day', 'hour', 'minute']),
  /** Callback when user clicks selected date */
  onDateSet: PropTypes.func.isRequired,
  /** Override __Datepicker__ wrapper classname. */
  wrapperClassName: PropTypes.string,
  /** Define component which renders __day__ entry. */
  renderDayAs: PropTypes.elementType,
  /** Override __Day calendar__ wrapping class name. */
  dayCalendarClassName: PropTypes.string,
  /** Define component which renders __month__ entry. */
  renderMonthAs: PropTypes.elementType,
  /** Override __Month calendar__ wrapping class name */
  monthCalendarClassName: PropTypes.string,
  /** Define component which renders __year__ entry. */
  renderYearAs: PropTypes.elementType,
  /** Override __Year calendar__ wrapping class name */
  yearCalendarClassName: PropTypes.string,
  /** Define component which renders __Clock__. */
  renderClockAs: PropTypes.elementType,
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
  wrapperClassName: '',
  showHeader: true,
  title: '',
  minPrecision: 'day',
  renderDayAs: Day,
  dayCalendarClassName: '',
  renderMonthAs: Month,
  monthCalendarClassName: '',
  renderYearAs: Year,
  yearCalendarClassName: '',
  renderClockAs: ClockUI,
  renderWeekdaysAs: Weekdays,
  renderHeaderAs: HeaderUI,
  renderSelectorAs: SelectorVisual,
  disableDate: ({isWeekend, precision, date}) => false,
  highlightDate: ({isWeekend, precision, date}) => false,
  highlightWeekends: true,
};

export default Datepicker;
