import React, { FC } from 'react';
import * as S from '../../components/Chatting/style';
import Chatting from '../../components/Chatting';

const ChattingContainer: FC = () => {
  const isAble = false;
  return isAble ? <Chatting /> : <S.ChattingOpenButton />;
};

export default ChattingContainer;
