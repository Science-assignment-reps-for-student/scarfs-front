import { RESET, MODAL, ERROR } from '../../reducer/Modal';
import { ALL, LOADING } from '../../reducer/Header';
import { signin, SignInType, SignInResponseType } from '../../../lib/api/Header/signin';
import { EMAIL_CHECK } from '../../../modules/reducer/SignUp';
import {
  SignUpType,
  signup,
  EmailCheckType,
  emailCheck,
  emailSend,
  EmailSendType,
} from '../../../lib/api/Header/signup';

const setTokensToLocalStorage = (tokens: SignInResponseType) => {
  localStorage.setItem('accessToken', tokens.accessToken);
  localStorage.setItem('refreshToken', tokens.refreshToken);
};

export const signinThunk = () => {
  return (params: SignInType) => async dispatch => {
    if (params.loading) return;
    dispatch({ type: LOADING, payload: true });
    try {
      const payload = await signin(params);
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
  return (params: SignUpType) => async dispatch => {
    if (params.loading) return;
    dispatch({ type: LOADING, payload: true });
    try {
      await signup(params);
      dispatch({ type: RESET });
    } catch (err) {
      dispatch({ type: ERROR, payload: 'SignUpPasswordError' });
    }
    dispatch({ type: LOADING, payload: false });
  };
};

export const emailCheckThunk = () => {
  return (params: EmailCheckType) => async dispatch => {
    if (params.loading) return;
    dispatch({ type: LOADING, payload: true });
    try {
      await emailCheck(params);
      dispatch({ type: EMAIL_CHECK, payload: params });
    } catch (err) {
      dispatch({ type: ERROR, payload: 'CodeError' });
    }
    dispatch({ type: LOADING, payload: false });
  };
};

export const emailSendThunk = () => {
  return (params: EmailSendType) => async dispatch => {
    if (params.loading) return;
    dispatch({ type: LOADING, payload: true });
    try {
      await emailSend(params);
      dispatch({ type: MODAL, payload: 'SignUpCode' });
    } catch (err) {
      dispatch({ type: ERROR, payload: 'SignUpEmailError' });
    }
    dispatch({ type: LOADING, payload: false });
  };
};
