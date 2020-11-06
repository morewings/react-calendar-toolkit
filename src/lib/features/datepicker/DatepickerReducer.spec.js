import DatepickerReducer, {initialState} from './DatepickerReducer';
import {
  SET_DATE,
  SET_TODAY,
  SET_PRECISION,
  SET_VISIBILITY,
} from './actionTypes';

describe('DatepickerReducer', () => {
  it('has default state', () => {
    expect(DatepickerReducer(initialState, {})).toMatchSnapshot();
  });

  it(`handles ${SET_DATE} action`, () => {
    const action = {
      type: SET_DATE,
      payload: {
        selectedTimestamp: 'selectedTimestamp',
        precision: 'precision',
      },
    };

    const actionNoPrecision = {
      type: SET_DATE,
      payload: {
        selectedTimestamp: 'selectedTimestamp',
      },
    };

    expect(DatepickerReducer(initialState, action)).toMatchSnapshot();
    expect(
      DatepickerReducer(initialState, actionNoPrecision)
    ).toMatchSnapshot();
  });

  it(`handles ${SET_VISIBILITY} action`, () => {
    const action = {
      type: SET_VISIBILITY,
      payload: {
        visibleTimestamp: 'visibleTimestamp',
      },
    };

    expect(DatepickerReducer(initialState, action)).toMatchSnapshot();
  });

  it(`handles ${SET_TODAY} action`, () => {
    const action = {
      type: SET_TODAY,
      payload: {
        todayTimestamp: 'todayTimestamp',
      },
    };

    expect(DatepickerReducer(initialState, action)).toMatchSnapshot();
  });

  it(`handles ${SET_PRECISION} action`, () => {
    const action = {
      type: SET_PRECISION,
      payload: 'precision',
    };

    expect(DatepickerReducer(initialState, action)).toMatchSnapshot();
  });
});
