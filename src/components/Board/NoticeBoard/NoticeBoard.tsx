import React, { FC, useState, useEffect, useMemo } from 'react';
import { BoardHeader, TableView, PaginationBar, CardView } from '../Default';
import { NoticeTableItem, NoticeCard } from './';
import { BoardType } from '../../../lib/api/Assignment/Assignment';
import { ErrorType } from '../../../lib/type';
import { SBone } from '../../../components/Admin/AdminMain/style';
import queryString from 'query-string';

interface Props {
  getBoards: (page: number) => void;
  isLoading: boolean;
  board: BoardType;
  getBoardsError: ErrorType;
  searchBoards: (query: string, page: number) => void;
  resetMain: () => void;
}

const NoticeBoard: FC<Props> = ({
  getBoards,
  isLoading,
  board,
  getBoardsError,
  searchBoards,
  resetMain,
}) => {
  const { query } = queryString.parse(location.search);
  const [isTableView, setIsTableView] = useState(true);
  const [page, setPage] = useState(1);
  const boards = useMemo(
    () =>
      board &&
      board.applicationResponses.map(board => ({
        ...board,
        id: board.notice_id,
      })),
    [board],
  );

  useEffect(() => {
    return () => {
      resetMain();
    };
  }, []);

  useEffect(() => {
    if (typeof query === 'object') {
      searchBoards(query[0], 1);
    } else if (query) {
      searchBoards(query, 1);
    } else {
      getBoards(1);
    }
    setPage(1);
  }, [query]);

  useEffect(() => {
    if (typeof query === 'object') {
      searchBoards(query[0], page);
    } else if (query) {
      searchBoards(query, page);
    } else {
      getBoards(page);
    }
  }, [page]);

  useEffect(() => {
    if (getBoardsError?.status) {
      alert(`Error code: ${getBoardsError.status} 공지 불러오기 실패!`);
    }
  }, [getBoardsError]);
  return (
    <>
      {isLoading ? (
        <SBone width='1280px' height='87px' />
      ) : (
        <BoardHeader
          title='공지사항'
          searchTitle='공지'
          isTableView={isTableView}
          setIsTableView={setIsTableView}
        />
      )}
      {isLoading ? (
        <SBone width='1280px' height='362px' margin='32px 0 21px' />
      ) : isTableView ? (
        <TableView
          boards={boards}
          BoardTemplate={NoticeTableItem}
          columnNames={['번호', '제목', '등록일', '조회수']}
        />
      ) : (
        <CardView boards={boards} CardTemplate={NoticeCard} />
      )}
      {isLoading ? (
        <SBone width='1280px' height='27px' />
      ) : (
        <PaginationBar page={page} setPage={setPage} lastPage={board && board.totalPages} />
      )}
    </>
  );
};

export default NoticeBoard;
