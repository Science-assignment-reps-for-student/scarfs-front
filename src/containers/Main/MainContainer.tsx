import React, { FC, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { GET_ASSIGNMENT, GET_BOARD_MAIN, MainState } from '../../modules/reducer/Main';
import { LoginedMain, LogOutedMain } from '../../components/Main';
import { getStateCallback, isNetworkError, stateChange } from '../../lib/function/index';
import {
  GET_USER_INFO,
  HeaderState,
  sendRefreshToken,
  setIsLogin,
} from '../../modules/reducer/Header';
import { LoadingState } from '../../../src/modules/reducer/Loading';
import { getAssignmentThunk, getBoardThunk, logout } from '../../modules/thunk/Main';

const Main: FC = () => {
  const getAssignmentChange = stateChange<{ size: number; page: number }>(getAssignmentThunk);
  const getBoardChange = stateChange<{ size: number; page: number }>(getBoardThunk);
  const refreshTokenChange = stateChange(sendRefreshToken);
  const logoutChange = stateChange(logout);
  const { isLogin, refreshToken, userInfo } = useSelector(getStateCallback<HeaderState>('Header'));
  const { assignmentPreview, boardPreview, error } = useSelector(
    getStateCallback<MainState>('Main'),
  );
  const LoadingState = useSelector(getStateCallback<LoadingState>('Loading'));
  const serverErrorHandler = useCallback((status: number) => {
    switch (status) {
      case 403: {
        const params = {
          serverType: {
            refreshToken,
          },
          callback: initPage,
        };
        refreshTokenChange(params);
      }
    }
  }, []);
  const initPage = useCallback(() => {
    getAssignmentChange({ size: 3, page: 1 });
    getBoardChange({ size: 3, page: 1 });
  }, []);
  useEffect(() => {
    if (!error) return;
    if (isNetworkError(error)) return;
    const statusCode = error.response.status;
    serverErrorHandler(statusCode);
  }, [error]);
  useEffect(() => {
    if (!isLogin) return;
    initPage();
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
