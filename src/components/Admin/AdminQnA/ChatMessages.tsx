import React, { FC, ReactElement, useMemo, MutableRefObject } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as S from './style';
import TeacherChat from './TeacherChat';
import StudentChat from './StudentChat';

import { reducerType } from '../../../modules/reducer';
import { deleteChatThunk } from '../../../modules/reducer/AdminQnA';

interface Props {
  chatBody: MutableRefObject<HTMLDivElement>;
}

const ChatMessages: FC<Props> = ({ chatBody }): ReactElement => {
  const dispatch = useDispatch();
  const { chats } = useSelector((state: reducerType) => state.AdminQnA);

  const deleteChatById = async (chatId: number) => {
    dispatch(deleteChatThunk(chatId, chats));
  };

  const chatting = useMemo(() => {
    return chats.map(({ deleted, id, message, time, type }, i: number) => {
      return (
        !deleted &&
        (type === 'ADMIN' ? (
          <TeacherChat
            key={id}
            deleteChatById={deleteChatById}
            id={id}
            message={message}
            time={time}
          />
        ) : (
          <StudentChat
            key={id}
            i={i}
            id={id}
            time={time}
            type={type}
            message={message}
            deleteChatById={deleteChatById}
          />
        ))
      );
    });
  }, [chats]);

  return <S.ChatInnerChatWrap ref={chatBody}>{chatting}</S.ChatInnerChatWrap>;
};

export default ChatMessages;
