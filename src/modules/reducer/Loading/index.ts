import { GET_ASSIGNMENT, GET_BOARD_CALL, GET_USER_INFO } from '../Main';
import { SIGNIN, SIGNUP, REFRESH_TOKEN_CALL, EMAILCHECK, EMAILSEND } from '../Header';
import { GET_BOARD } from '../ClassBoard';

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
  [GET_ASSIGNMENT]: boolean;
  [GET_BOARD_CALL]: boolean;
  [GET_USER_INFO]: boolean;
  [SIGNIN]: boolean;
  [SIGNUP]: boolean;
  [REFRESH_TOKEN_CALL]: boolean;
  [EMAILCHECK]: boolean;
  [EMAILSEND]: boolean;
  [REFRESH_TOKEN_CALL]: boolean;
  [GET_BOARD]: boolean;
};

const initialState: LoadingState = {
  [GET_ASSIGNMENT]: false,
  [GET_BOARD_CALL]: false,
  [GET_USER_INFO]: false,
  [SIGNIN]: false,
  [SIGNUP]: false,
  [REFRESH_TOKEN_CALL]: false,
  [EMAILCHECK]: false,
  [EMAILSEND]: false,
  [REFRESH_TOKEN_CALL]: false,
  [GET_BOARD]: false,
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
