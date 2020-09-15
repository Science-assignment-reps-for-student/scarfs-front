import {
  GET_USER_INFO,
  setAccessToken,
  setIsLogin,
  setRefreshToken,
  setUserInfo,
} from '../../../modules/reducer/Header';
import {
  getAssignment,
  getBoard,
  searchNoticeBoards,
  searchAssignmentBoards,
} from '../../../lib/api/Assignment/Assignment';
import { createRequestThunk } from '../../../lib/thunk';
import {
  GET_BOARD_MAIN,
  GET_ASSIGNMENT,
  SEARCH_NOTICE_BOARDS,
  SEARCH_ASSIGNMENT_BOARDS,
} from '../../reducer/Main';
import { getUserInfo } from '../../../lib/api/Header/userInfo';

export const getBoardThunk = createRequestThunk(GET_BOARD_MAIN, getBoard);
export const getAssignmentThunk = createRequestThunk(GET_ASSIGNMENT, getAssignment);
export const getUserInfoThunk = createRequestThunk(GET_USER_INFO, getUserInfo);
export const logout = () => async dispatch => {
  dispatch(setAccessToken(''));
  dispatch(setRefreshToken(''));
  dispatch(setIsLogin(false));
  dispatch(setUserInfo(null));
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
};

export const searchNoticeBoardsThunk = createRequestThunk(SEARCH_NOTICE_BOARDS, searchNoticeBoards);
export const searchAssignmentBoardsThunk = createRequestThunk(
  SEARCH_ASSIGNMENT_BOARDS,
  searchAssignmentBoards,
);
