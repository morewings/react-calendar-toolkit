import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {actionCreators} from 'features/datepicker';
import useHasInitialValues from 'utils/useHasInitialValues';

const useSetInitialValues = ({initialDate, today, minPrecision}) => {
  const dispatch = useDispatch();
  const hasInitialValues = useHasInitialValues();
  useEffect(() => {
    if (!hasInitialValues) {
      dispatch(actionCreators.setDate(initialDate));
      dispatch(actionCreators.setVisibility(initialDate));
      dispatch(actionCreators.setToday(today));
      dispatch(actionCreators.setPrecision(minPrecision));
    }
  }, [dispatch, hasInitialValues, initialDate, minPrecision, today]);
};

export default useSetInitialValues;
