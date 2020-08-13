import React, { FC } from 'react';
import { ClassBoard } from '../../../components';
import { useSelector, useDispatch } from 'react-redux';
import { getStateCallback } from '../../../lib/function';
import { ClassBoardState } from '../../../modules/reducer/ClassBoard';
import { LoadingState } from '../../../modules/reducer/Loading';
import { getBoardThunk } from '../../../modules/thunk/ClassBoard';

const ClassBoardContainer: FC = () => {
  const dispatch = useDispatch();
  const { classBoard } = useSelector(getStateCallback<ClassBoardState>('ClassBoard'));
  const { 'ClassBoard/GET_BOARD': isLoading } = useSelector(
    getStateCallback<LoadingState>('Loading'),
  );
  const getBoard = (data: { size: number; page: number }) => {
    dispatch(getBoardThunk(data));
  };
  return <ClassBoard isLoading={isLoading} classBoard={classBoard} getBoard={getBoard} />;
};

export default ClassBoardContainer;
