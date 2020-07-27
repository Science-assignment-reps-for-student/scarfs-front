import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

export interface AssignmentDetailPost {
  homeworkId: number;
  type: string;
  title: string;
  createdAt: string;
  daedLine: string;
  isFinish: boolean;
  view: number;
  files: string[];
}

export interface ClassDtailPost {
  title: string;
  writerName: string;
  createdAt: string;
  view: number;
  content: string;
  nextBoardTitle: string;
  preBoardTitle: string;
  nextBoardNumber: number;
  preBoardNumber: number;
}

export interface NoticeDetailPost {
  title: string;
  createdAt: string;
  view: number;
  content: string;
  preNoticeTitle: string;
  nextNoticeTitle: string;
  preNoticeNumber: number;
  nextNoticeNumber: number;
}

interface Props {
  title: string;
  type?: string;
  prevPostNumber: number;
  nextPostNumber: number;
  prevPostTitle: string;
  nextPostTitle: string;
  content: string;
  board: AssignmentDetailPost | ClassDtailPost | NoticeDetailPost;
  InfoDetailTemplate: FC<{
    board?: AssignmentDetailPost | ClassDtailPost | NoticeDetailPost;
  }>;
}

const PostMain: FC<Props> = ({
  title,
  type,
  prevPostNumber,
  nextPostNumber,
  prevPostTitle,
  nextPostTitle,
  content,
  board,
  InfoDetailTemplate,
}) => {
  return (
    <S.PostMainWrapper>
      <S.LeftAside>
        <S.PostBox>
          <S.PostHeader>
            <S.PostTitle>{title}</S.PostTitle>
            {type ? <S.PostType>{type}</S.PostType> : ''}
          </S.PostHeader>
          <InfoDetailTemplate board={board} />
        </S.PostBox>
        <S.NearbyPost>
          <S.NearbyPostTitle>이전글</S.NearbyPostTitle>
          {prevPostNumber ? (
            <Link to={`${prevPostNumber}`}>{prevPostTitle}</Link>
          ) : (
            '이전 글이 없습니다.'
          )}
        </S.NearbyPost>
        <S.NearbyPost>
          <S.NearbyPostTitle>다음글</S.NearbyPostTitle>
          {nextPostNumber ? (
            <Link to={`${nextPostNumber}`}>{nextPostTitle}</Link>
          ) : (
            '이전 글이 없습니다.'
          )}
        </S.NearbyPost>
      </S.LeftAside>
      <S.PostContentBox>{content}</S.PostContentBox>
    </S.PostMainWrapper>
  );
};

export default PostMain;
