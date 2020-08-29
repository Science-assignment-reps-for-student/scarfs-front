import React, { FC } from 'react';
import { ClassDetailPost } from '../../../../lib/api/ClassDetailPost';
import * as S from '../Default/PostMain/style';
import { getLocaleDateString } from '../../utils';

const PostInfoDetail: FC<{ board: ClassDetailPost }> = ({ board }) => {
  if (typeof board === 'undefined') return null;
  return (
    <>
      <S.InfoDetail>
        <S.InfoTitle>작성자</S.InfoTitle>
        <S.BlueText>{board.writer_name}</S.BlueText>
      </S.InfoDetail>
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
