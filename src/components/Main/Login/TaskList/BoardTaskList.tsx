import React, { FC, useCallback } from 'react';
import * as S from '../../style';
import { TaskButton, TaskHeader, BoardTaskListComponent, ErrorListComponent } from '.';
import { BoardType } from 'lib/api/Assignment/Assignment';

interface Props {
  boardPreview: BoardType;
  isLoading: boolean;
}

const BoardTaskList: FC<Props> = ({ boardPreview, isLoading }) => {
  const isDataAble = useCallback(
    (boardType: BoardType, isLoading: boolean) =>
      boardType && boardType.applicationResponses && !isLoading ? true : false,
    [],
  );
  const setBoardComponents = useCallback((boardPreview: BoardType): React.ReactNode => {
    if (!isDataAble(boardPreview, isLoading)) return <ErrorListComponent />;
    const buffer = [];
    boardPreview.applicationResponses.map(board => {
      buffer.push(
        <BoardTaskListComponent
          key={'board' + board.notice_id}
          date={board.created_at}
          title={board.title}
          id={board.notice_id}
        />,
      );
    });
    return buffer;
  }, []);
  return (
    <div>
      <TaskHeader taskListType='megaphone' />
      <S.TaskList>
        {setBoardComponents(boardPreview)}
        {isDataAble(boardPreview, isLoading) ? <TaskButton link='/board/notice' /> : ''}
      </S.TaskList>
    </div>
  );
};

export default BoardTaskList;
