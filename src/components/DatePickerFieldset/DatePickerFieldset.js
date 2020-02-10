/*eslint-disable*/
import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {selectors as modalSelectors, actionTypes} from 'features/modal';
import DatePicker from 'components/DatePicker';
import Placement from './Placement';
import Input from './Input';
import Modal from './Modal';
import {Fieldset, Popover} from 'components/visual/Fieldset';

const DatePickerFieldset = props => {
  const dispatch = useDispatch();
  const showDatepicker = useSelector(modalSelectors.getShowDatepicker);
  const mode = 'popover';
  const InputWrapper = props.mode === 'popover' ? Popover : Modal;
  return (
    <Fieldset>
      <Input />
      {showDatepicker && <InputWrapper><DatePicker showHeader={false} {...props} /></InputWrapper>}
    </Fieldset>
  );
};

DatePickerFieldset.propTypes = {};

DatePickerFieldset.defaultProps = {
  mode: 'modal',
};

export default DatePickerFieldset;
