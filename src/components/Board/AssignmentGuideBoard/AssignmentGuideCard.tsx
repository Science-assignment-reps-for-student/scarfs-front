import React, { FC } from 'react';
import * as S from '../Default/CardView/style';
import { AssignmentGuideBoard } from '../Default';
import { getLocaleDateString } from '../utils';
import { useHistory } from 'react-router-dom';

enum Type {
  PERSONAL = '개인',
  TEAM = '팀',
  EXPERIMENT = '실험',
}

const AssignmentGuideCard: FC<{
  board?: AssignmentGuideBoard;
}> = ({ board }) => {
  const history = useHistory();
  return (
    <S.CardWrapper onClick={() => history.push(`/board/assignment-guide/${board.id}`)}>
      {board.complete && <S.FinishBox />}
      <S.CardBox isFinish={board.complete}>
        <S.Header>
          <div>
            <S.BlueText>{getLocaleDateString(board.created_at)}</S.BlueText>
            <S.DeadLineText> ~ {getLocaleDateString(board.dead_line)}</S.DeadLineText>
          </div>
          <S.BlueText>{Type[board.type]}</S.BlueText>
        </S.Header>
        <S.Main>
          <S.Title>{board.title}</S.Title>
          <S.Content>{board.pre_view_description}</S.Content>
        </S.Main>
        <S.Footer>
          <S.ViewsText>조회수 {board.view}</S.ViewsText>
        </S.Footer>
      </S.CardBox>
    </S.CardWrapper>
  );
};

export default AssignmentGuideCard;
