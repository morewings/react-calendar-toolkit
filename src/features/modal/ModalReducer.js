import {TOGGLE_DATEPICKER} from './actionTypes';

const initialState = {
  isVisible: false,
  datepickerMode: 'popover',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DATEPICKER: {
      const isVisible = action.payload;
      return {
        ...state,
        isVisible,
      };
    }
    default:
      return state;
  }
};
