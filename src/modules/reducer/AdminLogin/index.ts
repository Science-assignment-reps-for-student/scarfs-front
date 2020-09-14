import { ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { History } from 'history';
import { AxiosError } from 'axios';

import { apiLogin } from '../../../lib/api/Admin/login';

export const FETCH_LOGIN = 'Admin/Login/FETCH_LOGIN' as const;
export const LOGIN_LOADING = 'Admin/Login/LOGIN_LOADING' as const;

export const fetchLogin = () => ({
  type: FETCH_LOGIN,
  payload: {},
});
export const setLoading = (loading: boolean) => {
  return {
    type: LOGIN_LOADING,
    payload: { loading },
  };
};

type LoginAction = ReturnType<typeof fetchLogin> | ReturnType<typeof setLoading>;

export type LoginState = {
  loading: boolean;
};

const initialPersonal: LoginState = {
  loading: false,
};

export const modalLoginExplains = {
  checkLogin: '아이디 또는 비밀번호를 입력해주세요.',
  notExisted: '존재하지 않는 계정입니다. \n 다시 입력해주세요.',
  notFoundError: '오류가 발생하였습니다. \n 잠시 후 다시 시도해주세요.',
  wrongAccount: '잘못된 아이디와 비밀번호입니다. \n 다시 입력해주세요.',
  notConnectNetwork: `네트워크에 연결되어 있지 않습니다. \n 연결 후 다시 시도해주세요.`,
} as const;

export const fetchLoginThunk: ActionCreator<ThunkAction<
  Promise<void>,
  LoginAction,
  null,
  LoginAction
>> = (
  history: History,
  loginState: { ID: string; PW: string },
  errorCallBack: (err: AxiosError) => void,
) => async dispatch => {
  dispatch(setLoading(true));
  try {
    const { data } = await apiLogin(loginState);
    localStorage.setItem('accessToken', data.access_token);
    localStorage.setItem('refreshToken', data.refresh_token);
    dispatch(setLoading(false));
    history.push('/admin');
  } catch (err) {
    dispatch(setLoading(false));
    errorCallBack(err);
  }
};

const login = (state = initialPersonal, action: LoginAction): LoginState => {
  switch (action.type) {
    case FETCH_LOGIN:
      return {
        ...state,
      };
    case LOGIN_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };
    default:
      return state;
  }
};

export default login;
