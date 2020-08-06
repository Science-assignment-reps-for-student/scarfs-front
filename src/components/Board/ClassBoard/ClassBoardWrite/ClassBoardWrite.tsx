import React, { FC, createElement, useRef, useState } from 'react';
import * as S from './style';
import { Header, WriteMain } from './';

const ClassBoardWrite: FC = () => {
  return (
    <>
      <Header title='게시판 작성' />
      <WriteMain />
    </>
  );
};

export default ClassBoardWrite;
