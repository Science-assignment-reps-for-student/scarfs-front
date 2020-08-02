import React, { FC, useEffect, useCallback } from 'react';
import * as S from '../../style';
import { useSelector } from 'react-redux';
import { TaskButton, TaskHeader, TaskListComponent, ErrorListComponent } from '.';
import { stateChange, getStateCallback } from '../../../../lib/function/index';
import { MainState } from '../../../../modules/reducer/Main';
import { HeaderState, sendRefreshToken } from '../../../../modules/reducer/Header';
import { RefreshTokenThunkType } from 'lib/api/Header/signin';

interface Props {
  taskListType: 'calender' | 'megaphone';
  isNotice: boolean;
  getTask: () => void;
}

const TaskList: FC<Props> = ({ taskListType, isNotice, getTask }) => {
  const { refreshToken, loading } = useSelector(getStateCallback<HeaderState>('Header'));
  const getTaskChange = stateChange(getTask);
  const refreshTokenChange = stateChange<RefreshTokenThunkType>(sendRefreshToken);
  const { boardPreview, assignmentPreview, error } = useSelector(
    getStateCallback<MainState>('Main'),
  );
  const serverErrorHandler = useCallback((status: number) => {
    switch (status) {
      case 401: {
        const params = {
          serverType: {
            refreshToken,
          },
          loading,
          callback: getTask,
        };
        refreshTokenChange(params);
      }
    }
  }, []);
  useEffect(() => {
    if (!error) return;
    const status = error.response.status;
    serverErrorHandler(status);
  }, [error]);
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
        <TaskButton link={isNotice ? '/board/class' : '/board/assignment-guide'} />
      </S.TaskList>
    </div>
  );
};

export default TaskList;
