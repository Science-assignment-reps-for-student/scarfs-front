import React, { FC, ReactElement, useMemo } from 'react';
import * as S from './style';

interface Props {}

interface Chat {
  type: number;
  message: string;
}

const chats: Chat[] = [
  {
    type: 1,
    message: '선생님 메시지',
  },
  {
    type: 0,
    message: '학생 메시지',
  },
  {
    type: 0,
    message: '학생 메시지',
  },
  {
    type: 1,
    message: '선생님 메시지',
  },
  {
    type: 0,
    message: '학생 메시지',
  },
  {
    type: 1,
    message: '선생님 메시지',
  },
  {
    type: 0,
    message: '학생 메시지',
  },
  {
    type: 1,
    message: '선생님 메시지',
  },
  {
    type: 0,
    message: '학생 메시지',
  },
  {
    type: 1,
    message: '선생님 메시지',
  },
  {
    type: 0,
    message: '학생 메시지',
  },
  {
    type: 1,
    message: '선생님 메시지',
  },
  {
    type: 0,
    message: '학생 메시지',
  },
  {
    type: 1,
    message: '선생님 메시지',
  },
  {
    type: 0,
    message: '학생 메시지',
  },
  {
    type: 1,
    message: '선생님 메시지',
  },
  {
    type: 0,
    message: '학생 메시지',
  },
  {
    type: 1,
    message: '선생님 메시지',
  },
  {
    type: 1,
    message: '선생님 메시지',
  },
  {
    type: 0,
    message: '학생 메시지',
  },
];

const ChatMessages: FC<Props> = (): ReactElement => {
  // TODO: 학번과 이름을 받아와야함

  const chatting = useMemo(
    () =>
      chats.map(({ type, message }, i) => {
        // ! key를 인덱스로 설정한 이유: 아직 채팅 값이 어떻게 올 지 몰름
        // ! key를 정해줄 것이 떠오르지 않음
        return type === 0 ? (
          <S.ChatStudent key={i}>
            {chats[i - 1].type !== type && <S.StudentName>이름</S.StudentName>}
            <S.StudentMessage className={`${chats[i - 1].type === type && 'connect'}`}>
              {message}
            </S.StudentMessage>
          </S.ChatStudent>
        ) : (
          <S.ChatTeacher key={i}>
            <S.TeacherMessage>{message}</S.TeacherMessage>
          </S.ChatTeacher>
        );
      }),
    [chats],
  );

  return <S.ChatInnerChatWrap>{chatting}</S.ChatInnerChatWrap>;
};

export default ChatMessages;
