import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {getTime} from 'utils/dateUtils';
import {actionTypes, selectors} from 'features/datepicker';
import DatepickerWrapper from 'components/visual/Datepicker';
import Header from 'components/Header';
import MonthStepper from 'components/DateSelector';
import DayGrid from 'components/DayGrid';
import MonthGrid from 'components/MonthGrid';
import YearGrid from 'components/YearGrid';

const DatePicker = ({date, today}) => {
  const dispatch = useDispatch();
  const precision = useSelector(selectors.getPrecision);
  useEffect(() => {
    dispatch({
      type: actionTypes.SET_DATE,
      payload: {
        selectedTimestamp: getTime(date),
      },
    });
  }, [date, dispatch]);
  useEffect(() => {
    dispatch({
      type: actionTypes.SET_TODAY,
      payload: {
        todayTimestamp: getTime(today),
      },
    });
  }, [dispatch, today]);
  return (
    <DatepickerWrapper>
      <Header />
      <MonthStepper />
      {precision === 'day' && <DayGrid />}
      {precision === 'month' && <MonthGrid />}
      {precision === 'year' && <YearGrid />}
    </DatepickerWrapper>
  );
};

DatePicker.propTypes = {
  date: PropTypes.instanceOf(Date),
  today: PropTypes.instanceOf(Date),
};

DatePicker.defaultProps = {
  date: new Date(2020, 1, 1),
  today: new Date(),
};

export default DatePicker;
