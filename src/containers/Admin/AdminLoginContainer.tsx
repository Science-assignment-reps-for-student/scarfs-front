import React, { FC, ReactElement, useReducer, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { AdminLogin } from '../../components';
import AdminHeaderContainer from './AdminHeaderContainer';
import { loginReducer, Login } from '../../modules/reducer/AdminLogin';
import { apiLogin } from '../../lib/api/Admin/admin';

interface Props {}

const AdminLoginContainer: FC<Props> = (): ReactElement => {
  const history = useHistory();
  const loginInit: Login = {
    type: '',
    ID: '',
    PW: '',
  };
  const [loginState, loginDispatch] = useReducer(loginReducer, loginInit);

  const onChangeLogin = (e: ChangeEvent<HTMLInputElement>) => {
    loginDispatch({ type: e.target.name, payload: { value: e.target.value } });
  };

  const onClickLogin = async () => {
    try {
      const res = await apiLogin(loginState);
      const data = res.data;
      localStorage.setItem('accessToken', data.access_token);
      localStorage.setItem('refreshToken', data.refresh_token);
      history.push('/admin');
    } catch (err) {
      const code = err?.response?.status;
      if (code === 400) {
        console.log('Bad Request at login');
      } else if (code === 404) {
        console.log('Wrong Information at login');
      } else {
        console.log('Cannot Found Error 😀');
      }
    }
  };

  return (
    <>
      <AdminHeaderContainer />
      <AdminLogin onChangeLogin={onChangeLogin} onClickLogin={onClickLogin} />
    </>
  );
};

export default AdminLoginContainer;
