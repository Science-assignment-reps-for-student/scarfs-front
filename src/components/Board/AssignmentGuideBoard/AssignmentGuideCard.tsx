import React, { FC } from 'react';
import * as S from '../Default/CardView/style';
import { AssignmentGuideBoard } from '../Default';
import { getLocaleDateString } from '../utils';

const AssignmentGuideCard: FC<{
  board?: AssignmentGuideBoard;
}> = ({ board }) => {
  return (
    <S.CardWrapper>
      {board.isFinish && <S.FinishBox />}
      <S.CardBox isFinish={board.isFinish}>
        <S.Header>
          <div>
            <S.BlueText>{getLocaleDateString(board.createdAt)}</S.BlueText>
            <S.DeadLineText> ~ {getLocaleDateString(board.deadLine)}</S.DeadLineText>
          </div>
          <S.BlueText>{board.type}</S.BlueText>
        </S.Header>
        <S.Main>
          <S.Title>{board.title}</S.Title>
          <S.Content>{board.previewContent}</S.Content>
        </S.Main>
        <S.Footer>
          <S.ViewsText>조회수 {board.view}</S.ViewsText>
        </S.Footer>
      </S.CardBox>
    </S.CardWrapper>
  );
};

export default AssignmentGuideCard;
