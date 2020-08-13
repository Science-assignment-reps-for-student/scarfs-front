import React, { FC } from 'react';
import * as S from '../Default/TableView/style';
import { ClassBoard } from '../Default/TableView';
import { getLocaleDateString } from '../utils';
import { useHistory } from 'react-router-dom';

interface Props {
  board?: ClassBoard;
}

const ClassTableItem: FC<Props> = ({ board }) => {
  const history = useHistory();
  if (typeof board === 'undefined') return null;
  return (
    <S.BodyRow>
      <S.BodyColumn>{board.boardId}</S.BodyColumn>
      <S.BodyColumn onClick={() => history.push(`/board/class/${board.id}`)}>
        {board.title}
      </S.BodyColumn>
      <S.BodyColumn>{board.writerName}</S.BodyColumn>
      <S.BodyColumn>{getLocaleDateString(board.createdAt)}</S.BodyColumn>
      <S.BodyColumn>{board.view}</S.BodyColumn>
    </S.BodyRow>
  );
};

export default ClassTableItem;
