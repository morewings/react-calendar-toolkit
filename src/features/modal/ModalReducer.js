import {TOGGLE_DATEPICKER} from './actionTypes';

const initialState = {
  showDatepicker: true,
  datepickerMode: 'popover',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DATEPICKER: {
      const showDatepicker = action.payload;
      return {
        ...state,
        showDatepicker,
      };
    }
    default:
      return state;
  }
};
