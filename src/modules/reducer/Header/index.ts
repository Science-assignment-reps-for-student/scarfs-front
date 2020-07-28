import {
  signinThunk,
  signupThunk,
  emailCheckThunk,
  emailSendThunk,
} from '../../../modules/thunk/Header';

export const ACCESS_TOKEN = 'Header/ACCESS_TOKEN' as const;
export const REFRESH_TOKEN = 'Header/REFRESH_TOKEN' as const;
export const ALL = 'Header/ALL' as const;
export const SIGNIN = 'Header/SIGNIN';
export const SIGNUP = 'Header/SIGNUP';
export const SIGNUP_ERROR = 'Header/SIGNUP_ERROR' as const;
export const EMAILSEND = 'Header/EMAILSEND' as const;
export const EMAILCHECK = 'Header/EMAILCHECK' as const;
export const LOADING = 'Header/LOADING' as const;

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

export type HeaderState = {
  accessToken: string;
  refreshToken: string;
  loading: boolean;
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
};

export type HeaderActionType =
  | ReturnType<typeof setAccessToken>
  | ReturnType<typeof setRefreshToken>
  | ReturnType<typeof signupErrorChange>
  | ReturnType<typeof setAll>
  | ReturnType<typeof setLoading>;

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
    default:
      return state;
  }
};

export default HeaderState;
