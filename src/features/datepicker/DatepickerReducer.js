import {INCREMENT_COUNTER} from './actionTypes';

const initialState = {
  date: 0,
  precision: 'day',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {...state, value: state.value + 1};

    default:
      return state;
  }
};
