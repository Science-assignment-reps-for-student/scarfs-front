import React, { FC, useState, useEffect, useMemo } from 'react';
import { BoardHeader, TableView, PaginationBar, CardView } from '../Default';
import { AssignmentGuideTableItem, AssignmentGuideCard } from './';
import { AssignmentType } from '../../../lib/api/Assignment/Assignment';
import { ErrorType } from '../../../lib/type';
import { SBone } from '../../../components/Admin/AdminMain/style';
import { useUser, useAssignmentClassNumber } from '../../../lib/function';
import * as S from '../ClassBoard/style';

interface Props {
  getBoards: (page: number, classNumber?: number | '') => void;
  isLoading: boolean;
  board: AssignmentType;
  getBoardsError: ErrorType;
  resetMain: () => void;
}

const AssignmentGuideBoard: FC<Props> = ({
  getBoards,
  isLoading,
  board,
  getBoardsError,
  resetMain,
}) => {
  const { type } = useUser();
  const [isTableView, setIsTableView] = useState(true);
  const [classNumber, setClassNumber] = useAssignmentClassNumber();
  const [page, setPage] = useState(1);
  const boards = useMemo(
    () =>
      board &&
      board.applicationResponses.map(board => ({
        ...board,
        id: board.assignment_id,
      })),
    [board],
  );

  const selectChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setClassNumber(parseInt(e.target.value));
  };

  useEffect(() => {
    return () => {
      resetMain();
    };
  }, []);
  useEffect(() => {
    if (type === 'ADMIN') {
      getBoards(page, classNumber);
    } else if (type === 'STUDENT') {
      getBoards(page);
    }
  }, [page, classNumber, type]);

  useEffect(() => {
    if (getBoardsError?.status) {
      alert(`Error code: ${getBoardsError.status} 과제 불러오기 실패!`);
    }
  }, [getBoardsError]);

  return (
    <>
      {isLoading ? (
        <SBone width='1280px' height='87px' />
      ) : (
        <BoardHeader
          title={`${board && board.class_number}반 과제안내`}
          searchTitle='과제'
          isTableView={isTableView}
          setIsTableView={setIsTableView}
        >
          {type === 'ADMIN' && (
            <S.Select value={classNumber} onChange={selectChangeHandler}>
              <option value='1'>1반</option>
              <option value='2'>2반</option>
              <option value='3'>3반</option>
              <option value='4'>4반</option>
            </S.Select>
          )}
        </BoardHeader>
      )}

      {isLoading ? (
        <SBone width='1280px' height='362px' margin='32px 0 21px' />
      ) : isTableView ? (
        <TableView
          columnNames={['유형', '제목', '등록일', '기한', '제출', '조회수']}
          boards={boards}
          BoardTemplate={AssignmentGuideTableItem}
        />
      ) : (
        <CardView boards={boards} CardTemplate={AssignmentGuideCard} />
      )}
      {isLoading ? (
        <SBone width='1280px' height='27px' />
      ) : (
        <PaginationBar page={page} setPage={setPage} lastPage={board && board.totalPages} />
      )}
    </>
  );
};

export default AssignmentGuideBoard;
