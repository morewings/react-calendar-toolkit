/*eslint-disable*/
import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {actionTypes, selectors} from 'features/datepicker';
import {selectors as modalSelectors, actionTypes as modalActionTypes} from 'features/modal';
import InputVisual from 'components/visual/Fieldset';

const Input = props => {
  const dispatch = useDispatch();
  const selectedTimestamp = useSelector(selectors.getSelectedTimestamp);
  const todayTimestamp = useSelector(selectors.getTodayTimestamp);
  const toggleDatepicker = useCallback(
    isVisible =>
      dispatch({
        type: modalActionTypes.TOGGLE_DATEPICKER,
        payload: isVisible,
      }),
    [dispatch]
  );
  const InputComponent = props.input;
  return (
    <InputComponent value={selectedTimestamp} onToggleDatepicker={toggleDatepicker} />
  )
};

Input.defaultProps = {
  input: InputVisual
};

export default Input;