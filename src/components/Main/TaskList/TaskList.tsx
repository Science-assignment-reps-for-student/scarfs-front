import React, { FC } from 'react';
import * as S from '../../../style/Main';
import { TaskButton, TaskHeader, TaskListComponent } from '.';

interface Props {
  taskListType: 'calender' | 'megaphone';
}

const TaskList: FC<Props> = ({ taskListType }) => {
  return (
    <>
      <TaskHeader taskListType={taskListType} />
      <S.TaskList>
        <TaskListComponent date="2020-7-12" isProgress={true} title="전구깨기 일퀘" />
        <TaskListComponent date="2020-7-12" isProgress={true} title="전구깨기 일퀘" />
        <TaskListComponent date="2020-7-12" isProgress={true} title="전구깨기 일퀘" />
        <TaskButton />
      </S.TaskList>
    </>
  );
};

export default TaskList;
