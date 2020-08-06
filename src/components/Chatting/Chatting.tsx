import React, { FC } from 'react';
import { ChattingHeader } from './Header';
import { ChattingBody } from './Body';
import { ChattingInput } from './Input';
import * as S from './style';

const chattingList = [
  {
    isMine: true,
    text: '시발',
  },
];

const Chatting: FC = () => {
  return (
    <S.ChattingWrapper>
      <ChattingHeader selectedPerson='박지연 선생님' />
      <ChattingBody chattingList={chattingList} />
      <ChattingInput />
    </S.ChattingWrapper>
  );
};

export default Chatting;
