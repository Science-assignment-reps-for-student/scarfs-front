import React, { FC, useEffect, useMemo } from 'react';
import { PostHeader, PostMain, PostFooter } from '../Default';
import { PostInfoDetail, PostButtons } from './';
import { Redirect, useParams } from 'react-router-dom';
import { useUser } from '../../../../lib/function';
import { SBone } from '../../../Admin/AdminMain/style';
import { ClassDetailPost } from '../../../../lib/api/ClassDetailPost';
import { ClassDetailPost as Board } from '../Default';
const board = {
  title: '알려주세요',
  writerName: '이성진',
  createdAt: '2020.07.08',
  view: 5,
  content: '난 바보가 맞나요?',
  nextBoardTitle: '사랑해요',
  preBoardTitle: 'ㅋㅋㄹㅇ 실화냐?',
  nextBoardNumber: 5,
  preBoardNumber: 3,
  comments: [
    {
      commentId: 1,
      content: '맞습니다 ㅎㅎ',
      writerName: '이대성',
      writerNumber: '2309',
      cocomments: [
        {
          cocommentId: 1,
          content: 'ㅇㅈ!!',
          writerName: '임용성',
        },
        {
          cocommentId: 2,
          content: 'ㄹㅇ',
          writerName: '손민기',
        },
        {
          cocommentId: 3,
          content: '아빠!!',
          writerName: '강신희',
        },
      ],
    },
    {
      commentId: 2,
      content: 'ㅋㅋㅋㅋ',
      writerName: '이우찬',
      cocomments: [
        {
          cocommentId: 1,
          content: 'ㅎㅎ 바보~',
          writerName: '오준상',
        },
        {
          cocommentId: 2,
          content: '여기 핫플이네',
          writerName: '김어진',
        },
        {
          cocommentId: 3,
          content: '나한테 왜그래ㅠ',
          writerName: '이성진',
        },
      ],
    },
  ],
};

interface Props {
  isLoading: boolean;
  classDetailPost: ClassDetailPost;
  getDetailPost: (boardId: number) => void;
}

const ClassDetailPost: FC<Props> = ({ isLoading, classDetailPost, getDetailPost }) => {
  const board: Board = useMemo(
    () => ({
      ...classDetailPost,
      nextBoardNumber: classDetailPost.nextBoardId,
      preBoardNumber: classDetailPost.preBoardId,
    }),
    [classDetailPost],
  );
  const paramId = Number(useParams<{ id: string }>().id);
  if (isNaN(paramId) || paramId < 1) return <Redirect to='/error' />;
  useEffect(() => {
    getDetailPost(paramId);
  }, [paramId]);
  const { classNumber } = useUser();
  return (
    <>
      <PostHeader title={`${classNumber}반 게시판`} />
      {isLoading ? (
        <SBone width='1280px' height='550px' />
      ) : (
        <PostMain
          title={board.title}
          prevPostNumber={board.preBoardNumber}
          nextPostNumber={board.nextBoardNumber}
          prevPostTitle={board.preBoardTitle}
          nextPostTitle={board.nextBoardTitle}
          content={board.content}
          board={board}
          InfoDetailTemplate={PostInfoDetail}
        />
      )}

      {isLoading ? (
        <SBone width='1280px' height='61px' />
      ) : (
        <PostFooter isMine={board.isMine} ButtonsTemplate={PostButtons} />
      )}
    </>
  );
};

export default ClassDetailPost;
