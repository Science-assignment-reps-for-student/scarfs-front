import React, { FC } from 'react';
import * as S from '../Default/CardView/style';
import { ClassBoard } from '../Default';
import { getLocaleDateString } from '../utils';

const ClassCard: FC<{
  board?: ClassBoard;
}> = ({ board }) => {
  return (
    <S.CardWrapper>
      <S.CardBox>
        <S.Header>
          <S.BlueText>{getLocaleDateString(board.createdAt)}</S.BlueText>
          <S.BlueText>{board.writerName}</S.BlueText>
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

export default ClassCard;
