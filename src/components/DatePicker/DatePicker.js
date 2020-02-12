/*eslint-disable*/
import React, {useCallback, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {getTime} from 'utils/dateUtils';
import {actionTypes, selectors} from 'features/datepicker';
import DatepickerWrapper from 'components/visual/Datepicker';
import Header from 'components/Header';
import SelectorCombined from 'components/SelectorCombined';
import SelectorDay from 'components/SelectorDay';
import SelectorMonth from 'components/SelectorMonth';
import SelectorYear from 'components/SelectorYear';

const precisionEnum = ['year', 'month', 'day']

const DatePicker = ({
  date,
  today,
  wrapperElement,
  wrapperClassname,
  showHeader,
  title,
  minPrecision,
  onDateSet,
}) => {
  const dispatch = useDispatch();
  const precision = useSelector(selectors.getPrecision);
  const handleDateSet = useCallback(date => {
    precision === minPrecision && onDateSet(date)
  }, [precision]);
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
  useEffect(() => {
    console.log('rerender')
  }, [])
  const Wrapper = wrapperElement;
  return (
    <Wrapper className={wrapperClassname}>
      {showHeader && <Header title={title} />}
      <SelectorCombined />
      {precision === 'day' && <SelectorDay onDateSet={handleDateSet} />}
      {precision === 'month' && <SelectorMonth onDateSet={handleDateSet} />}
      {precision === 'year' && <SelectorYear onDateSet={handleDateSet} />}
    </Wrapper>
  );
};

DatePicker.propTypes = {
  date: PropTypes.instanceOf(Date),
  today: PropTypes.instanceOf(Date),
  wrapperClassname: PropTypes.string,
  wrapperElement: PropTypes.elementType,
  showHeader: PropTypes.bool,
  title: PropTypes.string,
  minPrecision: PropTypes.oneOf(precisionEnum),
  onDateSet: PropTypes.func,
};

DatePicker.defaultProps = {
  date: new Date(2020, 1, 1),
  today: new Date(),
  wrapperClassname: 'datepicker-wrapper',
  wrapperElement: DatepickerWrapper,
  showHeader: true,
  title: '',
  minPrecision: 'day',
};

export default DatePicker;
