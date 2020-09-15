import React, { FC } from 'react';
import * as S from '../Default/TableView/style';
import { NoticeBoard } from '../Default/TableView';
import { getLocaleDateString } from '../utils';
import { useHistory } from 'react-router-dom';

interface Props {
  board?: NoticeBoard;
}

const NoticeTableItem: FC<Props> = ({ board }) => {
  const history = useHistory();

  if (typeof board === 'undefined') return null;
  return (
    <S.BodyRow>
      <S.BodyColumn>{board.id}</S.BodyColumn>
      <S.BodyColumn onClick={() => history.push(`/board/notice/${board.id}`)}>
        {board.title}
      </S.BodyColumn>
      <S.BodyColumn>{getLocaleDateString(board.created_at)}</S.BodyColumn>
      <S.BodyColumn>{board.view}</S.BodyColumn>
    </S.BodyRow>
  );
};

export default NoticeTableItem;
