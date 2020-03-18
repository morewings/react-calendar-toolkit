import React, {useCallback, Fragment} from 'react';
import PropTypes from 'prop-types';
import {convertToDate} from 'utils/dateUtils';
import config from 'utils/config';
import {useDatePickerContext, useDatePickerActions} from 'features/datepicker';
import Calendar from 'components/logic/Calendar';
import WeekDays from 'components/logic/Weekdays';
import Selector from 'components/logic/Selector';
import DatepickerWrapper from 'components/visual/Datepicker';
import Header from 'components/visual/Header';
import SelectorVisual from 'components/visual/Selector';
import Day, {DayGrid} from 'components/visual/Day';
import Month, {MonthGrid} from 'components/visual/Month';
import Year, {YearGrid} from 'components/visual/Year';
import WeekDay, {WeekDayGrid} from 'components/visual/WeekDay';
import useHasInitialValues from 'utils/useHasInitialValues';
import useSetInitialValues from 'utils/useSetInitialValues';

const getNextPrecision = (precisionEnum, currentPrecision) => {
  const currentIndex = precisionEnum.indexOf(currentPrecision);
  return precisionEnum[currentIndex + 1];
};

const limitPrecision = (precisionEnum, minPrecision) => {
  const currentIndex = precisionEnum.indexOf(minPrecision);
  return precisionEnum.slice(0, currentIndex + 1);
};

const DatePicker = ({
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
  renderWeekDayAs,
  wrapWeekDaysWith,
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
  } = useDatePickerContext();

  const {setPrecision, setVisibility, setDate} = useDatePickerActions();

  const hasInitialValues = useHasInitialValues();

  const datepickerPrecisions = limitPrecision(
    config.supportedPrecisions,
    minPrecision
  );
  const nextPrecision = getNextPrecision(datepickerPrecisions, precision);

  // TODO: refactor to hook
  const handleDateSet = useCallback(
    date => {
      precision === minPrecision && onDateSet(date);
      precision === minPrecision && setDate(date);
      setVisibility(date);
      nextPrecision && setPrecision(nextPrecision);
    },
    [
      minPrecision,
      nextPrecision,
      onDateSet,
      precision,
      setDate,
      setPrecision,
      setVisibility,
    ]
  );

  useSetInitialValues({initialDate, today, minPrecision});

  const Wrapper = wrapWith;
  const HeaderUI = renderHeaderAs;
  const SelectorUI = renderSelectorAs;

  return (
    hasInitialValues && (
      <Wrapper title={title}>
        {showHeader && (
          <HeaderUI
            title={title}
            todayDate={convertToDate(todayTimestamp)}
            selectedDate={convertToDate(selectedTimestamp)}
          />
        )}
        <Selector
          renderAs={props => <SelectorUI precision={precision} {...props} />}
          selectedTimestamp={selectedTimestamp}
          todayTimestamp={todayTimestamp}
          visibleTimestamp={visibleTimestamp}
          startDate={startDate}
          endDate={endDate}
        />
        {precision === 'day' && (
          <Fragment>
            <WeekDays renderAs={renderWeekDayAs} wrapWith={wrapWeekDaysWith} />
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
  /** Define component which renders __week day__ entry. */
  renderWeekDayAs: PropTypes.elementType,
  /** Define component which wraps __week day__ entry. */
  wrapWeekDaysWith: PropTypes.elementType,
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

DatePicker.propTypes = propTypes;

DatePicker.defaultProps = {
  initialDate: new Date(2020, 0, 6),
  startDate: new Date(2020, 0, 1),
  endDate: new Date(2020, 1, 25),
  today: new Date(),
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
  renderWeekDayAs: WeekDay,
  wrapWeekDaysWith: WeekDayGrid,
  renderHeaderAs: Header,
  renderSelectorAs: SelectorVisual,
  disableDate: ({isWeekend, precision, date}) => false,
  highlightDate: ({isWeekend, precision, date}) => false,
  highlightWeekends: true,
};

export default DatePicker;
