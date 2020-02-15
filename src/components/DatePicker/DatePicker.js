import React, {useCallback, useEffect, Fragment} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import locale from 'date-fns/esm/locale/ru';
import {
  convertToTimestamp,
  getDays,
  getMonths,
  getYears,
  getWeekDayNames,
  formatDateWithLocale,
} from 'utils/dateUtils';
import config from 'utils/config';
import {actionTypes, selectors} from 'features/datepicker';
import DatepickerWrapper from 'components/visual/Datepicker';
import Header from 'components/visual/Header';
import Selector from 'components/Selector';
import Grid from 'components/Grid';
import WeekDays from 'components/Weekdays';
import Day, {DayGrid} from 'components/visual/Day';
import Month, {MonthGrid} from 'components/visual/Month';
import Year, {YearGrid} from 'components/visual/Year';
import WeekDay, {WeekDayGrid} from 'components/visual/WeekDay';
import DateSelector from 'components/visual/DateSelector';

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
  wrapperElement,
  wrapperClassname,
  showHeader,
  title,
  minPrecision,
  onDateSet,
  dayComponent,
  dayGridComponent,
  monthComponent,
  monthGridComponent,
  yearComponent,
  yearGridComponent,
  weekDayComponent,
  weekDayGridComponent,
  startDate,
  endDate,
  disableDate,
  highlightWeekends,
  dateFnsLocale,
  headerComponent,
  selectorComponent,
  highlightDate,
}) => {
  const dispatch = useDispatch();
  const selectedTimestamp = useSelector(selectors.getSelectedTimestamp);
  const todayTimestamp = useSelector(selectors.getTodayTimestamp);
  const precision = useSelector(selectors.getPrecision);
  const datepickerPrecisions = limitPrecision(
    config.supportedPrecisions,
    minPrecision
  );
  const handleDateSet = useCallback(
    date => {
      precision === minPrecision && onDateSet(date);
      const nextPrecision = getNextPrecision(datepickerPrecisions, precision);
      dispatch({
        type: actionTypes.SET_DATE,
        payload: {
          selectedTimestamp: convertToTimestamp(date),
        },
      });
      nextPrecision &&
        dispatch({
          type: actionTypes.SET_PRECISION,
          payload: nextPrecision,
        });
    },
    [datepickerPrecisions, dispatch, minPrecision, onDateSet, precision]
  );
  const formatDate = formatDateWithLocale({locale: dateFnsLocale});
  useEffect(() => {
    dispatch({
      type: actionTypes.SET_DATE,
      payload: {
        selectedTimestamp: convertToTimestamp(initialDate),
      },
    });
  }, [initialDate, dispatch]);
  useEffect(() => {
    dispatch({
      type: actionTypes.SET_TODAY,
      payload: {
        todayTimestamp: convertToTimestamp(today),
      },
    });
    dispatch({
      type: actionTypes.SET_PRECISION,
      payload: minPrecision,
    });
  }, [dispatch, minPrecision, today]);
  const Wrapper = wrapperElement;
  const DayVisual = dayComponent;
  const DayGridVisual = dayGridComponent;
  const MonthVisual = monthComponent;
  const MonthGridVisual = monthGridComponent;
  const YearVisual = yearComponent;
  const YearGridVisual = yearGridComponent;
  const WeekDayVisual = weekDayComponent;
  const WeekDayGridVisual = weekDayGridComponent;
  const HeaderVisual = headerComponent;
  const SelectorComponent = selectorComponent;
  return (
    <Wrapper className={wrapperClassname}>
      {showHeader && (
        <HeaderVisual
          formatDate={formatDate}
          title={title}
          todayTimestamp={todayTimestamp}
          selectedTimestamp={selectedTimestamp}
        />
      )}
      <Selector
        selectorComponent={props => (
          <SelectorComponent formatDate={formatDate} {...props} />
        )}
        selectedTimestamp={selectedTimestamp}
        todayTimestamp={todayTimestamp}
      />
      {precision === 'day' && (
        <Fragment>
          <WeekDays
            items={getWeekDayNames(dateFnsLocale)}
            visualComponent={WeekDayVisual}
            wrapperComponent={WeekDayGridVisual}
          />
          <Grid
            precision="day"
            highlightWeekends={highlightWeekends}
            wrapperComponent={DayGridVisual}
            disableDate={disableDate}
            highlightDate={highlightDate}
            visualComponent={props => (
              <DayVisual formatDate={formatDate} {...props} />
            )}
            selectedTimestamp={selectedTimestamp}
            todayTimestamp={todayTimestamp}
            items={getDays(dateFnsLocale, selectedTimestamp)}
            onDateSet={handleDateSet}
            startDate={startDate}
            endDate={endDate}
          />
        </Fragment>
      )}
      {precision === 'month' && (
        <Grid
          precision="month"
          disableDate={disableDate}
          highlightDate={highlightDate}
          wrapperComponent={MonthGridVisual}
          visualComponent={props => (
            <MonthVisual formatDate={formatDate} {...props} />
          )}
          selectedTimestamp={selectedTimestamp}
          todayTimestamp={todayTimestamp}
          items={getMonths(dateFnsLocale, selectedTimestamp)}
          onDateSet={handleDateSet}
          startDate={startDate}
          endDate={endDate}
        />
      )}
      {precision === 'year' && (
        <Grid
          precision="year"
          disableDate={disableDate}
          highlightDate={highlightDate}
          wrapperComponent={YearGridVisual}
          visualComponent={props => (
            <YearVisual formatDate={formatDate} {...props} />
          )}
          selectedTimestamp={selectedTimestamp}
          todayTimestamp={todayTimestamp}
          items={getYears(startDate, endDate)}
          onDateSet={handleDateSet}
          startDate={startDate}
          endDate={endDate}
        />
      )}
    </Wrapper>
  );
};

DatePicker.propTypes = {
  initialDate: PropTypes.instanceOf(Date),
  today: PropTypes.instanceOf(Date),
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  showHeader: PropTypes.bool,
  title: PropTypes.string,
  minPrecision: PropTypes.oneOf(config.supportedPrecisions),
  onDateSet: PropTypes.func.isRequired,
  wrapperClassname: PropTypes.string,
  wrapperElement: PropTypes.elementType,
  dayComponent: PropTypes.elementType,
  dayGridComponent: PropTypes.elementType,
  monthComponent: PropTypes.elementType,
  monthGridComponent: PropTypes.elementType,
  yearComponent: PropTypes.elementType,
  yearGridComponent: PropTypes.elementType,
  weekDayComponent: PropTypes.elementType,
  weekDayGridComponent: PropTypes.elementType,
  headerComponent: PropTypes.elementType,
  selectorComponent: PropTypes.elementType,
  disableDate: PropTypes.func,
  highlightDate: PropTypes.func,
  highlightWeekends: PropTypes.bool,
  dateFnsLocale: PropTypes.shape({}),
};

DatePicker.defaultProps = {
  initialDate: new Date(2020, 0, 6),
  startDate: new Date(2020, 0, 1),
  endDate: new Date(2020, 1, 25),
  today: new Date(),
  showHeader: true,
  title: '',
  minPrecision: 'day',
  wrapperClassname: '',
  wrapperElement: DatepickerWrapper,
  dayComponent: Day,
  dayGridComponent: DayGrid,
  monthComponent: Month,
  monthGridComponent: MonthGrid,
  yearComponent: Year,
  yearGridComponent: YearGrid,
  weekDayComponent: WeekDay,
  weekDayGridComponent: WeekDayGrid,
  headerComponent: Header,
  selectorComponent: DateSelector,
  disableDate: ({isWeekend, precision, date}) => false,
  highlightDate: ({isWeekend, precision, date}) => false,
  highlightWeekends: true,
  dateFnsLocale: locale,
};

export default DatePicker;
