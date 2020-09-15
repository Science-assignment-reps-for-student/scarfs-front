import React, { FC, useState, useEffect, useMemo } from 'react';
import { CardView } from '../Default';
import { BoardHeader, TableView, PaginationBar } from '../Default';
import { ClassCard, ClassTableItem } from './';
import * as S from './style';
import { useHistory } from 'react-router-dom';
import { SBone } from '../../../components/Admin/AdminMain/style';
import { ClassBoard } from '../../../lib/api/ClassBoard';
import { useUser, useWriteClassNumber, useToken, stateChange } from '../../../lib/function';
import queryString from 'query-string';
import { ErrorType } from '../../../lib/type';
import { sendRefreshToken } from '../../../modules/reducer/Header';

const ONE_PAGE_BOARD_SIZE = 7;

interface Props {
  isLoading: boolean;
  classBoard: ClassBoard;
  getBoard: (data: { size: number; page: number; classNumber?: number }) => void;
  getBoardError: ErrorType;
  searchBoard: (query: string, page: number) => void;
  searchBoardError: ErrorType;
  resetBoard: () => void;
}

const ClassBoard: FC<Props> = ({
  isLoading,
  classBoard,
  getBoard,
  getBoardError,
  searchBoard,
  searchBoardError,
  resetBoard,
}) => {
  const [, refreshToken] = useToken();
  const refreshTokenChange = stateChange(sendRefreshToken);
  const { query } = queryString.parse(location.search);
  const user = useUser();
  const [classNumber, setClassNumber] = useWriteClassNumber();
  const { type } = user;
  const boards = useMemo(
    () =>
      classBoard.application_responses.map(board => ({
        ...board,
        id: board.board_id,
      })),
    [classBoard],
  );
  const history = useHistory();
  const [page, setPage] = useState(1);
  const isTableViewInLocalStorage = localStorage.getItem('isTableView');
  const [isTableView, setIsTableView] = useState(
    isTableViewInLocalStorage === 'true' ? true : false,
  );

  const selectChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setClassNumber(parseInt(e.target.value));
  };

  useEffect(() => {
    return () => {
      resetBoard();
    };
  }, []);

  useEffect(() => {
    if (!query) {
      if (type === 'ADMIN') {
        getBoard({ size: ONE_PAGE_BOARD_SIZE, page, classNumber });
      }
    }
  }, [type, classNumber]);

  useEffect(() => {
    if (typeof query === 'object') {
      searchBoard(query[0], 1);
    } else if (query) {
      searchBoard(query, 1);
    } else {
      if (type === 'ADMIN') {
        getBoard({ page: 1, size: ONE_PAGE_BOARD_SIZE, classNumber });
      } else if (type === 'STUDENT') {
        getBoard({ page: 1, size: ONE_PAGE_BOARD_SIZE });
      }
    }
    setPage(1);
  }, [query, classNumber]);

  useEffect(() => {
    if (typeof query === 'object') {
      searchBoard(query[0], page);
    } else if (query) {
      searchBoard(query, page);
    } else {
      if (type === 'ADMIN') {
        getBoard({ page, classNumber, size: ONE_PAGE_BOARD_SIZE });
      } else if (type === 'STUDENT') {
        getBoard({ page, size: ONE_PAGE_BOARD_SIZE });
      }
    }
  }, [page, classNumber]);

  useEffect(() => {
    if (getBoardError.status === 403) {
      const params = {
        serverType: {
          refreshToken,
        },
        callback: () => getBoard(),
        page: 'ClassBoard/getBoard',
      };
      refreshTokenChange(params);
    } else if (getBoardError.status) {
      alert(`ERROR: CODE[${getBoardError.status}] 게시글 불러오기 실패!`);
    }
  }, [getBoardError]);

  useEffect(() => {
    if (getBoardError.status === 403) {
      const params = {
        serverType: {
          refreshToken,
        },
        callback: () => {
          if (typeof query === 'object') {
            searchBoard(query[0], page);
          } else if (query) {
            searchBoard(query, page);
          }
        },
        page: 'ClassBoard/searchBoard',
      };
      refreshTokenChange(params);
    } else if (getBoardError.status) {
      alert(`ERROR: CODE[${getBoardError.status}] 게시글 검색 실패!`);
    }
  }, [searchBoardError]);

  return (
    <>
      {isLoading ? (
        <SBone width='1280px' height='95px' />
      ) : (
        <BoardHeader
          title={
            type === 'ADMIN' && query
              ? '관리자의 경우 반에 해당하는 검색결과가 옳바르지 않을 수 있습니다.'
              : classBoard
              ? classBoard.class_number
                ? `${classBoard.class_number}반 게시판`
                : ''
              : ''
          }
          searchTitle='게시판'
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
        <SBone width='1280px' height='362px' margin='25px 0 21px' />
      ) : isTableView ? (
        <TableView
          columnNames={['번호', '제목', '작성자', '등록일', '조회수']}
          boards={boards}
          BoardTemplate={ClassTableItem}
        />
      ) : (
        <CardView boards={boards} CardTemplate={ClassCard} />
      )}
      {isLoading ? (
        <SBone width='1280px' height='50px' />
      ) : (
        <S.Footer>
          <PaginationBar page={page} setPage={setPage} lastPage={classBoard.total_pages} />
          {type === 'ADMIN' && (
            <S.Button onClick={() => history.push('/board/class/write')}>게시글작성</S.Button>
          )}
        </S.Footer>
      )}
    </>
  );
};

export default ClassBoard;
