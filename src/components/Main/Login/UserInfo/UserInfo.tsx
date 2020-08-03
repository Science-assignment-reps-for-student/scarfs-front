import React, { FC, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import * as S from '../../style';
import UserInfoTask from './UserInfoTask';
import UserInfoButton from './UserInfoButton';
import { getUserInfo, MainState } from '../../../../modules/reducer/Main';
import { stateChange, getStateCallback } from '../../../../lib/function';
import { HeaderState, sendRefreshToken } from '../../../../modules/reducer/Header';

const UserInfo: FC = () => {
  const { userInfo, error } = useSelector(getStateCallback<MainState>('Main'));
  const { loading, refreshToken } = useSelector(getStateCallback<HeaderState>('Header'));
  const refreshTokenChange = stateChange(sendRefreshToken);
  const getUserInfoChange = stateChange(getUserInfo);
  const serverErrorHandler = useCallback((status: number) => {
    switch (status) {
      case 401: {
        const params = {
          serverType: {
            refreshToken,
          },
          loading,
          callback: getUserInfoChange,
        };
        refreshTokenChange(params);
      }
    }
  }, []);
  useEffect(() => {
    getUserInfoChange();
  }, []);
  useEffect(() => {
    if (!error) return;
    const statusCode = error.response.status;
    serverErrorHandler(statusCode);
  }, [error]);
  return (
    <S.UserMain>
      <div>
        <S.UserInfo>
          <S.UserInfoName>{userInfo.name}</S.UserInfoName>
          <UserInfoTask
            unCompleteTaskCount={userInfo.remainingAssignment}
            completeTaskCount={userInfo.completionAssignment}
          />
        </S.UserInfo>
        <UserInfoButton />
      </div>
    </S.UserMain>
  );
};

export default UserInfo;
