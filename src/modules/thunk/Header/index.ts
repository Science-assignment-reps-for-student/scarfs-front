import { RESET, MODAL, ERROR } from '../../reducer/Modal';
import { ALL, IS_LOGIN, LOADING, REFRESH_TOKEN_SUCCESS } from '../../reducer/Header';
import {
  signin,
  SignInThunkType,
  SignInResponseType,
  RefreshTokenThunkType,
  sendRefreshToken,
} from '../../../lib/api/Header/signin';
import { EMAIL_CHECK } from '../../../modules/reducer/SignUp';
import {
  signup,
  emailCheck,
  emailSend,
  SignUpThunkType,
  EmailCheckThunkType,
  EmailSendThunkType,
} from '../../../lib/api/Header/signup';

const setTokensToLocalStorage = (tokens: SignInResponseType) => {
  localStorage.setItem('accessToken', tokens.accessToken);
  localStorage.setItem('refreshToken', tokens.refreshToken);
};

export const signinThunk = () => {
  return (params: SignInThunkType) => async dispatch => {
    if (params.loading) return;
    dispatch({ type: LOADING, payload: true });
    try {
      const payload = await signin(params.serverType);
      setTokensToLocalStorage(payload);
      dispatch({ type: ALL, payload });
      dispatch({ type: RESET });
    } catch (err) {
      dispatch({ type: ERROR, payload: 'SignInError' });
    }
    dispatch({ type: LOADING, payload: false });
  };
};

export const signupThunk = () => {
  return (params: SignUpThunkType) => async dispatch => {
    if (params.loading) return;
    dispatch({ type: LOADING, payload: true });
    try {
      await signup(params.serverType);
      dispatch({ type: RESET });
    } catch (err) {
      dispatch({ type: ERROR, payload: 'SignUpPasswordError' });
    }
    dispatch({ type: LOADING, payload: false });
  };
};

export const emailCheckThunk = () => {
  return (params: EmailCheckThunkType) => async dispatch => {
    if (params.loading) return;
    dispatch({ type: LOADING, payload: true });
    try {
      await emailCheck(params.serverType);
      dispatch({ type: EMAIL_CHECK, payload: params });
    } catch (err) {
      dispatch({ type: ERROR, payload: 'CodeError' });
    }
    dispatch({ type: LOADING, payload: false });
  };
};

export const emailSendThunk = () => {
  return (params: EmailSendThunkType) => async dispatch => {
    if (params.loading) return;
    dispatch({ type: LOADING, payload: true });
    try {
      await emailSend(params.serverType);
      dispatch({ type: MODAL, payload: 'SignUpCode' });
    } catch (err) {
      dispatch({ type: ERROR, payload: 'SignUpEmailError' });
    }
  };
};

export const refreshTokenThunk = () => {
  return (params: RefreshTokenThunkType) => async dispatch => {
    if (params.loading) return;
    dispatch({ type: LOADING, payload: true });
    try {
      const response = await sendRefreshToken(params.serverType);
      dispatch({
        type: REFRESH_TOKEN_SUCCESS,
        payload: {
          accessToken: response.accessToken,
          refreshToken: response.refreshToken,
        },
      });
    } catch (err) {
      dispatch({ type: IS_LOGIN, payload: false });
      dispatch({ type: MODAL, payload: 'SignIn' });
    }
  };
};
