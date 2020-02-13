import React, {useCallback, useEffect, Fragment} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {getTime, getMonthDays, getMonths, getYears} from 'utils/dateUtils';
import config from 'utils/config';
import {actionTypes, selectors} from 'features/datepicker';
import DatepickerWrapper from 'components/visual/Datepicker';
import Header from 'components/Header';
import SelectorCombined from 'components/SelectorCombined';
import Selector from 'components/Selector';
import WeekDays from 'components/Weekdays';
import Day, {DayGrid} from 'components/visual/Day';
import Month, {MonthGrid} from 'components/visual/Month';
import Year, {YearGrid} from 'components/visual/Year';
import WeekDay, {WeekDayGrid} from 'components/visual/WeekDay';

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
          selectedTimestamp: getTime(date),
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
  useEffect(() => {
    dispatch({
      type: actionTypes.SET_DATE,
      payload: {
        selectedTimestamp: getTime(initialDate),
      },
    });
  }, [initialDate, dispatch]);
  useEffect(() => {
    dispatch({
      type: actionTypes.SET_TODAY,
      payload: {
        todayTimestamp: getTime(today),
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
  return (
    <Wrapper className={wrapperClassname}>
      {showHeader && <Header title={title} />}
      <SelectorCombined />
      {precision === 'day' && (
        <Fragment>
          <WeekDays
            visualComponent={WeekDayVisual}
            wrapperComponent={WeekDayGridVisual}
          />
          <Selector
            precision="day"
            wrapperComponent={DayGridVisual}
            visualComponent={props => (
              <DayVisual
                disabled={false} // TODO: add real disabled
                isHoliday={false} // TODO: add real holiday
                {...props}
              />
            )}
            selectedTimestamp={selectedTimestamp}
            todayTimestamp={todayTimestamp}
            items={getMonthDays(selectedTimestamp)}
            onDateSet={handleDateSet}
          />
        </Fragment>
      )}
      {precision === 'month' && (
        <Selector
          precision="month"
          wrapperComponent={MonthGridVisual}
          visualComponent={props => (
            <MonthVisual
              disabled={false} // TODO: add real disabled
              {...props}
            />
          )}
          selectedTimestamp={selectedTimestamp}
          todayTimestamp={todayTimestamp}
          items={getMonths(selectedTimestamp)}
          onDateSet={handleDateSet}
        />
      )}
      {precision === 'year' && (
        <Selector
          precision="year"
          wrapperComponent={YearGridVisual}
          visualComponent={props => (
            <YearVisual
              disabled={false} // TODO: add real disabled
              {...props}
            />
          )}
          selectedTimestamp={selectedTimestamp}
          todayTimestamp={todayTimestamp}
          items={getYears()}
          onDateSet={handleDateSet}
        />
      )}
    </Wrapper>
  );
};

DatePicker.propTypes = {
  initialDate: PropTypes.instanceOf(Date),
  today: PropTypes.instanceOf(Date),
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
  showHeader: PropTypes.bool,
  title: PropTypes.string,
  minPrecision: PropTypes.oneOf(config.supportedPrecisions),
  onDateSet: PropTypes.func.isRequired,
};

DatePicker.defaultProps = {
  initialDate: new Date(2020, 1, 1),
  today: new Date(),
  wrapperClassname: 'datepicker-wrapper', // TODO: move name to visual
  wrapperElement: DatepickerWrapper,
  dayComponent: Day,
  dayGridComponent: DayGrid,
  monthComponent: Month,
  monthGridComponent: MonthGrid,
  yearComponent: Year,
  yearGridComponent: YearGrid,
  weekDayComponent: WeekDay,
  weekDayGridComponent: WeekDayGrid,
  showHeader: true,
  title: '',
  minPrecision: 'day',
};

export default DatePicker;
