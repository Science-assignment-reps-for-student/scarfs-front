import React, { FC, useCallback } from 'react';
import * as S from '../../style';
import { TaskButton, TaskHeader, BoardTaskListComponent, ErrorListComponent } from '.';
import { BoardType } from 'lib/api/Assignment/Assignment';

interface Props {
  boardPreview: BoardType;
  isLoading: boolean;
}

const BoardTaskList: FC<Props> = ({ boardPreview, isLoading }) => {
  const isDataAble = (boardType: BoardType, isLoading: boolean) =>
    boardType && !isLoading ? true : false;

  const setBoardComponents = useCallback(
    (boardPreview: BoardType): React.ReactNode => {
      if (!isDataAble(boardPreview, isLoading)) return <ErrorListComponent />;
      const buffer = [];
      for (let i: number = 0; i < 3; i++) {
        const board = boardPreview.boardResponses[i];
        buffer.push(<BoardTaskListComponent date={board.createdAt} title={board.title} />);
      }
      return buffer;
    },
    [boardPreview],
  );
  return (
    <div>
      <TaskHeader taskListType='calender' />
      <S.TaskList>
        {setBoardComponents(boardPreview)}
        {isDataAble(boardPreview, isLoading) ? <TaskButton link='/board/class' /> : ''}
      </S.TaskList>
    </div>
  );
};

export default BoardTaskList;
