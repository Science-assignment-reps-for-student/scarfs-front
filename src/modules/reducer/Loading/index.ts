import { GET_BOARD as GET_BOARD_CLASS } from '../ClassBoard';
import { GET_DETAIL_POST as GET_DETAIL_POST_CLASS } from '../ClassDetailPost';
import { GET_ASSIGNMENT, GET_BOARD_MAIN } from '../Main';
import {
  SIGNIN,
  SIGNUP,
  REFRESH_TOKEN_CALL,
  EMAILCHECK,
  EMAILSEND,
  GET_USER_INFO,
} from '../Header';
import { GET_NOTICE_DETAIL_POST } from '../NoticeDetailPost';
import { GET_ASSIGNMENT_FILES } from '../AssignmentDetailPost';
import { SUBMIT_FILE } from '../FileSubmit';
import { GET_STUDENTS } from '../AddTeamMember';

export const START_LOADING = 'loading/START_LOADING';
export const FINISH_LOADING = 'loading/FINISH_LOADING';

export const startLoading = (payload: string) => ({
  type: START_LOADING,
  payload,
});
export const finishLoading = (payload: string) => ({
  type: FINISH_LOADING,
  payload,
});

export type LoadingAction = ReturnType<typeof startLoading> | ReturnType<typeof finishLoading>;

export type LoadingState = {
  [GET_BOARD_CLASS]: boolean;
  [GET_DETAIL_POST_CLASS]: boolean;
  [GET_ASSIGNMENT]: boolean;
  [GET_BOARD_MAIN]: boolean;
  [GET_USER_INFO]: boolean;
  [SIGNIN]: boolean;
  [SIGNUP]: boolean;
  [REFRESH_TOKEN_CALL]: boolean;
  [EMAILCHECK]: boolean;
  [EMAILSEND]: boolean;
  [REFRESH_TOKEN_CALL]: boolean;
  [GET_NOTICE_DETAIL_POST]: boolean;
  [GET_ASSIGNMENT_FILES]: boolean;
  [SUBMIT_FILE]: boolean;
  [GET_STUDENTS]: boolean;
};

const initialState: LoadingState = {
  [GET_BOARD_CLASS]: false,
  [GET_DETAIL_POST_CLASS]: false,
  [GET_ASSIGNMENT]: false,
  [GET_BOARD_MAIN]: false,
  [GET_USER_INFO]: false,
  [SIGNIN]: false,
  [SIGNUP]: false,
  [REFRESH_TOKEN_CALL]: false,
  [EMAILCHECK]: false,
  [EMAILSEND]: false,
  [REFRESH_TOKEN_CALL]: false,
  [GET_NOTICE_DETAIL_POST]: false,
  [GET_ASSIGNMENT_FILES]: false,
  [SUBMIT_FILE]: false,
  [GET_STUDENTS]: false,
};

export default function loading(state: LoadingState = initialState, action: LoadingAction) {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        [action.payload]: true,
      };
    case FINISH_LOADING:
      return {
        ...state,
        [action.payload]: false,
      };
    default:
      return state;
  }
}
