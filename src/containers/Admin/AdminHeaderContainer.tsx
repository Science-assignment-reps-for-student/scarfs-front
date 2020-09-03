import React, { FC, ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { AdminHeader } from '../../components';
import { setAccessToken, setIsLogin } from '../../modules/reducer/Header';
interface Props {}

const AdminHeaderContainer: FC<Props> = (): ReactElement => {
  const dispatch = useDispatch();

  useEffect(() => {
    () => {
      dispatch(setAccessToken(localStorage.getItem('accessToken')));
      dispatch(setIsLogin(true));
    };
  }, []);

  return <AdminHeader />;
};

export default AdminHeaderContainer;
