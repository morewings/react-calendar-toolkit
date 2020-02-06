import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {getTime} from 'date-fns';
import {actionTypes} from 'features/datepicker';
import DatepickerWrapper from 'components/visual/Datepicker';
import Header from 'components/Header';
import MonthStepper from 'components/DateSelector';
import DayGrid from 'components/DayGrid';

const DatePicker = ({date}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actionTypes.SET_DATE,
      payload: {
        date: getTime(date),
        precision: 'day',
      },
    });
  }, [date, dispatch]);
  return (
    <DatepickerWrapper>
      <Header />
      <MonthStepper />
      <DayGrid />
    </DatepickerWrapper>
  );
};

DatePicker.propTypes = {
  date: PropTypes.instanceOf(Date),
};

DatePicker.defaultProps = {
  date: new Date(2020, 1, 1),
};

export default DatePicker;
