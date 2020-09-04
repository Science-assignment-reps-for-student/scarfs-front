import React, { FC, useCallback } from 'react';
import { AssignmentGuideBoard } from '../../../components';
import { useDispatch, useSelector } from 'react-redux';
import { getStateCallback } from '../../../lib/function';
import { MainState, resetMain as createResetMainAction } from '../../../modules/reducer/Main';
import { getAssignmentThunk } from '../../../modules/thunk/Main';
import { LoadingState } from '../../../modules/reducer/Loading';

const AssignmentGuideBoardContainer: FC = () => {
  const dispatch = useDispatch();
  const { assignmentPreview, error } = useSelector(getStateCallback<MainState>('Main'));

  const { 'Main/GET_ASSIGNMENT': isLoading } = useSelector(
    getStateCallback<LoadingState>('Loading'),
  );

  const getBoards = useCallback(
    (page: number, classNumber?: number | '') => {
      dispatch(getAssignmentThunk({ size: 7, page, classNumber }));
    },
    [dispatch],
  );

  const resetMain = useCallback(() => {
    dispatch(createResetMainAction());
  }, [dispatch]);

  return (
    <AssignmentGuideBoard
      getBoards={getBoards}
      isLoading={isLoading}
      board={assignmentPreview}
      getBoardsError={error}
      resetMain={resetMain}
    />
  );
};

export default AssignmentGuideBoardContainer;
