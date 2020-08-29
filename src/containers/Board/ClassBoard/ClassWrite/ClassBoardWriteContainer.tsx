import React, { FC } from 'react';
import { ClassBoardWrite } from '../../../../components';
import { useSelector, useDispatch } from 'react-redux';
import { getStateCallback } from '../../../../lib/function';
import { ClassBoardWriteState, writeBoardReset } from '../../../../modules/reducer/ClassBoardWrite';
import { writeBoardThunk } from '../../../../modules/thunk/ClassBoardWrite';
import { LoadingState } from '../../../../modules/reducer/Loading';
import HeaderState from '../../../../modules/reducer/Header';
import { Redirect } from 'react-router-dom';

const ClassBoardWriteContainer: FC = () => {
  const dispatch = useDispatch();
  const { writeBoardSuccess, writeBoardError } = useSelector(
    getStateCallback<ClassBoardWriteState>('ClassBoardWrite'),
  );
  const { 'Header/GET_USER_INFO': getUserLoading } = useSelector(
    getStateCallback<LoadingState>('Loading'),
  );
  const { userInfo } = useSelector(getStateCallback<HeaderState>('Header'));

  const writeBoard = (data: FormData) => {
    dispatch(writeBoardThunk(data));
  };

  const resetWriteBoard = () => {
    dispatch(writeBoardReset());
  };

  if (userInfo && userInfo.type === 'STUDENT') {
    alert('학생은 글쓰기 페이지에 접근할 수 없습니다.');
    return <Redirect to='/error' />;
  }

  return (
    <ClassBoardWrite
      writeBoard={writeBoard}
      resetWriteBoard={resetWriteBoard}
      writeBoardSuccess={writeBoardSuccess}
      writeBoardError={writeBoardError}
    />
  );
};

export default ClassBoardWriteContainer;
