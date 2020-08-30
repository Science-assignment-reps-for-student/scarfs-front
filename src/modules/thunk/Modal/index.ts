import { setError, setTimerNumber } from '../../../modules/reducer/Modal';

const TIME_OUT_TIME = 1800000;

export const setTimeOutTimerThunk = () => {
  return () => async dispatch => {
    const timerNumber = setTimeout(() => {
      dispatch(setError('TimeOutError'));
    }, TIME_OUT_TIME);
    dispatch(setTimerNumber(timerNumber));
  };
};

export const removeTimeOutTimerThunk = () => {
  return (params: number) => () => {
    clearTimeout(params);
  };
};
