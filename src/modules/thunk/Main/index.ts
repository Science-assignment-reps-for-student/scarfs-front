import {
  GET_ASSIGNMENT_FAILURE,
  GET_BOARD_FAILURE,
  GET_BOARD_SUCCESS,
  GET_ASSIGNMENT_SUCCESS,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAILURE,
  LOADING,
} from '../../reducer/Main';
import { getAssignment, getBoard, getUserInfo } from '../../../lib/api/Assignment/Assignment';
import { IS_LOGIN } from '../../reducer/Header';

export const getBoardThunk = () => {
  return () => async dispatch => {
    try {
      dispatch({ type: LOADING, payload: true });
      const payload = await getBoard();
      dispatch({ type: GET_BOARD_SUCCESS, payload });
      dispatch({ type: IS_LOGIN, payload: true });
    } catch (err) {
      console.log(err.response);
      dispatch({ type: GET_BOARD_FAILURE, payload: err });
    }
    dispatch({ type: LOADING, payload: false });
  };
};

export const getAssignmentThunk = () => {
  return () => async dispatch => {
    try {
      dispatch({ type: LOADING, payload: true });
      const payload = await getAssignment();
      dispatch({ type: GET_ASSIGNMENT_SUCCESS, payload });
      dispatch({ type: IS_LOGIN, payload: true });
    } catch (err) {
      console.log(err.response);
      dispatch({ type: GET_ASSIGNMENT_FAILURE, payload: err });
    }
    dispatch({ type: LOADING, payload: false });
  };
};

export const getUserInfoThunk = () => {
  return () => async dispatch => {
    try {
      dispatch({ type: LOADING, payload: true });
      const payload = await getUserInfo;
      dispatch({ type: GET_USER_INFO_SUCCESS, payload });
      dispatch({ type: IS_LOGIN, payload: true });
    } catch (err) {
      dispatch({ type: GET_USER_INFO_FAILURE, payload: err });
    }
    dispatch({ type: LOADING, payload: false });
  };
};
