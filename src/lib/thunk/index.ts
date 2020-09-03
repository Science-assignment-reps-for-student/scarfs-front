import { startLoading, finishLoading } from '../../modules/reducer/Loading';
import { ErrorType } from '../../lib/type';

export const createRequestThunk = (type, request) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return params => async dispatch => {
    dispatch(startLoading(type));
    try {
      const response = await request(params);
      dispatch({
        type: SUCCESS,
        payload: response.data,
      });
      dispatch(finishLoading(type));
    } catch (e) {
      if (e.response?.data) {
        const error: ErrorType = e.response.data;
        dispatch({
          type: FAILURE,
          payload: error,
        });
      } else {
        dispatch({
          type: FAILURE,
          payload: {
            message: `TypeError: Cannot read property 'data' of undefined`,
            status: 500,
          } as ErrorType,
        });
      }
      dispatch(finishLoading(type));
      throw e;
    }
  };
};
