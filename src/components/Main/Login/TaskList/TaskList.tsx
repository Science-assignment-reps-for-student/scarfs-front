import React, { FC } from 'react';
import * as S from '../../style';
import { TaskButton, TaskHeader, TaskListComponent } from '.';

interface Props {
  taskListType: 'calender' | 'megaphone';
  isNotice: boolean;
}

const TaskList: FC<Props> = ({ taskListType, isNotice }) => {
  return (
    <div>
      <TaskHeader taskListType={taskListType} />
      <S.TaskList>
        <TaskListComponent
          date="2020-7-12"
          isProgress={true}
          title="전구깨기 일퀘"
          isNotice={isNotice}
        />
        <TaskListComponent
          date="2020-7-12"
          isProgress={true}
          title="전구깨기 일퀘"
          isNotice={isNotice}
        />
        <TaskListComponent
          date="2020-7-12"
          isProgress={true}
          title="전구깨기 일퀘"
          isNotice={isNotice}
        />
        <TaskButton />
      </S.TaskList>
    </div>
  );
};

export default TaskList;
