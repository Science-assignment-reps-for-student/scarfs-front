import React, { FC, useEffect, useCallback } from 'react';
import * as S from '../../style';
import { useSelector } from 'react-redux';
import { TaskButton, TaskHeader, TaskListComponent, ErrorListComponent } from '.';
import { stateChange, getStateCallback } from '../../../../lib/function/index';
import { MainState } from '../../../../modules/reducer/Main';

interface Props {
  taskListType: 'calender' | 'megaphone';
  isNotice: boolean;
  getTask: () => void;
}

const TaskList: FC<Props> = ({ taskListType, isNotice, getTask }) => {
  const { boardPreview, assignmentPreview } = useSelector(getStateCallback<MainState>('Main'));
  const getTaskChange = stateChange(getTask);
  const setBoardComponents = useCallback((): React.ReactNode => {
    if (!boardPreview) return <ErrorListComponent />;
    const buffer = [];
    for (let i: number = 0; i < 3; i++) {
      const board = boardPreview.boardResponses[i];
      buffer.push(
        <TaskListComponent
          date={board.createdAt}
          isProgress={false}
          title={board.title}
          isNotice={false}
        />,
      );
    }
    return buffer;
  }, [isNotice, boardPreview]);
  const setAssignmentComponents = useCallback((): React.ReactNode => {
    if (!boardPreview) return <ErrorListComponent />;
    const buffer = [];
    for (let i: number = 0; i < 3; i++) {
      const assignment = assignmentPreview.boardResponses[i];
      buffer.push(
        <TaskListComponent
          date={assignment.createdAt}
          isProgress={assignment.isFinish}
          title={assignment.title}
          isNotice={false}
        />,
      );
    }
    return buffer;
  }, [isNotice, assignmentPreview]);
  useEffect(() => {
    getTaskChange();
  }, []);
  return (
    <div>
      <TaskHeader taskListType={taskListType} />
      <S.TaskList>
        {isNotice ? setBoardComponents() : setAssignmentComponents()}
        <TaskButton />
      </S.TaskList>
    </div>
  );
};

export default TaskList;
