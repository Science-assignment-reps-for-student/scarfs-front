import React, { FC, ReactElement, useMemo, MutableRefObject } from 'react';
import { useSelector } from 'react-redux';

import * as S from './style';

import { reducerType } from '../../../modules/reducer';

interface Props {
  chatBody: MutableRefObject<HTMLDivElement>;
}

const ChatMessages: FC<Props> = ({ chatBody }): ReactElement => {
  const { chats, user } = useSelector((state: reducerType) => state.AdminQnA);

  const chatting = useMemo(() => {
    return chats.map(({ deleted, id, message, time, type }, i: number) => {
      return !deleted && type === 'ADMIN' ? (
        <S.ChatTeacher key={id} data-time={time}>
          <S.TeacherMessage>{message}</S.TeacherMessage>
        </S.ChatTeacher>
      ) : (
        <S.ChatStudent key={id} data-time={time}>
          {chats[i - 1]?.type !== type && <S.StudentName>{user.split(' ')[1]}</S.StudentName>}
          <S.StudentMessage className={`${chats[i - 1]?.type === type && 'connect'}`}>
            {message}
          </S.StudentMessage>
        </S.ChatStudent>
      );
    });
  }, [chats]);

  return <S.ChatInnerChatWrap ref={chatBody}>{chatting}</S.ChatInnerChatWrap>;
};

export default ChatMessages;
