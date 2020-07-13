import React, { FC } from 'react';
import * as S from '../../../../style/Main';

interface Props {
  taskCount: number;
  isRemainTask: boolean;
}

const UserInfoTaskDetail: FC<Props> = ({ taskCount, isRemainTask }) => {
  return (
    <S.UserInfoTaskDetail>
      <p>{isRemainTask ? '남은 과제' : '제출한 과제'}</p>
      <p className={isRemainTask ? 'remain' : 'complete'}>{taskCount}</p>
    </S.UserInfoTaskDetail>
  );
};

export default UserInfoTaskDetail;
