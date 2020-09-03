import React, { FC } from 'react';
import * as S from '../Default/TableView/style';
import { AssignmentGuideBoard } from '../Default/TableView';
import { getLocaleDateString } from '../utils';

interface Props {
  board?: AssignmentGuideBoard;
}

const AssignmentGuideTableItem: FC<Props> = ({ board }) => {
  if (typeof board === 'undefined') return null;
  return (
    <S.BodyRow>
      <S.BodyColumn>{board.type}</S.BodyColumn>
      <S.BodyColumn>{board.title}</S.BodyColumn>
      <S.BodyColumn>{getLocaleDateString(board.createdAt)}</S.BodyColumn>
      <S.BodyColumn>{getLocaleDateString(board.deadLine)}</S.BodyColumn>
      <S.BodyColumn>{board.isFinish ? 'O' : 'X'}</S.BodyColumn>
      <S.BodyColumn>{board.view}</S.BodyColumn>
    </S.BodyRow>
  );
};

export default AssignmentGuideTableItem;
