import React, { FC, useEffect } from 'react';
import { PostHeader, PostMain, PostFooter } from '../Default';
import { PostInfoDetail, PostButtons } from './';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import { NoticeDetailPost } from '../../../../lib/api/NoticeDetailPost';
import { ErrorType } from 'lib/type';
import { SBone } from '../../../Admin/AdminMain/style';
import { useToken, stateChange } from '../../../../lib/function';
import { sendRefreshToken } from '../../../../modules/reducer/Header';

interface Props {
  isLoading: boolean;
  noticeDetailPost: NoticeDetailPost;
  getDetailPostError: ErrorType;
  getDetailPost: (id: number) => void;
  resetDetailPost: () => void;
}

const NoticeDetailPost: FC<Props> = ({
  isLoading,
  noticeDetailPost,
  getDetailPostError,
  getDetailPost,
  resetDetailPost,
}) => {
  const [, refreshToken] = useToken();
  const refreshTokenChange = stateChange(sendRefreshToken);
  const history = useHistory();
  const paramId = Number(useParams<{ id: string }>().id);

  useEffect(() => {
    getDetailPost(paramId);
  }, [paramId]);

  useEffect(() => {
    console.log(getDetailPostError);
    if (getDetailPostError.status === 403) {
      const params = {
        serverType: {
          refreshToken,
        },
        callback: () => getDetailPost(paramId),
        page: 'NoticeDetailPost/getDetailPost',
      };
      refreshTokenChange(params);
    } else if (getDetailPostError.status) {
      alert(`Error code: ${getDetailPostError.status} 공지 불러오기 실패!`);
      history.push('/board/notice');
    }
  }, [getDetailPostError]);

  useEffect(() => {
    return () => {
      resetDetailPost();
    };
  }, []);

  if (isNaN(paramId) || paramId < 1) return <Redirect to='/error' />;
  return (
    <>
      {isLoading ? (
        <SBone width='1280px' height='45px' />
      ) : (
        <PostHeader title='공지사항' to='/board/notice' />
      )}
      {isLoading ? (
        <SBone width='1280px' height='550px' margin='31px 0 40px' />
      ) : (
        <PostMain
          title={noticeDetailPost.title}
          prevPostNumber={noticeDetailPost.pre_notice_id}
          nextPostNumber={noticeDetailPost.next_notice_id}
          prevPostTitle={noticeDetailPost.pre_notice_title}
          nextPostTitle={noticeDetailPost.next_notice_title}
          content={noticeDetailPost.content}
          board={noticeDetailPost}
          InfoDetailTemplate={PostInfoDetail}
        />
      )}
      {isLoading ? (
        <SBone width='1280px' height='41px' />
      ) : (
        <PostFooter ButtonsTemplate={PostButtons} />
      )}
    </>
  );
};

export default NoticeDetailPost;
