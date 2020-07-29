import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import * as S from '../../style';
import UserInfoTask from './UserInfoTask';
import UserInfoButton from './UserInfoButton';
import { getUserInfo, MainState } from '../../../../modules/reducer/Main';
import { stateChange, getStateCallback } from '../../../../lib/function';

const UserInfo: FC = () => {
  const { userInfo } = useSelector(getStateCallback<MainState>('Main'));
  const getUserInfoChange = stateChange(getUserInfo);
  useEffect(() => {
    getUserInfoChange();
  }, []);
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
