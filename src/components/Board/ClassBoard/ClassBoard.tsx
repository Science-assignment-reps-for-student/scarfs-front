import React, { FC, useState, useEffect, useMemo } from 'react';
import { CardView } from '../Default';
import { BoardHeader, TableView, PaginationBar } from '../Default';
import { ClassCard, ClassTableItem } from './';
import * as S from './style';
import { useHistory } from 'react-router-dom';
import { SBone } from '../../../components/Admin/AdminMain/style';
import { ClassBoard } from '../../../lib/api/ClassBoard';

const dummyBoards = [
  {
    boardId: 1,
    title: '우주 행성',
    previewContent: `돼지돼지돼지돼지돼지돼지돼지돼지돼지돼아 이거 언제 다하냐 응애응애👶👶 내 개발은 언제함?
    나왜 디자이너임?🤬 ㅎㅎ 이번 SMS랑 스카프 디자인 끝나면 디자인
    때려쳐···지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지···`,
    writerName: '정우영',
    createdAt: '2020.07.14 13:00:00',
    view: 5,
  },
  {
    boardId: 2,
    title: '우주 행성',
    previewContent: `돼지돼지돼지돼지돼지돼지돼지돼지돼지돼아 이거 언제 다하냐 응애응애👶👶 내 개발은 언제함?
    나왜 디자이너임?🤬 ㅎㅎ 이번 SMS랑 스카프 디자인 끝나면 디자인
    때려쳐···지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지···`,
    writerName: '정우영',
    createdAt: '2020.07.14 13:00:00',
    view: 5,
  },
  {
    boardId: 3,
    title: '우주 행성',
    previewContent: `돼지돼지돼지돼지돼지돼지돼지돼지돼지돼아 이거 언제 다하냐 응애응애👶👶 내 개발은 언제함?
    나왜 디자이너임?🤬 ㅎㅎ 이번 SMS랑 스카프 디자인 끝나면 디자인
    때려쳐···지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지···`,
    writerName: '정우영',
    createdAt: '2020.07.14 13:00:00',
    view: 5,
  },
  {
    boardId: 4,
    title: '우주 행성',
    previewContent: `돼지돼지돼지돼지돼지돼지돼지돼지돼지돼아 이거 언제 다하냐 응애응애👶👶 내 개발은 언제함?
    나왜 디자이너임?🤬 ㅎㅎ 이번 SMS랑 스카프 디자인 끝나면 디자인
    때려쳐···지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지···`,
    writerName: '정우영',
    createdAt: '2020.07.14 13:00:00',
    view: 5,
  },
  {
    boardId: 5,
    title: '우주 행성',
    previewContent: `돼지돼지돼지돼지돼지돼지돼지돼지돼지돼아 이거 언제 다하냐 응애응애👶👶 내 개발은 언제함?
    나왜 디자이너임?🤬 ㅎㅎ 이번 SMS랑 스카프 디자인 끝나면 디자인
    때려쳐···지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지···`,
    writerName: '정우영',
    createdAt: '2020.07.14 13:00:00',
    view: 5,
  },
  {
    boardId: 6,
    title: '우주 행성',
    previewContent: `돼지돼지돼지돼지돼지돼지돼지돼지돼지돼아 이거 언제 다하냐 응애응애👶👶 내 개발은 언제함?
    나왜 디자이너임?🤬 ㅎㅎ 이번 SMS랑 스카프 디자인 끝나면 디자인
    때려쳐···지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지···`,
    writerName: '정우영',
    createdAt: '2020.07.14 13:00:00',
    view: 5,
  },
  {
    boardId: 7,
    title: '우주 행성',
    previewContent: `돼지돼지돼지돼지돼지돼지돼지돼지돼지돼아 이거 언제 다하냐 응애응애👶👶 내 개발은 언제함?
    나왜 디자이너임?🤬 ㅎㅎ 이번 SMS랑 스카프 디자인 끝나면 디자인
    때려쳐···지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지···`,
    writerName: '정우영',
    createdAt: '2020.07.14 13:00:00',
    view: 5,
  },
];

const boards = dummyBoards.map(board => ({
  ...board,
  id: board.boardId,
}));

interface Props {
  isLoading: boolean;
  classBoard: ClassBoard;
  getBoard: (data: { size: number; page: number }) => void;
}

const ClassBoard: FC<Props> = ({ isLoading, classBoard, getBoard }) => {
  const boards = useMemo(
    () =>
      classBoard.boardResponses.map(board => ({
        ...board,
        id: board.boardId,
      })),
    [classBoard],
  );
  const history = useHistory();
  const [page, setPage] = useState(1);
  const [isTableView, setIsTableView] = useState(true);
  useEffect(() => {
    const ONE_PAGE_BOARD_SIZE = 7;
    getBoard({
      size: ONE_PAGE_BOARD_SIZE,
      page: page,
    });
  }, [page]);
  return (
    <>
      {isLoading ? (
        <SBone width='1280px' height='45px' />
      ) : (
        <BoardHeader
          title='2반 게시판'
          searchTitle=''
          isTableView={isTableView}
          setIsTableView={setIsTableView}
        />
      )}
      {isLoading ? (
        <SBone width='1280px' height='362px' />
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
          <PaginationBar page={page} setPage={setPage} lastPage={classBoard.totalPages} />
          <S.Button onClick={() => history.push('/board/class/write')}>게시물작성</S.Button>
        </S.Footer>
      )}
    </>
  );
};

export default ClassBoard;
