import React, { FC } from 'react';
import { ClassDetailPost, AlertModal } from '../../../../components';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailPostThunk } from '../../../../modules/thunk/ClassDetailPost';
import { getStateCallback } from '../../../../lib/function';
import { ClassDetailPostState, resetDetailPost } from '../../../../modules/reducer/ClassDetailPost';
import { LoadingState } from 'src/modules/reducer/Loading';

const ClassDetailPostContainer: FC = () => {
  const dispatch = useDispatch();

  const { classDetailPost, getDetailPostError } = useSelector(
    getStateCallback<ClassDetailPostState>('ClassDetailPost'),
  );

  const { 'ClassDetailPost/GET_DETAIL_POST': isLoading } = useSelector(
    getStateCallback<LoadingState>('Loading'),
  );

  const getDetailPost = (boardId: number) => {
    dispatch(getDetailPostThunk(boardId));
  };

  const resetDetailPostHandler = () => {
    dispatch(resetDetailPost());
  };

  return (
    <AlertModal type='notify'>
      <ClassDetailPost
        isLoading={isLoading}
        classDetailPost={classDetailPost}
        getDetailPostError={getDetailPostError}
        getDetailPost={getDetailPost}
        resetDetailPost={resetDetailPostHandler}
      />
    </AlertModal>
  );
};

export default ClassDetailPostContainer;
