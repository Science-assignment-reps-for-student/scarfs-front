import React, { FC } from 'react';
import * as S from '../../style';
import UserInfoTaskDetail from './UserInfoTaskDetail';

const UserInfoTask: FC = () => {
  return (
    <S.UserInfoTask>
      <UserInfoTaskDetail isRemainTask={true} taskCount={10} />
      <UserInfoTaskDetail isRemainTask={false} taskCount={10} />
    </S.UserInfoTask>
  );
};

export default UserInfoTask;
