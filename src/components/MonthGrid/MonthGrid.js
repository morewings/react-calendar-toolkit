import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {actionTypes, selectors} from 'features/datepicker';
import {getIsSameMonth, getMonths, getTime} from 'utils/dateUtils';
import Month from 'components/visual/Month';
import './MonthGrid.scss';

const MonthGrid = () => {
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
  return (
    <div className="month-grid-wrapper">
      {months.map(({name, date}) => (
        <Month
          date={date}
          onSetMonth={setMonth}
          isSameMonth={getIsSameMonth(date, todayTimestamp)}
          isSelected={getIsSameMonth(date, selectedTimestamp)}
          key={name}
          name={name}
        />
      ))}
    </div>
  );
};

export default MonthGrid;
