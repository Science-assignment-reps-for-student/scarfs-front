import React, { FC, useEffect } from 'react';
import { AssignmentDetailPost } from '../../../../components';
import { useDispatch, useSelector } from 'react-redux';
import { getStateCallback, useBoardCommon, useTeam } from '../../../../lib/function';
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
  const {
    isDetailBoard: [, setIdDetailBoard],
  } = useBoardCommon();
  const dispatch = useDispatch();
  const [, getTeamError, getTeam] = useTeam();
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

  useEffect(() => {
    setIdDetailBoard(true);

    return () => {
      setIdDetailBoard(false);
    };
  }, []);

  return (
    <AssignmentDetailPost
      isLoading={isLoading}
      detailPost={assignmentDetailPost}
      getDetailPostError={getAssignmentDetailPostError}
      getDetailPost={getDetailPost}
      files={files}
      getAssignmentFilesError={getAssignmentFilesError}
      getFiles={getFiles}
      getTeam={getTeam}
      getTeamError={getTeamError}
      resetDetailPost={resetDetailPostHandler}
    />
  );
};

export default AssignmentDetailPostContainer;
