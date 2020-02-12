import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {actionTypes, selectors} from 'features/datepicker';
import {getTime, getYears, getIsSameYear} from 'utils/dateUtils';
import Year, {YearWrapper} from 'components/visual/Year';

const SelectorYear = ({wrapperElement, wrapperClassname, onDateSet}) => {
  const dispatch = useDispatch();
  const selectedTimestamp = useSelector(selectors.getSelectedTimestamp);
  const todayTimestamp = useSelector(selectors.getTodayTimestamp);
  const years = getYears();
  const setYear = useCallback(
    date => {
      onDateSet();
      dispatch({
        type: actionTypes.SET_DATE,
        payload: {
          selectedTimestamp: getTime(date),
          precision: 'month',
        },
      });
    },
    [dispatch, onDateSet]
  );
  const Wrapper = wrapperElement;
  return (
    <Wrapper className={wrapperClassname}>
      {years.map(({yearNumber, date}) => (
        <Year
          disabled={false}
          date={date}
          onSetYear={setYear}
          isSameYear={getIsSameYear(date, todayTimestamp)}
          isSelected={getIsSameYear(date, selectedTimestamp)}
          key={yearNumber}
          yearNumber={yearNumber}
        />
      ))}
    </Wrapper>
  );
};

SelectorYear.propTypes = {
  wrapperClassname: PropTypes.string,
  wrapperElement: PropTypes.elementType,
  onDateSet: PropTypes.func.isRequired,
};

SelectorYear.defaultProps = {
  wrapperClassname: 'year-grid-wrapper',
  wrapperElement: YearWrapper,
};

export default SelectorYear;
