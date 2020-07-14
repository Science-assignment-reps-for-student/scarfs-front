import React, { FC } from 'react';
import * as S from '../../style';

interface Props {
  taskListType: 'calender' | 'megaphone';
}

enum taskListText {
  'calender' = '진행중인 과제',
  'megaphone' = '공지사항',
}

const TaskHeader: FC<Props> = ({ taskListType }) => {
  return (
    <S.TaskListHeader>
      <div className={taskListType} />
      <p>{taskListText[taskListType]}</p>
    </S.TaskListHeader>
  );
};

export default TaskHeader;
