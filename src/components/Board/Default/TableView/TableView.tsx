import React, { FC } from 'react';
import * as S from './style';

export interface AssignmentGuideBoard {
  homeworkId: number;
  type: string;
  title: string;
  previewContent: string;
  createdAt: Date;
  deadLine: Date;
  isFinish: boolean;
  view: number;
}

export interface ClassBoard {
  boardId: number;
  title: string;
  previewContent: string;
  writerName: string;
  createdAt: Date;
  view: number;
}

export interface NoticeBoard {
  boardId: number;
  title: string;
  previewContent: string;
  createdAt: Date;
  view: number;
}

interface Props {
  keyName: 'homeworkId' | 'boardId';
  columnNames: string[];
  boards?: Array<AssignmentGuideBoard | NoticeBoard | ClassBoard>;
  BoardTemplate: React.FC<{
    board?: AssignmentGuideBoard | NoticeBoard | ClassBoard;
  }>;
}

const TableView: FC<Props> = ({ keyName, columnNames, boards, BoardTemplate }) => {
  return (
    <S.TableViewWrapper>
      <colgroup>
        {columnNames.map(name => {
          if (name === '제목') return <col key={name} width='*' />;
          return <col key={name} width='10%' />;
        })}
      </colgroup>
      <S.TableHeader>
        <S.HeaderRow>
          {columnNames.map(name => (
            <S.HeaderColumn key={name}>{name}</S.HeaderColumn>
          ))}
        </S.HeaderRow>
      </S.TableHeader>
      <S.TableBody>
        {boards.map(board => (
          <BoardTemplate key={board[keyName]} board={board} />
        ))}
      </S.TableBody>
    </S.TableViewWrapper>
  );
};

export default TableView;
