import React, { FC } from 'react';
import { AssignmentDetailPost } from '../Default/';
import * as S from '../Default/PostMain/style';
import { getLocaleDateString } from '../../utils';

const PostInfoDetail: FC<{ board: AssignmentDetailPost }> = ({ board }) => {
  if (typeof board === 'undefined') return null;
  return (
    <>
      <S.InfoDetail>
        <S.InfoTitle>제출상태</S.InfoTitle>
        <S.BlueText>{board.isFinish ? 'O' : 'X'}</S.BlueText>
      </S.InfoDetail>
      <S.InfoDetail>
        <S.InfoTitle>등록일</S.InfoTitle>
        <S.BlueText>{getLocaleDateString(board.createdAt)}</S.BlueText>
      </S.InfoDetail>
      <S.InfoDetail>
        <S.InfoTitle>마감일</S.InfoTitle>
        <S.BlueText>{getLocaleDateString(board.daedLine)}</S.BlueText>
      </S.InfoDetail>
      <S.InfoDetail>
        <S.InfoTitle>조회수</S.InfoTitle>
        <S.BlueText>{board.view}</S.BlueText>
      </S.InfoDetail>
      <S.InfoDetail>
        <S.InfoTitle>첨부파일</S.InfoTitle>
        <S.FileBox>
          {board.files.map(f => (
            <S.File key={f} href={f} download='dummy.pdf'>
              {f}
            </S.File>
          ))}
        </S.FileBox>
      </S.InfoDetail>
      <S.InfoDetail>
        <S.InfoTitle>팀원</S.InfoTitle>
        <S.LeaderText>임용성</S.LeaderText>
        <S.TeamText>강신희</S.TeamText>
        <S.TeamText>손민기</S.TeamText>
        <S.TeamText>이성진</S.TeamText>
      </S.InfoDetail>
    </>
  );
};

export default PostInfoDetail;
