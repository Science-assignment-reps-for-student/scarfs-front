import React, { FC } from 'react';
import * as S from '../Default/TableView/style';
import { NoticeBoard } from '../Default/TableView';
import { getLocaleDateString } from '../utils';

interface Props {
  board?: NoticeBoard;
}

const NoticeTableItem: FC<Props> = ({ board }) => {
  if (typeof board === 'undefined') return null;
  return (
    <S.BodyRow>
      <S.BodyColumn>{board.boardId}</S.BodyColumn>
      <S.BodyColumn>{board.title}</S.BodyColumn>
      <S.BodyColumn>{getLocaleDateString(board.createdAt)}</S.BodyColumn>
      <S.BodyColumn>{board.view}</S.BodyColumn>
    </S.BodyRow>
  );
};

export default NoticeTableItem;
