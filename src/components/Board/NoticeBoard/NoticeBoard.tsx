import React, { FC, useState, useEffect, useMemo } from 'react';
import { BoardHeader, TableView, PaginationBar, CardView } from '../Default';
import { NoticeTableItem, NoticeCard } from './';
import { BoardType, getBoard } from '../../../lib/api/Assignment/Assignment';
import { ErrorType } from '../../../lib/type';
import { SBone, Button } from '../../../components/Admin/AdminMain/style';
import queryString from 'query-string';
import { useToken, stateChange } from '../../../lib/function';
import { sendRefreshToken } from '../../../modules/reducer/Header';
import { useHistory } from 'react-router-dom';

interface Props {
  getBoards: (page: number) => void;
  isLoading: boolean;
  board: BoardType;
  getBoardsError: ErrorType;
  searchNoticeBoardError: ErrorType;
  searchBoards: (query: string, page: number) => void;
  resetMain: () => void;
}

const NoticeBoard: FC<Props> = ({
  getBoards,
  isLoading,
  board,
  getBoardsError,
  searchNoticeBoardError,
  searchBoards,
  resetMain,
}) => {
  const history = useHistory();
  const [, refreshToken] = useToken();
  const refreshTokenChange = stateChange(sendRefreshToken);
  const { query } = queryString.parse(location.search);
  const isTableViewInLocalStorage = localStorage.getItem('isTableView');
  const [isTableView, setIsTableView] = useState(
    isTableViewInLocalStorage === 'true' ? true : false,
  );
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
    if (getBoardsError.status === 403) {
      const params = {
        serverType: {
          refreshToken,
        },
        callback: () => getBoards(page),
        page: 'NoticeBoard/getBoards',
      };
      refreshTokenChange(params);
    } else if (getBoardsError.status) {
      alert(`Error code: ${getBoardsError.status} 공지 불러오기 실패!`);
    }
  }, [getBoardsError]);

  useEffect(() => {
    if (searchNoticeBoardError.status === 403) {
      const params = {
        serverType: {
          refreshToken,
        },
        callback: () => {
          if (typeof query === 'object') {
            searchBoards(query[0], page);
          } else if (query) {
            searchBoards(query, page);
          }
        },
        page: 'NoticeBoard/searchBoards',
      };
      refreshTokenChange(params);
    } else if (searchNoticeBoardError.status) {
      alert(`Error code: ${searchNoticeBoardError.status} 공지 검색 실패!`);
    }
  }, [searchNoticeBoardError]);

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
      <div>
        <Button onClick={() => history.push('/board/notice/write')}>공지사항 작성</Button>
      </div>
      {!boards || isLoading ? (
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
