import React, { FC, ReactElement } from 'react';
import * as S from './style';
import ChatMessages from './ChatMessages';
import ChatInputs from './ChatInputs';

interface Props {}

const AdminChat: FC<Props> = (): ReactElement => {
  return (
    <S.ChatWrap>
      <S.ChatHeader>
        <h3>학번 이름</h3>
      </S.ChatHeader>
      <section>
        <ChatMessages />
        <ChatInputs />
      </section>
    </S.ChatWrap>
  );
};

export default AdminChat;
