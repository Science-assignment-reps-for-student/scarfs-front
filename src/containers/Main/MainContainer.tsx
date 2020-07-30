import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { LoginedMain, LogOutedMain } from '../../components/Main';
import { getStateCallback } from '../../lib/function/index';
import { HeaderState } from '../../modules/reducer/Header';
const Main: FC = () => {
  const { accessToken } = useSelector(getStateCallback<HeaderState>('Header'));
  const isLogIn = accessToken.length > 0 ? true : false;
  return isLogIn ? <LoginedMain /> : <LogOutedMain />;
};

export default Main;
