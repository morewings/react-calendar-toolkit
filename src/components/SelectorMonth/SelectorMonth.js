import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {actionTypes, selectors} from 'features/datepicker';
import {getIsSameMonth, getMonths, getTime} from 'utils/dateUtils';
import Month from 'components/visual/Month';

const SelectorMonth = props => {
  const dispatch = useDispatch();
  const selectedTimestamp = useSelector(selectors.getSelectedTimestamp);
  const todayTimestamp = useSelector(selectors.getTodayTimestamp);
  const months = getMonths(selectedTimestamp);
  const setMonth = useCallback(
    date =>
      dispatch({
        type: actionTypes.SET_DATE,
        payload: {
          selectedTimestamp: getTime(date),
          precision: 'day',
        },
      }),
    [dispatch]
  );
  const Wrapper = props.wrapperElement;
  return (
    <Wrapper className={props.wrapperClassname}>
      {months.map(({name, date}) => (
        <Month
          disabled={false}
          date={date}
          onSetMonth={setMonth}
          isSameMonth={getIsSameMonth(date, todayTimestamp)}
          isSelected={getIsSameMonth(date, selectedTimestamp)}
          key={name}
          name={name}
        />
      ))}
    </Wrapper>
  );
};

SelectorMonth.propTypes = {
  wrapperClassname: PropTypes.string,
  wrapperElement: PropTypes.elementType,
};

SelectorMonth.defaultProps = {
  wrapperClassname: 'month-grid-wrapper',
  wrapperElement: 'div',
};

export default SelectorMonth;
