import React, { FC, createElement, useRef, useState, useEffect } from 'react';
import * as S from './style';
import { Select } from '../style';
import { Header, WriteMain } from './';
import queryString from 'query-string';
import { Redirect, useHistory } from 'react-router-dom';
import { ErrorType } from '../../../../lib/type';
import { useUser } from '../../../../lib/function';

interface Props {
  writeBoard: (data: FormData) => void;
  resetWriteBoard: () => void;
  writeBoardSuccess: number;
  writeBoardError: ErrorType;
}

const ClassBoardWrite: FC<Props> = ({
  writeBoard,
  resetWriteBoard,
  writeBoardSuccess,
  writeBoardError,
}) => {
  const history = useHistory();
  const [classNumber, setClassNumber] = useState(1);

  const selectChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setClassNumber(parseInt(e.target.value));
  };
  const { id } = queryString.parse(location.search);
  if (typeof id !== 'undefined' && isNaN(Number(id))) {
    alert('id는 숫자이어야 합니다.');
    return <Redirect to='/error' />;
  }

  useEffect(() => {
    return () => {
      resetWriteBoard();
    };
  }, []);

  useEffect(() => {
    if (writeBoardError.message) alert(writeBoardError.message);
  }, [writeBoardError]);

  useEffect(() => {
    if (writeBoardSuccess !== 0) {
      history.push(`/board/class/${writeBoardSuccess}`);
    }
  }, [writeBoardSuccess]);
  return (
    <>
      <Header title={id ? '게시판 수정' : '게시판 작성'}>
        {!id && (
          <Select value={classNumber} onChange={selectChangeHandler}>
            <option value='1'>1반</option>
            <option value='2'>2반</option>
            <option value='3'>3반</option>
            <option value='4'>4반</option>
          </Select>
        )}
      </Header>
      <WriteMain classNumber={classNumber} writeBoard={writeBoard} />
    </>
  );
};

export default ClassBoardWrite;
