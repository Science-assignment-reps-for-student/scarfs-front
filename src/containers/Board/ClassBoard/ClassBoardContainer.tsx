import React, { FC, useEffect } from 'react';
import { ClassBoard } from '../../../components';
import { useSelector, useDispatch } from 'react-redux';
import { getStateCallback } from '../../../lib/function';
import { ClassBoardState, resetBoard } from '../../../modules/reducer/ClassBoard';
import { LoadingState } from '../../../modules/reducer/Loading';
import { getBoardThunk } from '../../../modules/thunk/ClassBoard';
import { Redirect } from 'react-router-dom';

const ClassBoardContainer: FC = () => {
  const dispatch = useDispatch();
  const { classBoard, getBoardError } = useSelector(
    getStateCallback<ClassBoardState>('ClassBoard'),
  );
  const { 'ClassBoard/GET_BOARD': isLoading } = useSelector(
    getStateCallback<LoadingState>('Loading'),
  );
  const getBoard = (data: { size: number; page: number; classNumber?: number }) => {
    dispatch(getBoardThunk(data));
  };

  useEffect(() => {
    if (getBoardError.status) {
      alert(`ERROR: CODE[${getBoardError.status}]`);
    }
    return () => {
      dispatch(resetBoard());
    };
  }, [getBoardError]);

  if (getBoardError.status === undefined || getBoardError.status === 500) {
    alert('서버 오류 발생!');
    return <Redirect to='/error' />;
  }

  return <ClassBoard isLoading={isLoading} classBoard={classBoard} getBoard={getBoard} />;
};

export default ClassBoardContainer;
