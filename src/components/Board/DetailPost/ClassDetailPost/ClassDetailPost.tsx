import React, { FC, useEffect } from 'react';
import { PostHeader, PostMain, PostFooter } from '../Default';
import { PostInfoDetail, PostButtons } from './';
import { Redirect, useParams, useHistory } from 'react-router-dom';
import { useUser } from '../../../../lib/function';
import { SBone } from '../../../Admin/AdminMain/style';
import { ClassDetailPost } from '../../../../lib/api/ClassDetailPost';
import { ErrorType } from '../../../../lib/type';

enum Error {
  '본인반 외에 게시글에는 접근 불가능 합니다.' = 401,
  '존재하지 않는 게시글입니다.' = 404,
}

interface Props {
  isLoading: boolean;
  classDetailPost: ClassDetailPost;
  getDetailPostError: ErrorType;
  getDetailPost: (boardId: number) => void;
  resetDetailPost: () => void;
}

const ClassDetailPost: FC<Props> = ({
  isLoading,
  classDetailPost,
  getDetailPostError,
  getDetailPost,
  resetDetailPost,
}) => {
  const history = useHistory();
  const paramId = Number(useParams<{ id: string }>().id);
  const { classNumber } = useUser();

  if (isNaN(paramId) || paramId < 1) return <Redirect to='/error' />;

  useEffect(() => {
    if (classNumber !== 0) {
      getDetailPost(paramId);
    }
  }, [paramId, classNumber]);

  useEffect(() => {
    if (getDetailPostError.status) {
      alert(Error[getDetailPostError.status]);
      history.push('/error');
    }
  }, [getDetailPostError]);

  useEffect(() => {
    return () => {
      resetDetailPost();
    };
  }, []);

  return (
    <>
      <PostHeader title={`${classDetailPost.class_number}반 게시판`} />
      {isLoading ? (
        <SBone width='1280px' height='550px' />
      ) : (
        <PostMain
          title={classDetailPost.title}
          prevPostNumber={classDetailPost.pre_board_id}
          nextPostNumber={classDetailPost.next_board_id}
          prevPostTitle={classDetailPost.pre_board_title}
          nextPostTitle={classDetailPost.next_board_title}
          content={classDetailPost.content}
          images={classDetailPost.images}
          board={classDetailPost}
          InfoDetailTemplate={PostInfoDetail}
        />
      )}

      {isLoading ? (
        <SBone width='1280px' height='61px' />
      ) : (
        <PostFooter ButtonsTemplate={PostButtons} />
      )}
    </>
  );
};

export default ClassDetailPost;
