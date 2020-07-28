import React, { FC, ReactElement, useReducer, ChangeEvent, useState, Reducer } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { AdminLogin } from '../../components';
import AdminHeaderContainer from './AdminHeaderContainer';
import { loginReducer, loginInit, Login, LoginType } from '../../modules/reducer/AdminLogin';
import { apiLogin } from '../../lib/api/Admin/login';
import { AlertModal } from '../../components';
import { createAlert } from '../../modules/reducer/Alert';

interface Props {}

const AdminLoginContainer: FC<Props> = (): ReactElement => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [loginState, loginDispatch] = useReducer<Reducer<Login, LoginType>>(
    loginReducer,
    loginInit,
  );

  const onChangeLogin = (e: ChangeEvent<HTMLInputElement>) => {
    loginDispatch({ type: e.target.name, payload: { value: e.target.value } });
  };

  const onClickLogin = async () => {
    try {
      if (loginState.ID === '' || loginState.PW === '') {
        dispatch(createAlert('아이디 또는 비밀번호를 입력해주세요.'));
        return;
      }
      setLoading(prev => !prev);
      const { data } = await apiLogin(loginState);
      localStorage.setItem('accessToken', data.access_token);
      localStorage.setItem('refreshToken', data.refresh_token);
      history.push('/admin');
    } catch (err) {
      setLoading(prev => !prev);
      const code = err?.response?.status;
      if (code === 400) {
        dispatch(createAlert('잘못된 아이디와 비밀번호입니다. 다시 입력해주세요.'));
      } else if (code === 401) {
        dispatch(createAlert('존재하지 않는 계정입니다. 다시 입력해주세요.'));
      } else {
        dispatch(createAlert('오류가 발생하였습니다. 잠시 후 다시 시도해주세요.'));
      }
    }
  };

  return (
    <AlertModal type='notify'>
      <AdminHeaderContainer />
      <AdminLogin onChangeLogin={onChangeLogin} onClickLogin={onClickLogin} loading={loading} />
    </AlertModal>
  );
};

export default AdminLoginContainer;
