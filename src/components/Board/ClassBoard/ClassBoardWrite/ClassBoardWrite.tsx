import React, { FC, useState, useEffect } from 'react';
import { Select } from '../style';
import { Header, WriteMain } from './';
import queryString from 'query-string';
import { Redirect, useHistory } from 'react-router-dom';
import { ErrorType } from '../../../../lib/type';
import { useWriteClassNumber } from '../../../../lib/function';
import { ClassDetailPost } from '../../../../lib/api/ClassDetailPost';

enum Error {
  '존재하지 않는 게시글 입니다.' = 404,
}

interface Props {
  writeBoard: (data: FormData) => void;
  resetWriteBoard: () => void;
  writeBoardSuccess: number;
  writeBoardError: ErrorType;
  getDetailPost: (boardId: number) => void;
  classDetailPost: ClassDetailPost;
  getDetailPostError: ErrorType;
  updateBoard: (boardId: number, data: FormData) => void;
  updateBoardSuccess: number;
  updateBoardError: ErrorType;
}

const ClassBoardWrite: FC<Props> = ({
  writeBoard,
  resetWriteBoard,
  writeBoardSuccess,
  writeBoardError,
  getDetailPost,
  classDetailPost,
  getDetailPostError,
  updateBoard,
  updateBoardSuccess,
  updateBoardError,
}) => {
  const history = useHistory();
  const [classNumber, setClassNumber] = useWriteClassNumber();

  const selectChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setClassNumber(parseInt(e.target.value));
  };
  const { id } = queryString.parse(location.search);
  if (typeof id !== 'undefined' && isNaN(Number(id))) {
    alert('id는 숫자이어야 합니다.');
    return <Redirect to='/error' />;
  }

  const boardId: number = Number(id);

  useEffect(() => {
    return () => {
      resetWriteBoard();
    };
  }, []);

  useEffect(() => {
    if (writeBoardSuccess !== 0) {
      history.push(`/board/class/${writeBoardSuccess}`);
    }
  }, [writeBoardSuccess]);

  useEffect(() => {
    if (boardId) {
      getDetailPost(boardId);
    }
  }, [boardId]);

  useEffect(() => {
    if (getDetailPostError.status) {
      alert(Error[getDetailPostError.status]);
      history.goBack();
    }
  }, [getDetailPostError]);

  useEffect(() => {
    if (updateBoardSuccess) {
      history.push(`/board/class/${updateBoardSuccess}`);
    }
  }, [updateBoardSuccess]);

  return (
    <>
      <Header title={id ? '게시글 수정' : `${classNumber}반 게시글 작성`}>
        {!id && (
          <Select value={classNumber} onChange={selectChangeHandler}>
            <option value='1'>1반</option>
            <option value='2'>2반</option>
            <option value='3'>3반</option>
            <option value='4'>4반</option>
          </Select>
        )}
      </Header>
      <WriteMain
        classNumber={classNumber}
        writeBoard={writeBoard}
        writeBoardError={writeBoardError}
        classDetailPost={classDetailPost}
        updateBoard={updateBoard}
        updateBoardError={updateBoardError}
      />
    </>
  );
};

export default ClassBoardWrite;
