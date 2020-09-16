import React, { FC, ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { AdminHeader } from '../../components';
import { setAccessToken, setRefreshToken, setIsLogin } from '../../modules/reducer/Header';
interface Props {}

const AdminHeaderContainer: FC<Props> = (): ReactElement => {
  const dispatch = useDispatch();

  useEffect(() => {
    () => {
      dispatch(setAccessToken(localStorage.getItem('accessToken')));
      dispatch(setRefreshToken(localStorage.getItem('refreshToken')));
      dispatch(setIsLogin(true));
    };
  }, []);

  return <AdminHeader />;
};

export default AdminHeaderContainer;
