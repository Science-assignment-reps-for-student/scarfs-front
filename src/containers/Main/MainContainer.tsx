import React, { FC, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  GET_ASSIGNMENT,
  GET_USER_INFO,
  GET_BOARD_MAIN,
  MainState,
} from '../../modules/reducer/Main';
import { LoginedMain, LogOutedMain } from '../../components/Main';
import { getStateCallback, isNetworkError, stateChange } from '../../lib/function/index';
import { HeaderState, sendRefreshToken, setIsLogin } from '../../modules/reducer/Header';
import { LoadingState } from 'src/modules/reducer/Loading';
import {
  getAssignmentThunk,
  getBoardThunk,
  getUserInfoThunk,
  logout,
} from '../../modules/thunk/Main';

const Main: FC = () => {
  const getAssignmentChange = stateChange<{ size: number; page: number }>(getAssignmentThunk);
  const getBoardChange = stateChange<{ size: number; page: number }>(getBoardThunk);
  const isLoginChange = stateChange<boolean>(setIsLogin);
  const refreshTokenChange = stateChange(sendRefreshToken);
  const getUserInfoChange = stateChange(getUserInfoThunk);
  const logoutChange = stateChange(logout);
  const { isLogin, refreshToken } = useSelector(getStateCallback<HeaderState>('Header'));
  const { assignmentPreview, boardPreview, error, userInfo } = useSelector(
    getStateCallback<MainState>('Main'),
  );
  const LoadingState = useSelector(getStateCallback<LoadingState>('Loading'));
  const serverErrorHandler = useCallback((status: number) => {
    isLoginChange(false);
    switch (status) {
      case 401: {
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
  useEffect(() => {
    if (!error) return;
    if (isNetworkError(error)) return;
    const statusCode = error.response.status;
    serverErrorHandler(statusCode);
  }, [error]);
  useEffect(() => {
    if (!isLogin) return;
    getAssignmentChange({ size: 3, page: 1 });
    getBoardChange({ size: 3, page: 1 });
    getUserInfoChange();
  }, [isLogin]);
  return isLogin ? (
    <LoginedMain
      assignmentTask={assignmentPreview}
      boardTask={boardPreview}
      userInfo={userInfo}
      isAssignmentLoading={LoadingState[GET_ASSIGNMENT]}
      isBoardLoading={LoadingState[GET_BOARD_MAIN]}
      isUserInfoLoading={LoadingState[GET_USER_INFO]}
      logout={logoutChange}
    />
  ) : (
    <LogOutedMain />
  );
};

export default Main;
