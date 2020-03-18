import {useModalContext} from './context';
import {TOGGLE_DATEPICKER} from './actionTypes';

const toggleDatePicker = isVisible => ({
  type: TOGGLE_DATEPICKER,
  payload: isVisible,
});

const useModalActions = () => {
  const {dispatch} = useModalContext();
  return {
    toggleDatePicker: isVisible => {
      dispatch(toggleDatePicker(isVisible));
    },
  };
};

export default useModalActions;
