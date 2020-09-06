import React, { FC } from 'react';
import * as S from '../Default/CardView/style';
import { NoticeBoard } from '../Default';
import { getLocaleDateString } from '../utils';
import { useHistory } from 'react-router-dom';

const NoticeBoard: FC<{
  board?: NoticeBoard;
}> = ({ board }) => {
  const history = useHistory();
  return (
    <S.CardWrapper onClick={() => history.push(`/board/notice/${board.id}`)}>
      <S.CardBox>
        <S.Header>
          <S.BlueText>{getLocaleDateString(board.created_at)}</S.BlueText>
          <S.BlueText>공지</S.BlueText>
        </S.Header>
        <S.Main>
          <S.Title>{board.title}</S.Title>
          <S.Content>{board.pre_view_content}</S.Content>
        </S.Main>
        <S.Footer>
          <S.ViewsText>조회수 {board.view}</S.ViewsText>
        </S.Footer>
      </S.CardBox>
    </S.CardWrapper>
  );
};

export default NoticeBoard;
