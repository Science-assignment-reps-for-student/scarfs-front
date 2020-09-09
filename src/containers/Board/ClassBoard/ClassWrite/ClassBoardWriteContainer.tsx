import React, { FC, useEffect } from 'react';
import { ClassBoardWrite } from '../../../../components';
import { useSelector, useDispatch } from 'react-redux';
import { getStateCallback, useBoardCommon } from '../../../../lib/function';
import { ClassBoardWriteState, writeBoardReset } from '../../../../modules/reducer/ClassBoardWrite';
import { writeBoardThunk, updateBoardThunk } from '../../../../modules/thunk/ClassBoardWrite';
import { LoadingState } from '../../../../modules/reducer/Loading';
import { HeaderState } from '../../../../modules/reducer/Header';
import { useHistory } from 'react-router-dom';
import { ClassDetailPostState } from '../../../../modules/reducer/ClassDetailPost';
import { getDetailPostThunk } from '../../../../modules/thunk/ClassDetailPost';

const ClassBoardWriteContainer: FC = () => {
  const {
    isDetailBoard: [, setIdDetailBoard],
  } = useBoardCommon();
  const history = useHistory();
  const dispatch = useDispatch();
  const { writeBoardSuccess, writeBoardError, updateBoardSuccess, updateBoardError } = useSelector(
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

  const { classDetailPost, getDetailPostError } = useSelector(
    getStateCallback<ClassDetailPostState>('ClassDetailPost'),
  );

  const getDetailPost = (boardId: number) => {
    dispatch(getDetailPostThunk(boardId));
  };

  const updateBoard = (boardId: number, data: FormData) => {
    dispatch(updateBoardThunk({ boardId, data }));
  };

  useEffect(() => {
    if (!getUserLoading && userInfo && userInfo.type === 'STUDENT') {
      history.goBack();
      alert('학생은 글쓰기 페이지에 접근할 수 없습니다.');
    }
  }, [userInfo, getUserLoading]);

  useEffect(() => {
    setIdDetailBoard(true);

    return () => {
      setIdDetailBoard(false);
    };
  }, []);

  return (
    <>
      {userInfo && userInfo.type === 'ADMIN' && (
        <ClassBoardWrite
          writeBoard={writeBoard}
          resetWriteBoard={resetWriteBoard}
          writeBoardSuccess={writeBoardSuccess}
          writeBoardError={writeBoardError}
          getDetailPost={getDetailPost}
          classDetailPost={classDetailPost}
          getDetailPostError={getDetailPostError}
          updateBoard={updateBoard}
          updateBoardSuccess={updateBoardSuccess}
          updateBoardError={updateBoardError}
        />
      )}
    </>
  );
};

export default ClassBoardWriteContainer;
