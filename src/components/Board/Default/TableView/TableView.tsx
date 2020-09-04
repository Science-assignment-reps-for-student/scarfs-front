import React, { FC } from 'react';
import * as S from './style';
import { ClassBoardItem } from '../../../../lib/api/ClassBoard';
import { AssignmentElementType } from '../../../../lib/api/Assignment/Assignment';

export interface AssignmentGuideBoard extends AssignmentElementType {
  id: number;
}

export interface ClassBoard extends ClassBoardItem {
  id: number;
}

export interface NoticeBoard {
  id: number;
  boardId: number;
  title: string;
  previewContent: string;
  createdAt: string;
  view: number;
}

interface Props {
  columnNames: string[];
  boards?: Array<AssignmentGuideBoard | NoticeBoard | ClassBoard>;
  BoardTemplate: React.FC<{
    board?: AssignmentGuideBoard | NoticeBoard | ClassBoard;
  }>;
}

const TableView: FC<Props> = ({ columnNames, boards, BoardTemplate }) => {
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
        {boards && boards.map(board => <BoardTemplate key={board.id} board={board} />)}
      </S.TableBody>
    </S.TableViewWrapper>
  );
};

export default TableView;
