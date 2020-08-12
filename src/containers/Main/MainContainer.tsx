import React, { FC, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  GET_ASSIGNMENT,
  GET_USER_INFO,
  GET_BOARD,
  MainState,
  getAssignment,
  getBoard,
  getUserInfo,
} from '../../modules/reducer/Main';
import { LoginedMain, LogOutedMain } from '../../components/Main';
import { getStateCallback, isNetworkError, stateChange } from '../../lib/function/index';
import { HeaderState, sendRefreshToken, setIsLogin } from '../../modules/reducer/Header';
import { LoadingState } from 'src/modules/reducer/Loading';

const Main: FC = () => {
  const getAssignmentChange = stateChange(getAssignment);
  const getBoardChange = stateChange(getBoard);
  const isLoginChange = stateChange<boolean>(setIsLogin);
  const refreshTokenChange = stateChange(sendRefreshToken);
  const getUserInfoChange = stateChange(getUserInfo);
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
    getAssignmentChange();
    getBoardChange();
    getUserInfoChange();
  }, []);
  return isLogin ? (
    <LoginedMain
      assignmentTask={assignmentPreview}
      boardTask={boardPreview}
      userInfo={userInfo}
      isAssignmentLoading={LoadingState[GET_ASSIGNMENT]}
      isBoardLoading={LoadingState[GET_BOARD]}
      isUserInfoLoading={LoadingState[GET_USER_INFO]}
    />
  ) : (
    <LogOutedMain />
  );
};

export default Main;
