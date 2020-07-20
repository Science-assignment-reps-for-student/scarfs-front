import React, { FC } from 'react';
import * as S from '../Default/TableView/style';
import { ClassBoard } from '../Default/TableView';
import { getLocaleDateString } from '../utils';

interface Props {
  board?: ClassBoard;
}

const ClassTableItem: FC<Props> = ({ board }) => {
  if (typeof board === 'undefined') return null;
  return (
    <S.BodyRow>
      <S.BodyColumn>{board.boardId}</S.BodyColumn>
      <S.BodyColumn>{board.title}</S.BodyColumn>
      <S.BodyColumn>{board.writerName}</S.BodyColumn>
      <S.BodyColumn>{getLocaleDateString(board.createdAt)}</S.BodyColumn>
      <S.BodyColumn>{board.view}</S.BodyColumn>
    </S.BodyRow>
  );
};

export default ClassTableItem;
