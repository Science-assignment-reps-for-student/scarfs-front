import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Header } from '../../../components/Default';
import { setModal } from '../../../modules/reducer/Modal';
import { stateChange, getStateCallback } from '../../../lib/function';
import HeaderState from 'src/modules/reducer/Header';
import { MainState } from 'src/modules/reducer/Main';
import { logout } from '../../../modules/thunk/Main';

const HeaderContainer: FC = () => {
  const modalChange = stateChange(setModal);
  const logOutClickHandler = stateChange(logout);

  const { isLogin } = useSelector(getStateCallback<HeaderState>('Header'));
  const { userInfo } = useSelector(getStateCallback<MainState>('Main'));
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
