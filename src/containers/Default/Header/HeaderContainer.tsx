import React, { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Header } from '../../../components/Default';
import { setModal } from '../../../modules/reducer/Modal';
import { setIsLogin, setAccessToken, setRefreshToken } from '../../../modules/reducer/Header';
import { stateChange, getStateCallback } from '../../../lib/function';
import HeaderState from 'src/modules/reducer/Header';
import { MainState } from 'src/modules/reducer/Main';

const HeaderContainer: FC = () => {
  const modalChange = stateChange(setModal);
  const isLoginChange = stateChange(setIsLogin);
  const setAccessTokenChange = stateChange(setAccessToken);
  const setRefreshTokenChange = stateChange(setRefreshToken);
  const logOutClickHandler = useCallback(() => {
    setAccessTokenChange('');
    setRefreshTokenChange('');
    isLoginChange(false);
  }, []);

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
