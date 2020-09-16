import React, { FC } from 'react';
import * as S from '../../style';
import UserInfoTaskDetail from './UserInfoTaskDetail';

interface Props {
  unCompleteTaskCount: number;
  completeTaskCount: number;
}

const UserInfoTask: FC<Props> = ({ unCompleteTaskCount, completeTaskCount }) => {
  return (
    <S.UserInfoTask>
      <UserInfoTaskDetail isRemainTask={true} taskCount={unCompleteTaskCount} />
      <UserInfoTaskDetail isRemainTask={false} taskCount={completeTaskCount} />
    </S.UserInfoTask>
  );
};

export default UserInfoTask;
