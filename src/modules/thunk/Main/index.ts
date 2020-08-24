import { setAccessToken, setIsLogin, setRefreshToken } from '../../../modules/reducer/Header';
import { getAssignment, getBoard, getUserInfo } from '../../../lib/api/Assignment/Assignment';
import { createRequestThunk } from '../../../lib/thunk';
import { GET_BOARD_MAIN, GET_ASSIGNMENT, GET_USER_INFO } from '../../reducer/Main';

export const getBoardThunk = createRequestThunk(GET_BOARD_MAIN, getBoard);
export const getAssignmentThunk = createRequestThunk(GET_ASSIGNMENT, getAssignment);
export const getUserInfoThunk = createRequestThunk(GET_USER_INFO, getUserInfo);
export const logout = () => async dispatch => {
  dispatch(setAccessToken(''));
  dispatch(setRefreshToken(''));
  dispatch(setIsLogin(false));
};
