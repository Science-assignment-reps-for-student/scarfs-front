import React, { FC, useCallback, Fragment } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';
import { ClassDetailPost } from '../../../../../lib/api/ClassDetailPost';
import { ImagePreviewBox } from '../../../ClassBoard/ClassBoardWrite/style';

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
  images?: string[];
  board: AssignmentDetailPost | ClassDetailPost | NoticeDetailPost;
  InfoDetailTemplate: FC<{
    board?: AssignmentDetailPost | ClassDetailPost | NoticeDetailPost;
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
  images,
  board,
  InfoDetailTemplate,
}) => {
  const getContentWithImages = useCallback(() => {
    const jsx = [];
    let imageStartIndex = 0;
    let imageEndIndex = 0;
    let count = 0;
    while (content.indexOf('%{', imageEndIndex) !== -1) {
      imageStartIndex = content.indexOf('%{', imageEndIndex);
      jsx.push(
        <Fragment key={count}>
          <pre>{content.slice(imageEndIndex, imageStartIndex)}</pre>
          <ImagePreviewBox>
            <img src={`${process.env.BASE_URL}/shank/image/${images[count]}`} />
          </ImagePreviewBox>
        </Fragment>,
      );
      imageEndIndex = content.indexOf('}', imageStartIndex) + 1;
      count++;
    }
    jsx.push(<pre key={count}>{content.slice(imageEndIndex)}</pre>);
    return jsx;
  }, [content, images, board]);
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
      <S.PostContentBox>{getContentWithImages()}</S.PostContentBox>
    </S.PostMainWrapper>
  );
};

export default PostMain;
