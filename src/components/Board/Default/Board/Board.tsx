import React, { FC } from 'react';
import * as S from './style';

const Board: FC = ({ children }) => {
  return (
    <S.BoardWrapper>
      <S.Main>
        <S.RotatedSubject>S C I E N C E</S.RotatedSubject>
        {children}
      </S.Main>
      <S.WobbleBox>
        <S.MovingBubble />
      </S.WobbleBox>
      <S.RotateBox>
        <S.MovingBubble2 />
        <S.MovingBubble3 />
        <S.MovingBubble4 />
      </S.RotateBox>
    </S.BoardWrapper>
  );
};

export default Board;