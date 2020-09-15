import React, { FC, useEffect, useCallback } from 'react';
import { ClassBoard } from '../../../components';
import { useSelector, useDispatch } from 'react-redux';
import { getStateCallback } from '../../../lib/function';
import {
  ClassBoardState,
  resetBoard as createResetBoardAction,
} from '../../../modules/reducer/ClassBoard';
import { LoadingState } from '../../../modules/reducer/Loading';
import { getBoardThunk, searchClassBoardThunk } from '../../../modules/thunk/ClassBoard';

const ClassBoardContainer: FC = () => {
  const dispatch = useDispatch();
  const { classBoard, getBoardError, searchBoardError } = useSelector(
    getStateCallback<ClassBoardState>('ClassBoard'),
  );
  const { 'ClassBoard/GET_BOARD': isLoading } = useSelector(
    getStateCallback<LoadingState>('Loading'),
  );

  const getBoard = (data: { size: number; page: number; classNumber?: number }) => {
    dispatch(getBoardThunk(data));
  };

  const searchBoard = useCallback(
    (query: string, page: number) => {
      dispatch(searchClassBoardThunk({ query, page }));
    },
    [dispatch],
  );

  const resetBoard = () => {
    dispatch(createResetBoardAction());
  };

  return (
    <ClassBoard
      isLoading={isLoading}
      classBoard={classBoard}
      getBoard={getBoard}
      getBoardError={getBoardError}
      searchBoard={searchBoard}
      searchBoardError={searchBoardError}
      resetBoard={resetBoard}
    />
  );
};

export default ClassBoardContainer;
