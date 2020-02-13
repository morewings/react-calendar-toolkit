import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {selectors} from 'features/datepicker';
import config from 'utils/config';
import {getIsSameMonth, getMonths} from 'utils/dateUtils';
import Month from 'components/visual/Month';

const SelectorMonth = ({wrapperElement, wrapperClassname, onDateSet}) => {
  const selectedTimestamp = useSelector(selectors.getSelectedTimestamp);
  const todayTimestamp = useSelector(selectors.getTodayTimestamp);
  const months = getMonths(selectedTimestamp);
  const handleDateSet = useCallback(
    date => {
      onDateSet(date);
    },
    [onDateSet]
  );
  const Wrapper = wrapperElement;
  return (
    <Wrapper className={wrapperClassname}>
      {months.map(({name, date}) => (
        <Month
          disabled={false}
          date={date}
          onSetMonth={handleDateSet}
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
  onDateSet: PropTypes.func.isRequired,
};

SelectorMonth.defaultProps = {
  wrapperClassname: 'month-grid-wrapper',
  wrapperElement: 'div',
};

export default SelectorMonth;
