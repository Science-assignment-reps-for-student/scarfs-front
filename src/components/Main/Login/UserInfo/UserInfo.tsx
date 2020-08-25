import React, { FC } from 'react';
import * as S from '../../style';
import UserInfoTask from './UserInfoTask';
import UserInfoButton from './UserInfoButton';
import { UserInfoType } from 'lib/api/Assignment/Assignment';
import ErrorUserInfo from './ErrorUserInfo';

interface Props {
  userInfo: UserInfoType | null;
  isLoading: boolean;
  logout: () => void;
}

const UserInfo: FC<Props> = ({ userInfo, isLoading, logout }) => {
  return (
    <S.UserMain>
      <div>
        {isLoading || !userInfo ? (
          <ErrorUserInfo />
        ) : (
          <>
            <S.UserInfo>
              <S.UserInfoName>
                <span>{userInfo.studentNumber}</span>
                <span>{userInfo.name}</span>
              </S.UserInfoName>
              <UserInfoTask
                unCompleteTaskCount={userInfo.remainingAssignment}
                completeTaskCount={userInfo.completionAssignment}
              />
            </S.UserInfo>
          </>
        )}
        <UserInfoButton logoutButtonHandler={logout} />
      </div>
    </S.UserMain>
  );
};

export default UserInfo;
