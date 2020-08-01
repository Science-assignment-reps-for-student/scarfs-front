import {
  signinThunk,
  signupThunk,
  emailCheckThunk,
  emailSendThunk,
  refreshTokenThunk,
} from '../../../modules/thunk/Header';
import { ErrorType } from '../Modal';

export const ACCESS_TOKEN = 'Header/ACCESS_TOKEN' as const;
export const REFRESH_TOKEN = 'Header/REFRESH_TOKEN' as const;
export const ALL = 'Header/ALL' as const;
export const SIGNIN = 'Header/SIGNIN';
export const SIGNUP = 'Header/SIGNUP';
export const SIGNUP_ERROR = 'Header/SIGNUP_ERROR' as const;
export const EMAILSEND = 'Header/EMAILSEND' as const;
export const EMAILCHECK = 'Header/EMAILCHECK' as const;
export const LOADING = 'Header/LOADING' as const;

export const REFRESH_TOKEN_CALL = 'Header/REFRESH_TOKEN_CALL' as const;
export const REFRESH_TOKEN_FAILURE = 'Header/REFRESH_TOKEN_FAILURE' as const;
export const REFRESH_TOKEN_SUCCESS = 'Header/REFRESH_TOKEN_SUCCESS' as const;

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

export const refreshToken = refreshTokenThunk();

export const signupErrorChange = (payload: string) => ({
  type: SIGNUP_ERROR,
  payload,
});

export const emailSend = emailSendThunk();

export const emailCheck = emailCheckThunk();

export const setAll = (payload: HeaderState) => ({
  type: ALL,
  payload,
});

export const setLoading = (payload: boolean) => ({
  type: LOADING,
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

export type HeaderState = {
  accessToken: string;
  refreshToken: string;
  loading: boolean;
  error: ErrorType | null;
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
  error: null,
};

export type HeaderActionType =
  | ReturnType<typeof setAccessToken>
  | ReturnType<typeof setRefreshToken>
  | ReturnType<typeof signupErrorChange>
  | ReturnType<typeof setAll>
  | ReturnType<typeof setLoading>
  | ReturnType<typeof refreshTokenSuccess>
  | ReturnType<typeof refreshTokenFailure>;

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
      return {
        ...state,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
      };
    }
    case LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
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
    default:
      return state;
  }
};

export default HeaderState;
