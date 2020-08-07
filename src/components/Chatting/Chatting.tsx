import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ChattingState, PARTNER, INPUT } from '../../modules/reducer/Chatting';
import { ChattingHeader } from './Header';
import { ChattingBody } from './Body';
import { ChattingInput } from './Input';
import * as S from './style';
import { getStateCallback } from '../../lib/function';

const Chatting: FC = () => {
  const dispatch = useDispatch();
  const { partner, chattingList, input } = useSelector(getStateCallback<ChattingState>('Chatting'));
  const inputChange = (payload: string) => {
    dispatch({ type: INPUT, payload });
  };
  const headerChange = (payload: string) => {
    dispatch({ type: PARTNER, payload });
  };
  return (
    <S.ChattingWrapper>
      <ChattingHeader selectedPerson={partner} headerChange={headerChange} />
      <ChattingBody chattingList={chattingList} />
      <ChattingInput value={input} inputChange={inputChange} />
    </S.ChattingWrapper>
  );
};

export default Chatting;
