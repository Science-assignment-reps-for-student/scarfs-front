import React, { FC, createElement, useRef, useState } from 'react';
import * as S from './style';
import { Header, WriteMain } from './';
import queryString from 'query-string';
import { Redirect } from 'react-router-dom';

const data = {
  title: '제목이얌',
  content: '이건 내용이야',
};

const ClassBoardWrite: FC = () => {
  const { id } = queryString.parse(location.search);
  if (typeof id !== 'undefined' && isNaN(Number(id))) {
    return <Redirect to='error' />;
  }
  return (
    <>
      <Header title={id ? '게시판 수정' : '게시판 작성'} />
      <WriteMain data={id ? data : { title: '', content: '' }} />
    </>
  );
};

export default ClassBoardWrite;
