import React, { FC, ReactElement, useState } from 'react';
import { useSelector } from 'react-redux';

import * as S from './style';

import { send } from '../../../assets/Admin';
import { reducerType } from '../../../modules/reducer';

interface Props {
  sendMessage: (message: string, studentId: number) => void;
}

const ChatInputs: FC<Props> = ({ sendMessage }): ReactElement => {
  const { isConnected } = useSelector((state: reducerType) => state.AdminQnA);
  const [message, setMessage] = useState<string>('');

  const sending = () => {
    if (!isConnected) return;
    sendMessage(message, 1);
  };

  return (
    <S.ChatInputWrap>
      <S.ChatInput
        type='text'
        onChange={e => {
          setMessage(e.currentTarget.value);
        }}
        onKeyDown={e => {
          if (e.keyCode === 13) {
            sending();
          }
        }}
        placeholder='학생에게 전달할 메시지를 입력하세요.'
      />
      <S.ChatSend
        src={send}
        alt='send'
        title='send'
        onClick={() => {
          sending();
        }}
      />
    </S.ChatInputWrap>
  );
};

export default ChatInputs;
