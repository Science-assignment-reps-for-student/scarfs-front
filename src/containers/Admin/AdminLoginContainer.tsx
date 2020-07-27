import React, { FC, ReactElement, useReducer, ChangeEvent, useState, Reducer } from 'react';
import { useHistory } from 'react-router-dom';
import { AdminLogin } from '../../components';
import AdminHeaderContainer from './AdminHeaderContainer';
import { loginReducer, loginInit, Login, LoginType } from '../../modules/reducer/AdminLogin';
import { apiLogin } from '../../lib/api/Admin/login';

interface Props {}

const AdminLoginContainer: FC<Props> = (): ReactElement => {
  const history = useHistory();
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
        return alert('아이디 또는 비밀번호를 입력해주세요.');
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
        alert('잘못된 아이디와 비밀번호입니다. 다시 입력해주세요.');
      } else if (code === 401) {
        alert('존재하지 않는 계정입니다. 다시 입력해주세요.');
      }
    }
  };

  return (
    <>
      <AdminHeaderContainer />
      <AdminLogin onChangeLogin={onChangeLogin} onClickLogin={onClickLogin} loading={loading} />
    </>
  );
};

export default AdminLoginContainer;
