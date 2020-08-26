import { UserInfoResponseType } from '../../../lib/api/Header/userInfo';
import { UserInfoType } from '../../../lib/api/Header/userInfo';
import { errorInitialState, ErrorType } from '../../../lib/type';
import {
  signinThunk,
  signupThunk,
  emailCheckThunk,
  emailSendThunk,
  refreshTokenThunk,
} from '../../../modules/thunk/Header';

export const ACCESS_TOKEN = 'Header/ACCESS_TOKEN' as const;
export const REFRESH_TOKEN = 'Header/REFRESH_TOKEN' as const;
export const ALL = 'Header/ALL' as const;
export const SIGNUP_ERROR = 'Header/SIGNUP_ERROR' as const;
export const IS_LOGIN = 'Header/IS_LOGIN' as const;
export const USERINFO = 'Header/USERINFO' as const;

export const REFRESH_TOKEN_CALL = 'Header/REFRESH_TOKEN_CALL' as const;
export const REFRESH_TOKEN_FAILURE = 'Header/REFRESH_TOKEN_FAILURE' as const;
export const REFRESH_TOKEN_SUCCESS = 'Header/REFRESH_TOKEN_SUCCESS' as const;

export const EMAILSEND = 'Header/EMAILSEND' as const;
export const EMAILSEND_SUCCESS = 'Header/EMAILSEND_SUCCESS' as const;
export const EMAILSEND_FAILURE = 'Header/EMAILSEND_FAILURE' as const;

export const EMAILCHECK = 'Header/EMAILCHECK' as const;
export const EMAILCHECK_SUCCESS = 'Header/EMAILCHECK_SUCCESS' as const;
export const EMAILCHECK_FAILURE = 'Header/EMAILCHECK_FAILURE' as const;

export const SIGNIN = 'Header/SIGNIN' as const;
export const SIGNIN_SUCCESS = 'Header/SIGNIN_SUCCESS' as const;
export const SIGNIN_FAILURE = 'Header/SIGNIN_FAILURE' as const;

export const SIGNUP = 'Header/SIGNUP' as const;
export const SIGNUP_SUCCESS = 'Header/SIGNUP_SUCCESS' as const;
export const SIGNUP_FAILURE = 'Header/SIGNUP_FAILURE' as const;

export const GET_USER_INFO = 'Header/GET_USER_INFO' as const;
export const GET_USER_INFO_SUCCESS = 'Header/GET_USER_INFO_SUCCESS' as const;
export const GET_USER_INFO_FAILURE = 'Header/GET_USER_INFO_FAILURE' as const;

export const setAccessToken = (payload: string) => ({
  type: ACCESS_TOKEN,
  payload,
});

export const setRefreshToken = (payload: string) => ({
  type: REFRESH_TOKEN,
  payload,
});

export const signin = signinThunk();

export const signup = signupThunk();

export const sendRefreshToken = refreshTokenThunk();

export const signupErrorChange = (payload: string) => ({
  type: SIGNUP_ERROR,
  payload,
});

export const setIsLogin = (payload: boolean) => ({
  type: IS_LOGIN,
  payload,
});

export const emailSend = emailSendThunk();

export const emailCheck = emailCheckThunk();

export const setAll = (payload: HeaderState) => ({
  type: ALL,
  payload,
});

export const refreshTokenSuccess = (payload: { accessToken: string; refreshToken: string }) => ({
  type: REFRESH_TOKEN_SUCCESS,
  payload,
});

export const refreshTokenFailure = (payload: ErrorType) => ({
  type: REFRESH_TOKEN_FAILURE,
  payload,
});

export const emailSendFailure = (payload: ErrorType) => ({
  type: EMAILSEND_FAILURE,
  payload,
});

export const emailSendSuccess = () => ({
  type: EMAILSEND_SUCCESS,
});

export const emailCheckFailure = (payload: ErrorType) => ({
  type: EMAILCHECK_FAILURE,
  payload,
});

export const emailCheckSuccess = () => ({
  type: EMAILCHECK_SUCCESS,
});

export const signInFailure = (payload: ErrorType) => ({
  type: SIGNIN_FAILURE,
  payload,
});

export const signinSuccess = () => ({
  type: SIGNIN_SUCCESS,
});

export const signUpFailure = (payload: ErrorType) => ({
  type: SIGNUP_FAILURE,
  payload,
});

export const signUpSuccess = () => ({
  type: SIGNUP_SUCCESS,
});

export const getUserInfoSuccess = (payload: UserInfoResponseType) => ({
  type: GET_USER_INFO_SUCCESS,
  payload,
});

export const getUserInfoFailure = (payload: ErrorType) => ({
  type: GET_USER_INFO_FAILURE,
  payload,
});

export const setUserInfo = (payload: UserInfoType) => ({
  type: USERINFO,
  payload,
});

export type HeaderState = {
  accessToken: string;
  refreshToken: string;
  loading: boolean;
  error: ErrorType;
  isLogin: boolean;
  userInfo: UserInfoType | null;
};

const getToken = (tokenType: 'accessToken' | 'refreshToken') => {
  const localStorageToken = localStorage.getItem(tokenType);
  if (typeof localStorageToken !== 'string') {
    return '';
  }
  return localStorageToken;
};

const initialState: HeaderState = {
  accessToken: getToken('accessToken'),
  refreshToken: getToken('refreshToken'),
  loading: false,
  error: errorInitialState,
  isLogin: getToken('accessToken').length > 0,
  userInfo: null,
};

export type HeaderActionType =
  | ReturnType<typeof setAccessToken>
  | ReturnType<typeof setRefreshToken>
  | ReturnType<typeof signupErrorChange>
  | ReturnType<typeof setAll>
  | ReturnType<typeof refreshTokenSuccess>
  | ReturnType<typeof refreshTokenFailure>
  | ReturnType<typeof setIsLogin>
  | ReturnType<typeof signInFailure>
  | ReturnType<typeof signinSuccess>
  | ReturnType<typeof signUpFailure>
  | ReturnType<typeof signUpSuccess>
  | ReturnType<typeof emailCheckFailure>
  | ReturnType<typeof emailCheckSuccess>
  | ReturnType<typeof emailSendFailure>
  | ReturnType<typeof emailSendSuccess>
  | ReturnType<typeof getUserInfoFailure>
  | ReturnType<typeof getUserInfoSuccess>;

export const HeaderState = (
  state: HeaderState = initialState,
  action: HeaderActionType,
): HeaderState => {
  switch (action.type) {
    case ACCESS_TOKEN: {
      return {
        ...state,
        accessToken: action.payload,
      };
    }
    case REFRESH_TOKEN: {
      return {
        ...state,
        refreshToken: action.payload,
      };
    }
    case ALL: {
      if (typeof action.payload !== 'object') {
        return;
      }
      return action.payload;
    }
    case REFRESH_TOKEN_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case REFRESH_TOKEN_SUCCESS: {
      return {
        ...state,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
      };
    }
    case SIGNIN_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case SIGNUP_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case EMAILCHECK_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case EMAILSEND_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case IS_LOGIN: {
      return {
        ...state,
        isLogin: action.payload,
      };
    }
    case GET_USER_INFO_SUCCESS: {
      const {
        name,
        student_number,
        remaining_assignment,
        completion_assignment,
        id,
      } = action.payload;
      return {
        ...state,
        userInfo: {
          name,
          studentNumber: student_number,
          remainingAssignment: remaining_assignment,
          completionAssignment: completion_assignment,
          id,
        },
      };
    }
    case GET_USER_INFO_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default HeaderState;
