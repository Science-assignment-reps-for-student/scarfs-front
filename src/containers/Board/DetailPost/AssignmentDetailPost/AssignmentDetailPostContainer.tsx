import React, { FC } from 'react';
import { AssignmentDetailPost } from '../../../../components';
import { useDispatch, useSelector } from 'react-redux';
import { getStateCallback } from '../../../../lib/function';
import {
  AssignmentDetailPostState,
  resetDetailPost,
} from '../../../../modules/reducer/AssignmentDetailPost';
import { LoadingState } from '../../../../modules/reducer/Loading';
import {
  getAssignmentDetailPostThunk,
  getAssignmentFilesThunk,
} from '../../../../modules/thunk/AssignmentDetailPost';

const AssignmentDetailPostContainer: FC = () => {
  const dispatch = useDispatch();
  const {
    assignmentDetailPost,
    getAssignmentDetailPostError,
    files,
    getAssignmentFilesError,
  } = useSelector(getStateCallback<AssignmentDetailPostState>('AssignmentDetailPost'));

  const { 'AssignmentDetailPost/GET_ASSIGNMENT_FILES': isLoading } = useSelector(
    getStateCallback<LoadingState>('Loading'),
  );

  const getDetailPost = (id: number) => {
    dispatch(getAssignmentDetailPostThunk(id));
  };

  const getFiles = (id: number) => {
    dispatch(getAssignmentFilesThunk(id));
  };

  const resetDetailPostHandler = () => {
    dispatch(resetDetailPost());
  };
  return (
    <AssignmentDetailPost
      isLoading={isLoading}
      detailPost={assignmentDetailPost}
      getDetailPostError={getAssignmentDetailPostError}
      getDetailPost={getDetailPost}
      files={files}
      getAssignmentFilesError={getAssignmentFilesError}
      getFiles={getFiles}
      resetDetailPost={resetDetailPostHandler}
    />
  );
};

export default AssignmentDetailPostContainer;
