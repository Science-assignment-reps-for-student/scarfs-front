import React, { FC, useEffect, useMemo } from 'react';
import { PostHeader, PostMain, PostFooter } from '../Default';
import { PostInfoDetail, PostButtons } from './';
import { Redirect, useParams } from 'react-router-dom';
import { useUser } from '../../../../lib/function';
import { SBone } from '../../../Admin/AdminMain/style';
import { ClassDetailPost } from '../../../../lib/api/ClassDetailPost';
import { ClassDetailPost as Board } from '../Default';

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
