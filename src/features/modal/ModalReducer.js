import {TOGGLE_DATEPICKER} from './actionTypes';

export const initialState = {
  isVisible: false,
};

const reducer = (state = initialState, action) => {
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

export default reducer;
