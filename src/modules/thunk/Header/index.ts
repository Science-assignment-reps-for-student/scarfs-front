import { setModal, setError, reset } from '../../reducer/Modal';
import {
  refreshTokenSuccess,
  setAll,
  setIsLogin,
  REFRESH_TOKEN_CALL,
  SIGNIN,
  SIGNUP,
  EMAILCHECK,
  EMAILSEND,
} from '../../reducer/Header';
import {
  signin,
  SignInType,
  SignInResponseType,
  RefreshTokenThunkType,
  sendRefreshToken,
} from '../../../lib/api/Header/signin';
import { setEmailCheck } from '../../../modules/reducer/SignUp';
import {
  signup,
  emailCheck,
  emailSend,
  EmailSendType,
  EmailCheckType,
  SignUpType,
} from '../../../lib/api/Header/signup';
import { startLoading, finishLoading } from '../../../modules/reducer/Loading';

const setTokensToLocalStorage = (tokens: SignInResponseType) => {
  localStorage.setItem('accessToken', tokens.access_token);
  localStorage.setItem('refreshToken', tokens.refresh_token);
};

export const signinThunk = () => {
  return (params: SignInType) => async dispatch => {
    dispatch(startLoading(SIGNIN));
    try {
      const { access_token, refresh_token, tokenType } = await signin(params);
      setTokensToLocalStorage({ access_token, refresh_token, tokenType });
      dispatch(
        setAll({
          accessToken: access_token,
          refreshToken: refresh_token,
          loading: false,
          error: null,
          isLogin: true,
        }),
      );
      dispatch(reset());
    } catch (err) {
      dispatch(setError('SignInError'));
    }
    dispatch(finishLoading(SIGNIN));
  };
};

export const signupThunk = () => {
  return (params: SignUpType) => async dispatch => {
    dispatch(startLoading(SIGNUP));
    try {
      await signup(params);
      dispatch(reset());
    } catch (err) {
      dispatch(setError('SignUpPasswordError'));
    }
    dispatch(finishLoading(SIGNUP));
  };
};

export const emailCheckThunk = () => {
  return (params: EmailCheckType) => async dispatch => {
    dispatch(startLoading(EMAILCHECK));
    try {
      await emailCheck(params);
      dispatch(setEmailCheck(true));
    } catch (err) {
      dispatch(setError('CodeError'));
    }
    dispatch(finishLoading(EMAILCHECK));
  };
};

export const emailSendThunk = () => {
  return (params: EmailSendType) => async dispatch => {
    dispatch(startLoading(EMAILSEND));
    try {
      await emailSend(params);
      dispatch(setModal('SignUpCode'));
    } catch (err) {
      dispatch(setError('SignUpEmailError'));
    }
    dispatch(finishLoading(EMAILSEND));
  };
};

export const refreshTokenThunk = () => {
  return (params: RefreshTokenThunkType) => async dispatch => {
    dispatch(startLoading(REFRESH_TOKEN_CALL));
    try {
      const response = await sendRefreshToken(params.serverType);
      dispatch(refreshTokenSuccess(response));
      dispatch(setIsLogin(true));
      params.callback();
    } catch (err) {
      dispatch(setModal('SignIn'));
      dispatch(setIsLogin(false));
    }
    dispatch(finishLoading(REFRESH_TOKEN_CALL));
  };
};
