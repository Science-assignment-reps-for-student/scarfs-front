import React, { FC, useEffect } from 'react';
import { ClassDetailPost } from '../../../../components';
// import { ClassDetailPost, AlertModal } from '../../../../components';
import { useDispatch, useSelector } from 'react-redux';
import {
  getDetailPostThunk,
  deleteClassDetailPostThunk,
} from '../../../../modules/thunk/ClassDetailPost';
import { getStateCallback, useBoardCommon } from '../../../../lib/function';
import { ClassDetailPostState, resetDetailPost } from '../../../../modules/reducer/ClassDetailPost';
import { LoadingState } from 'src/modules/reducer/Loading';

const ClassDetailPostContainer: FC = () => {
  const {
    isDetailBoard: [, setIdDetailBoard],
  } = useBoardCommon();
  const dispatch = useDispatch();
  const {
    classDetailPost,
    getDetailPostError,
    deleteDetailPostSuccess,
    deleteDetailPostError,
  } = useSelector(getStateCallback<ClassDetailPostState>('ClassDetailPost'));

  const { 'ClassDetailPost/GET_DETAIL_POST': isLoading } = useSelector(
    getStateCallback<LoadingState>('Loading'),
  );

  const getDetailPost = (boardId: number) => {
    dispatch(getDetailPostThunk(boardId));
  };

  const deleteDetailPost = (boardId: number) => {
    dispatch(deleteClassDetailPostThunk(boardId));
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
    // <AlertModal type='notify'>
    <ClassDetailPost
      isLoading={isLoading}
      classDetailPost={classDetailPost}
      getDetailPostError={getDetailPostError}
      getDetailPost={getDetailPost}
      deleteDetailPost={deleteDetailPost}
      deleteDetailPostSuccess={deleteDetailPostSuccess}
      deleteDetailPostError={deleteDetailPostError}
      resetDetailPost={resetDetailPostHandler}
    />
    // </AlertModal>
  );
};

export default ClassDetailPostContainer;
