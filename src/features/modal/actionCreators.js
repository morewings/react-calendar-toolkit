import {useModalContext} from './context';
import {TOGGLE_DATEPICKER} from './actionTypes';

const useModalActions = () => {
  const {dispatch} = useModalContext();
  return {
    toggleDatePicker: isVisible => {
      dispatch({
        type: TOGGLE_DATEPICKER,
        payload: isVisible,
      });
    },
  };
};

export default useModalActions;
