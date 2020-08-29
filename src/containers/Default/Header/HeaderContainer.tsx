import React, { FC, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Header } from '../../../components/Default';
import { setModal } from '../../../modules/reducer/Modal';
import { stateChange, getStateCallback, isNetworkError } from '../../../lib/function';
import HeaderState, { sendRefreshToken } from '../../../../src/modules/reducer/Header';
import { getUserInfoThunk, logout } from '../../../modules/thunk/Main';
import { MainState } from '../../../../src/modules/reducer/Main';

const HeaderContainer: FC = () => {
  const modalChange = stateChange(setModal);
  const logoutChange = stateChange(logout);
  const getUserInfoChange = stateChange(getUserInfoThunk);
  const { isLogin, refreshToken, userInfo, error } = useSelector(
    getStateCallback<HeaderState>('Header'),
  );
  const refreshTokenChange = stateChange(sendRefreshToken);
  const serverErrorHandler = useCallback((status: number) => {
    switch (status) {
      case 403: {
        const params = {
          serverType: {
            refreshToken,
          },
          callback: getUserInfoChange,
        };
        refreshTokenChange(params);
      }
    }
  }, []);
  const logoutClickHandler = useCallback(() => {
    logoutChange();
  }, []);
  useEffect(() => {
    if (isLogin) {
      getUserInfoChange();
    }
  }, [isLogin]);
  useEffect(() => {
    if (!error) return;
    if (isNetworkError(error)) return;
    const status = error.response.status;
    serverErrorHandler(status);
  }, [error]);
  return (
    <Header
      logoutHandler={logoutClickHandler}
      isLogin={isLogin}
      modalChange={modalChange}
      userName={userInfo ? userInfo.name : ''}
    />
  );
};

export default HeaderContainer;
