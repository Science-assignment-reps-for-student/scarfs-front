import React, { FC, useState, useEffect, useMemo } from 'react';
import { CardView } from '../Default';
import { BoardHeader, TableView, PaginationBar } from '../Default';
import { ClassCard, ClassTableItem } from './';
import * as S from './style';
import { useHistory } from 'react-router-dom';
import { SBone } from '../../../components/Admin/AdminMain/style';
import { ClassBoard } from '../../../lib/api/ClassBoard';
import { useUser, useWriteClassNumber } from '../../../lib/function';

interface Props {
  isLoading: boolean;
  classBoard: ClassBoard;
  getBoard: (data: { size: number; page: number; classNumber?: number }) => void;
}

const ClassBoard: FC<Props> = ({ isLoading, classBoard, getBoard }) => {
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
  const [isTableView, setIsTableView] = useState(true);

  const selectChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setClassNumber(parseInt(e.target.value));
  };

  useEffect(() => {
    const ONE_PAGE_BOARD_SIZE = 7;
    if (type === 'STUDENT') {
      getBoard({
        size: ONE_PAGE_BOARD_SIZE,
        page: page,
      });
    } else if (type === 'ADMIN') {
      getBoard({
        size: ONE_PAGE_BOARD_SIZE,
        page: page,
        classNumber,
      });
    }
  }, [type, page, classNumber]);
  return (
    <>
      {isLoading ? (
        <SBone width='1280px' height='95px' />
      ) : (
        <BoardHeader
          title={`${classBoard.class_number}반 게시판`}
          searchTitle=''
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
          columnNames={['유형', '제목', '작성자', '등록일', '조회수']}
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
