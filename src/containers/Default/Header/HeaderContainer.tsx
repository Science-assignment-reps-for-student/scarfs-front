import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Header } from '../../../components/Default';
import { setModal } from '../../../modules/reducer/Modal';
import { stateChange, getStateCallback } from '../../../lib/function';
import HeaderState from 'src/modules/reducer/Header';
import { getUserInfoThunk, logout } from '../../../modules/thunk/Main';

const HeaderContainer: FC = () => {
  const modalChange = stateChange(setModal);
  const logOutClickHandler = stateChange(logout);
  const getUserInfoChange = stateChange(getUserInfoThunk);

  const { isLogin, userInfo } = useSelector(getStateCallback<HeaderState>('Header'));

  useEffect(() => {
    getUserInfoChange();
  }, []);
  return (
    <Header
      logoutHandler={logOutClickHandler}
      isLogin={isLogin}
      modalChange={modalChange}
      userName={userInfo ? userInfo.name : ''}
    />
  );
};

export default HeaderContainer;
