import React, { FC } from 'react';
import * as S from './style';

interface Props {
  isDetailBoard: boolean;
  children?: React.ReactNode;
}

const Board: FC<Props> = ({ isDetailBoard, children }) => {
  return (
    <S.BoardWrapper isDetailBoard={isDetailBoard}>
      <S.Main>
        <S.RotatedSubject>S C I E N C E</S.RotatedSubject>
        {children}
      </S.Main>
      <S.WobbleBox draggable={false}>
        <S.MovingBubble draggable={false} />
      </S.WobbleBox>
      <S.RotateBox cycleSecond={80} draggable={false}>
        <S.MovingBubble2 cycleSecond={400} draggable={false} />
      </S.RotateBox>
      <S.RotateBox cycleSecond={150} draggable={false}>
        <S.MovingBubble3 cycleSecond={1600} draggable={false} />
      </S.RotateBox>
      <S.RotateBox cycleSecond={200} draggable={false}>
        <S.MovingBubble4 cycleSecond={4} draggable={false} />
      </S.RotateBox>
    </S.BoardWrapper>
  );
};

export default Board;
