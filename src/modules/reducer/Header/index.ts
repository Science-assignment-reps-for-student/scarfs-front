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

export const setAll = (payload: State) => ({
  type: ALL,
  payload,
});

export type State = {
  accessToken: string;
  refreshToken: string;
};

const initialState: State = {
  accessToken: '',
  refreshToken: '',
};

export type HeaderActionType =
  | ReturnType<typeof setAccessToken>
  | ReturnType<typeof setRefreshToken>
  | ReturnType<typeof signupErrorChange>
  | ReturnType<typeof setAll>;

export const HeaderState = (state: State = initialState, action: HeaderActionType): State => {
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
    default:
      return state;
  }
};

export default HeaderState;
