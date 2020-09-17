import React, { FC } from 'react';
import * as S from '../Default/TableView/style';
import { AssignmentGuideBoard } from '../Default/TableView';
import { getLocaleDateString } from '../utils';
import { useHistory } from 'react-router-dom';

enum Type {
  PERSONAL = '개인',
  TEAM = '팀',
  EXPERIMENT = '실험',
}

interface Props {
  board?: AssignmentGuideBoard;
}

const AssignmentGuideTableItem: FC<Props> = ({ board }) => {
  const history = useHistory();

  if (typeof board === 'undefined') return null;
  return (
    <S.BodyRow>
      <S.BodyColumn>{Type[board.type]}</S.BodyColumn>
      <S.BodyColumn onClick={() => history.push(`/board/assignment-guide/${board.id}`)}>
        {board.title}
      </S.BodyColumn>
      <S.BodyColumn>{getLocaleDateString(board.created_at)}</S.BodyColumn>
      <S.BodyColumn>{getLocaleDateString(board.dead_line)}</S.BodyColumn>
      <S.BodyColumn>{board.complete ? 'O' : 'X'}</S.BodyColumn>
      <S.BodyColumn>{board.view}</S.BodyColumn>
    </S.BodyRow>
  );
};

export default AssignmentGuideTableItem;
