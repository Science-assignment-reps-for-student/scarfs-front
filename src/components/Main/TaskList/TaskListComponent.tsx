import React, { FC } from 'react';
import * as S from '../../../style/Main';

interface Props {
  date: string;
  isProgress: boolean;
  title: string;
}

const TaskListComponent: FC<Props> = ({ date, isProgress, title }) => {
  return (
    <S.TaskListComponent>
      <S.TaskListComponentHeader>
        <p>{date}</p>
        <p>{isProgress ? '진행' : '완료'}</p>
      </S.TaskListComponentHeader>
      <S.TaskListComponentBody>
        <p>{title}</p>
      </S.TaskListComponentBody>
    </S.TaskListComponent>
  );
};

export default TaskListComponent;
