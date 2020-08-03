import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { LoginedMain, LogOutedMain } from '../../components/Main';
import { getStateCallback } from '../../lib/function/index';
import { HeaderState } from '../../modules/reducer/Header';
const Main: FC = () => {
  const { isLogin } = useSelector(getStateCallback<HeaderState>('Header'));
  return isLogin ? <LoginedMain /> : <LogOutedMain />;
};

export default Main;
