import React, { FC } from 'react';
import { WriteMain } from './';

interface Props {
  writeTitle: (title: string) => void;
  writeContent: (content: string) => void;
  title: string;
  content: string;
}

const ClassBoardWrite: FC<Props> = ({ writeTitle, writeContent, title, content }) => {
  return (
    <>
      <h1>공지사항 작성</h1>
      <WriteMain
        writeTitle={writeTitle}
        writeContent={writeContent}
        title={title}
        content={content}
      />
    </>
  );
};

export default ClassBoardWrite;
