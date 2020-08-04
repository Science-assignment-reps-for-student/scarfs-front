import React, { FC } from 'react';
import * as S from '../style';

interface Props {
  isMine: boolean;
  text: string;
}

const ChattingBodyContent: FC<Props> = ({ isMine, text }) => {
  const childNode = <div>{text}</div>;
  return (
    <>
      {isMine ? (
        <S.MyChattingLog>{childNode}</S.MyChattingLog>
      ) : (
        <S.YourChattingLog>{childNode}</S.YourChattingLog>
      )}
    </>
  );
};

export default ChattingBodyContent;
