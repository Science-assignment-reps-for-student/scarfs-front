import React, { FC, ReactElement } from 'react';
import * as S from './style';
import { send } from '../../../assets/Admin';

interface Props {}

const ChatInputs: FC<Props> = (): ReactElement => {
  return (
    <S.ChatInputWrap>
      <S.ChatInput type='text' placeholder='학생에게 전달할 메시지를 입력하세요.' />
      <S.ChatSend src={send} alt='send' title='send' />
    </S.ChatInputWrap>
  );
};

export default ChatInputs;
