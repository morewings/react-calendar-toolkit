import React, {useCallback, useEffect, Fragment} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {getTime} from 'utils/dateUtils';
import config from 'utils/config';
import {actionTypes, selectors} from 'features/datepicker';
import DatepickerWrapper from 'components/visual/Datepicker';
import Header from 'components/Header';
import SelectorCombined from 'components/SelectorCombined';
import SelectorDay, {WeekDays} from 'components/SelectorDay';
import SelectorMonth from 'components/SelectorMonth';
import SelectorYear from 'components/SelectorYear';

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
}) => {
  const dispatch = useDispatch();
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
  return (
    <Wrapper className={wrapperClassname}>
      {showHeader && <Header title={title} />}
      <SelectorCombined />
      {precision === 'day' && (
        <Fragment>
          <WeekDays />
          <SelectorDay onDateSet={handleDateSet} />
        </Fragment>
      )}
      {precision === 'month' && <SelectorMonth onDateSet={handleDateSet} />}
      {precision === 'year' && <SelectorYear onDateSet={handleDateSet} />}
    </Wrapper>
  );
};

DatePicker.propTypes = {
  initialDate: PropTypes.instanceOf(Date),
  today: PropTypes.instanceOf(Date),
  wrapperClassname: PropTypes.string,
  wrapperElement: PropTypes.elementType,
  showHeader: PropTypes.bool,
  title: PropTypes.string,
  minPrecision: PropTypes.oneOf(config.supportedPrecisions),
  onDateSet: PropTypes.func.isRequired,
};

DatePicker.defaultProps = {
  initialDate: new Date(2020, 1, 1),
  today: new Date(),
  wrapperClassname: 'datepicker-wrapper',
  wrapperElement: DatepickerWrapper,
  showHeader: true,
  title: '',
  minPrecision: 'day',
};

export default DatePicker;
