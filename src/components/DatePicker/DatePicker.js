import React, {useEffect} from 'react';
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

const DatePicker = ({date, today, wrapperElement, wrapperClassname}) => {
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
  const Wrapper = wrapperElement;
  return (
    <Wrapper className={wrapperClassname}>
      <Header />
      <SelectorCombined />
      {precision === 'day' && <SelectorDay />}
      {precision === 'month' && <SelectorMonth />}
      {precision === 'year' && <SelectorYear />}
    </Wrapper>
  );
};

DatePicker.propTypes = {
  date: PropTypes.instanceOf(Date),
  today: PropTypes.instanceOf(Date),
  wrapperClassname: PropTypes.string,
  wrapperElement: PropTypes.elementType,
};

DatePicker.defaultProps = {
  date: new Date(2020, 1, 1),
  today: new Date(),
  wrapperClassname: 'datepicker-wrapper',
  wrapperElement: DatepickerWrapper,
};

export default DatePicker;
