import React, { FC, ReactElement, MutableRefObject } from 'react';
import { useSelector } from 'react-redux';

import * as S from './style';
import ChatMessages from './ChatMessages';
import ChatInputs from './ChatInputs';

import { reducerType } from '../../../modules/reducer';

interface Props {
  chatBody: MutableRefObject<HTMLDivElement>;
  sendMessage: (message: string, studentId: number) => void;
}

const AdminChat: FC<Props> = ({ chatBody, sendMessage }): ReactElement => {
  const { user } = useSelector((state: reducerType) => state.AdminQnA);

  return (
    <S.ChatWrap>
      <S.ChatHeader>
        <h3>{user}</h3>
      </S.ChatHeader>
      <section>
        <ChatMessages chatBody={chatBody} />
        <ChatInputs sendMessage={sendMessage} />
      </section>
    </S.ChatWrap>
  );
};

export default AdminChat;
