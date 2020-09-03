import { setModal, setError, reset, setTimerNumber } from '../../reducer/Modal';
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
import { setEmail, setPassword } from '../../../modules/reducer/SignIn';
import { setTimeOutTimer, removeTimeOutTimer } from '../../reducer/Modal';
import {
  signup,
  emailCheck,
  emailSend,
  EmailSendType,
  EmailCheckThunkType,
  SignUpThunkType,
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
      const { access_token, refresh_token, token_type } = await signin(params);
      setTokensToLocalStorage({ access_token, refresh_token, token_type });
      dispatch(
        setAll({
          accessToken: access_token,
          refreshToken: refresh_token,
          loading: false,
          error: null,
          isLogin: true,
          userInfo: null,
        }),
      );
      dispatch(setPassword(''));
      dispatch(setEmail(''));
      dispatch(setEmail(''));
      dispatch(reset());
    } catch (err) {
      dispatch(setError('SignInError'));
    }
    dispatch(finishLoading(SIGNIN));
  };
};

export const signupThunk = () => {
  return (params: SignUpThunkType) => async dispatch => {
    const { email, auth_code, timerNumber, number, name, password } = params;
    dispatch(startLoading(SIGNUP));
    dispatch(removeTimeOutTimer(timerNumber));
    try {
      await signup({
        email,
        auth_code,
        number,
        name,
        password,
      });
      dispatch(reset());
    } catch (err) {
      dispatch(setError('SignUpInfoError'));
    }
    dispatch(finishLoading(SIGNUP));
  };
};

export const emailCheckThunk = () => {
  return (params: EmailCheckThunkType) => async dispatch => {
    const { email, timerNumber, code } = params;
    dispatch(startLoading(EMAILCHECK));
    dispatch(removeTimeOutTimer(timerNumber));
    dispatch(setTimeOutTimer());
    try {
      await emailCheck({
        email,
        code,
      });
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
    dispatch(setTimeOutTimer());
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
      const sneakToCamel = {
        accessToken: response.access_token,
        refreshToken: response.refresh_token,
      };
      dispatch(refreshTokenSuccess(sneakToCamel));
      dispatch(setIsLogin(true));
      setTokensToLocalStorage(response);
      params.callback();
    } catch (err) {
      dispatch(setModal('SignIn'));
      dispatch(setIsLogin(false));
    }
    dispatch(finishLoading(REFRESH_TOKEN_CALL));
  };
};
