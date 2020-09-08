import React, { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';

import * as S from './style';

import { reducerType } from '../../../modules/reducer';

interface Props {
  time: string;
  message: string;
  type: string;
  i: number;
}

const StudentChat: FC<Props> = ({ time, message, type, i }): ReactElement => {
  const { chats, user } = useSelector((state: reducerType) => state.AdminQnA);

  return (
    <S.ChatStudent data-time={time}>
      {chats[i - 1]?.type !== type && <S.StudentName>{user.split(' ')[1]}</S.StudentName>}
      <S.StudentMessage className={`${chats[i - 1]?.type === type && 'connect'}`}>
        {message}
      </S.StudentMessage>
    </S.ChatStudent>
  );
};

export default StudentChat;
