import React, { FC } from 'react';
import { LoginedMain, LogOutedMain } from '../../components/Main';

const Main: FC = () => {
  const isLogIn = false;
  return isLogIn ? <LoginedMain /> : <LogOutedMain />;
};

export default Main;
