import ModalReducer, {initialState} from './ModalReducer';
import {TOGGLE_DATEPICKER} from './actionTypes';

describe('ModalReducer', () => {
  it('has default state', () => {
    expect(ModalReducer(initialState, {})).toMatchSnapshot();
  });

  it(`handles ${TOGGLE_DATEPICKER} action`, () => {
    const falseAction = {
      type: TOGGLE_DATEPICKER,
      payload: false,
    };

    const trueAction = {
      type: TOGGLE_DATEPICKER,
      payload: true,
    };

    expect(ModalReducer(initialState, falseAction)).toMatchSnapshot();
    expect(ModalReducer(initialState, trueAction)).toMatchSnapshot();
  });
});
