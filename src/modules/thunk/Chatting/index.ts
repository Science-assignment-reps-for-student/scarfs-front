import {
  ADMIN_CHATTING_LIST_CALL,
  CHATTING_DELETE_CALL,
  CHATTING_LOG_CALL,
  deleteChattingList,
  TEACHER_CHATTING_LIST_CALL,
} from '../../reducer/Chatting';
import { createRequestThunk } from '../../../lib/thunk';
import {
  deleteChatting,
  getChattingList,
  getChattingLog,
} from '../../../lib/api/Chatting/Chatting';
import { startLoading, finishLoading } from '../../../modules/reducer/Loading';
import { ErrorType } from '../../../modules/reducer/Modal';

export const getAdminChattingListThunk = createRequestThunk(
  ADMIN_CHATTING_LIST_CALL,
  getChattingList,
);
export const getTeacherChattingListThunk = createRequestThunk(
  TEACHER_CHATTING_LIST_CALL,
  getChattingList,
);
export const getChattingLogThunk = createRequestThunk(CHATTING_LOG_CALL, getChattingLog);

export const deleteChattingThunk = params => async dispatch => {
  const SUCCESS = `${CHATTING_DELETE_CALL}_SUCCESS`;
  const FAILURE = `${CHATTING_DELETE_CALL}_FAILURE`;
  dispatch(startLoading(CHATTING_DELETE_CALL));
  try {
    const response = await deleteChatting(params);
    dispatch({
      type: SUCCESS,
      payload: response.data,
    });
    dispatch(deleteChattingList(params));
    dispatch(finishLoading(CHATTING_DELETE_CALL));
  } catch (e) {
    const error: ErrorType = e;
    dispatch({
      type: FAILURE,
      payload: error,
    });
    dispatch(finishLoading(CHATTING_DELETE_CALL));
    throw error;
  }
};
