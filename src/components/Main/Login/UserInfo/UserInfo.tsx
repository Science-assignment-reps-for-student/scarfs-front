import React, { FC } from 'react';
import * as S from '../../style';
import UserInfoTask from './UserInfoTask';
import UserInfoButton from './UserInfoButton';
import { UserInfoType } from 'lib/api/Assignment/Assignment';
import ErrorUserInfo from './ErrorUserInfo';

interface Props {
  userInfo: UserInfoType | null;
  isLoading: boolean;
}

const UserInfo: FC<Props> = ({ userInfo, isLoading }) => {
  return (
    <S.UserMain>
      <div>
        {isLoading || !userInfo ? (
          <ErrorUserInfo />
        ) : (
          <>
            <S.UserInfo>
              <S.UserInfoName>{userInfo.name}</S.UserInfoName>
              <UserInfoTask
                unCompleteTaskCount={userInfo.remainingAssignment}
                completeTaskCount={userInfo.completionAssignment}
              />
            </S.UserInfo>
            <UserInfoButton />
          </>
        )}
      </div>
    </S.UserMain>
  );
};

export default UserInfo;
