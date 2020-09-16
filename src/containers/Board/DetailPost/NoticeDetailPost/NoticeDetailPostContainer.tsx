import React, { FC, useEffect } from 'react';
import { NoticeDetailPost } from '../../../../components';
import { useDispatch, useSelector } from 'react-redux';
import { getNoticeDetailPostThunk } from '../../../../modules/thunk/NoticeDetailPost';
import { getStateCallback, useBoardCommon } from '../../../../lib/function';
import {
  NoticeDetailPostState,
  resetDetailPost,
} from '../../../../modules/reducer/NoticeDetailPost';
import { LoadingState } from '../../../../modules/reducer/Loading';

const NoticeDetailPostContainer: FC = () => {
  const {
    isDetailBoard: [, setIdDetailBoard],
  } = useBoardCommon();
  const dispatch = useDispatch();
  const { noticeDetailPost, getNoticeDetailPostError } = useSelector(
    getStateCallback<NoticeDetailPostState>('NoticeDetailPost'),
  );

  const { 'NoticeDetailPost/GET_NOTICE_DETAIL_POST': isLoading } = useSelector(
    getStateCallback<LoadingState>('Loading'),
  );

  const getDetailPost = (id: number) => {
    dispatch(getNoticeDetailPostThunk({ id }));
  };

  const resetDetailPostHandler = () => {
    dispatch(resetDetailPost());
  };

  useEffect(() => {
    setIdDetailBoard(true);

    return () => {
      setIdDetailBoard(false);
    };
  }, []);

  return (
    <NoticeDetailPost
      isLoading={isLoading}
      noticeDetailPost={noticeDetailPost}
      getDetailPostError={getNoticeDetailPostError}
      getDetailPost={getDetailPost}
      resetDetailPost={resetDetailPostHandler}
    />
  );
};

export default NoticeDetailPostContainer;
