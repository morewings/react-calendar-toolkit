import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {selectors} from 'features/datepicker';
import config from 'utils/config';
import {getYears, getIsSameYear} from 'utils/dateUtils';
import Year, {YearWrapper} from 'components/visual/Year';

const SelectorYear = ({wrapperElement, wrapperClassname, onDateSet}) => {
  const selectedTimestamp = useSelector(selectors.getSelectedTimestamp);
  const todayTimestamp = useSelector(selectors.getTodayTimestamp);
  const years = getYears();
  const handleDateSet = useCallback(
    date => {
      onDateSet(date);
    },
    [onDateSet]
  );
  const Wrapper = wrapperElement;
  return (
    <Wrapper className={wrapperClassname}>
      {years.map(({yearNumber, date}) => (
        <Year
          disabled={false}
          date={date}
          onSetYear={handleDateSet}
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
