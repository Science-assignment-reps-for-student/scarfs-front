import { startLoading, finishLoading } from '../../modules/reducer/Loading';
import { ErrorType } from '../../modules/reducer/Modal';
export const createRequestThunk = (type, request) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return params => async dispatch => {
    dispatch({ type });
    dispatch(startLoading(type));
    try {
      const response = await request(params);
      dispatch({
        type: SUCCESS,
        payload: response.data,
      });
      dispatch(finishLoading(type));
    } catch (e) {
      const error: ErrorType = e;
      dispatch({
        type: FAILURE,
        payload: error,
      });
      dispatch(finishLoading(type));
      throw error;
    }
  };
};

export const createRequestActionTypes = (type: string) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE];
};
