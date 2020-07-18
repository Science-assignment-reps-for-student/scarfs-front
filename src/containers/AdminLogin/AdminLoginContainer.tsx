import React, { FC, ReactElement, useReducer, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { AdminLogin } from '../../components';
import AdminHeaderContainer from '../AdminHeader/AdminHeaderContainer';
import { loginReducer, Login } from '../../modules/reducer/AdminLogin/login';
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
      localStorage.setItem('accessToken', 'eya.b.c');
      localStorage.setItem('refreshToken', 'eya.b.c');
      history.push('/admin');
      // const res = await apiLogin(loginState);
      // const data = res.data;
      // localStorage.setItem('accessToken', data.access_token);
      // localStorage.setItem('refreshToken', data.refresh_token);
    } catch (err) {
      const code = err.response.status;
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
