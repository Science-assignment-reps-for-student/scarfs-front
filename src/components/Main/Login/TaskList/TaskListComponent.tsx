import React, { FC } from 'react';
import * as S from '../../style';

interface Props {
  date: string;
  isProgress: boolean;
  title: string;
  isNotice: boolean;
}

const TaskListComponent: FC<Props> = ({ date, isProgress, title }) => {
  return (
    <S.TaskListComponent>
      <S.TaskListComponentHeader>
        <p>{date}</p>
        <p className="point">{isProgress ? '진행' : '완료'}</p>
      </S.TaskListComponentHeader>
      <S.TaskListComponentBody>
        <p>{title}</p>
      </S.TaskListComponentBody>
    </S.TaskListComponent>
  );
};

export default TaskListComponent;
