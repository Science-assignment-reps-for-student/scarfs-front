import React, { FC, useState } from 'react';
import { Board } from '../Default';
import { BoardHeader, TableView, PaginationBar, CardView } from '../Default';
import { AssignmentGuideTableItem, AssignmentGuideCard } from './';

const dummyBoards = [
  {
    homeworkId: 1,
    type: '팀',
    title: '우주 행성',
    previewContent: `돼지돼지돼지돼지돼지돼지돼지돼지돼지돼아 이거 언제 다하냐 응애응애👶👶 내 개발은 언제함?
    나왜 디자이너임?🤬 ㅎㅎ 이번 SMS랑 스카프 디자인 끝나면 디자인
    때려쳐···지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지···`,
    createdAt: '2020.07.14 13:00:00',
    deadLine: '2020.07.14 13:00:00',
    isFinish: true,
    view: 5,
  },
  {
    homeworkId: 2,
    type: '팀',
    title: '우주 행성',
    previewContent: `돼지돼지돼지돼지돼지돼지돼지돼지돼지돼아 이거 언제 다하냐 응애응애👶👶 내 개발은 언제함?
    나왜 디자이너임?🤬 ㅎㅎ 이번 SMS랑 스카프 디자인 끝나면 디자인
    때려쳐···지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지···`,
    createdAt: '2020.07.14 13:00:00',
    deadLine: '2020.07.14 13:00:00',
    isFinish: true,
    view: 5,
  },
  {
    homeworkId: 3,
    type: '팀',
    title: '우주 행성',
    previewContent: `돼지돼지돼지돼지돼지돼지돼지돼지돼지돼아 이거 언제 다하냐 응애응애👶👶 내 개발은 언제함?
    나왜 디자이너임?🤬 ㅎㅎ 이번 SMS랑 스카프 디자인 끝나면 디자인
    때려쳐···지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지···`,
    createdAt: '2020.07.14 13:00:00',
    deadLine: '2020.07.14 13:00:00',
    isFinish: true,
    view: 5,
  },
  {
    homeworkId: 4,
    type: '팀',
    title: '우주 행성',
    previewContent: `돼지돼지돼지돼지돼지돼지돼지돼지돼지돼아 이거 언제 다하냐 응애응애👶👶 내 개발은 언제함?
    나왜 디자이너임?🤬 ㅎㅎ 이번 SMS랑 스카프 디자인 끝나면 디자인
    때려쳐···지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지···`,
    createdAt: '2020.07.14 13:00:00',
    deadLine: '2020.07.14 13:00:00',
    isFinish: true,
    view: 5,
  },
  {
    homeworkId: 5,
    type: '팀',
    title: '우주 행성',
    previewContent: `돼지돼지돼지돼지돼지돼지돼지돼지돼지돼아 이거 언제 다하냐 응애응애👶👶 내 개발은 언제함?
    나왜 디자이너임?🤬 ㅎㅎ 이번 SMS랑 스카프 디자인 끝나면 디자인
    때려쳐···지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지···`,
    createdAt: '2020.07.14 13:00:00',
    deadLine: '2020.07.14 13:00:00',
    isFinish: false,
    view: 5,
  },
  {
    homeworkId: 6,
    type: '실험',
    title: '우주 행성',
    previewContent: `돼지돼지돼지돼지돼지돼지돼지돼지돼지돼아 이거 언제 다하냐 응애응애👶👶 내 개발은 언제함?
    나왜 디자이너임?🤬 ㅎㅎ 이번 SMS랑 스카프 디자인 끝나면 디자인
    때려쳐···지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지···`,
    createdAt: '2020.07.14 13:00:00',
    deadLine: '2020.07.14 13:00:00',
    isFinish: true,
    view: 5,
  },
  {
    homeworkId: 7,
    type: '개인',
    title: '우주 행성',
    previewContent: `돼지돼지돼지돼지돼지돼지돼지돼지돼지돼아 이거 언제 다하냐 응애응애👶👶 내 개발은 언제함?
    나왜 디자이너임?🤬 ㅎㅎ 이번 SMS랑 스카프 디자인 끝나면 디자인
    때려쳐···지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지돼지···`,
    createdAt: '2020.07.14 13:00:00',
    deadLine: '2020.07.14 13:00:00',
    isFinish: true,
    view: 5,
  },
];

const boards = dummyBoards.map(board => ({
  ...board,
  id: board.homeworkId,
}));

const AssignmentGuideBoard: FC = () => {
  const [isTableView, setIsTableView] = useState(false);
  return (
    <Board>
      <BoardHeader
        title='과제안내'
        searchTitle='과제'
        isTableView={isTableView}
        setIsTableView={setIsTableView}
      />
      {isTableView ? (
        <TableView
          columnNames={['유형', '제목', '등록일', '기한', '제출', '조회수']}
          boards={boards}
          BoardTemplate={AssignmentGuideTableItem}
        />
      ) : (
        <CardView boards={boards} CardTemplate={AssignmentGuideCard} />
      )}
      <PaginationBar />
    </Board>
  );
};

export default AssignmentGuideBoard;
