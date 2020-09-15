import React, { FC } from 'react';
import { NoticeDetailPost } from '../../../../lib/api/NoticeDetailPost';
import * as S from '../Default/PostMain/style';
import { getLocaleDateString } from '../../utils';

interface Props {
  board: NoticeDetailPost;
}

const PostInfoDetail: FC<Props> = ({ board }) => {
  if (typeof board === 'undefined') return null;
  return (
    <>
      <S.InfoDetail>
        <S.InfoTitle>등록일</S.InfoTitle>
        <S.BlueText>{getLocaleDateString(board.created_at)}</S.BlueText>
      </S.InfoDetail>
      <S.InfoDetail>
        <S.InfoTitle>조회수</S.InfoTitle>
        <S.BlueText>{board.view}</S.BlueText>
      </S.InfoDetail>
    </>
  );
};

export default PostInfoDetail;
