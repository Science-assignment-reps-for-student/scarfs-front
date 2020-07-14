import React, { FC } from 'react';
import * as S from '../../style';
import UserInfoTask from './UserInfoTask';
import UserInfoButton from './UserInfoButton';

const UserInfo: FC = ({}) => {
  return (
    <S.UserMain>
      <div>
        <S.UserInfo>
          <S.UserInfoName>1학년 2반 준상오</S.UserInfoName>
          <UserInfoTask />
        </S.UserInfo>
        <UserInfoButton />
      </div>
    </S.UserMain>
  );
};

export default UserInfo;
