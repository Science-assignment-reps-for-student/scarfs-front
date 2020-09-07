import React, { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';

import * as S from './style';

import { deleteChat } from '../../../assets/Admin';
import { reducerType } from '../../../modules/reducer';

interface Props {
  id: number;
  time: string;
  message: string;
  type: string;
  i: number;
  deleteChatById: (id: number) => void;
}

const StudentChat: FC<Props> = ({ id, time, message, type, i, deleteChatById }): ReactElement => {
  const { chats, user } = useSelector((state: reducerType) => state.AdminQnA);

  return (
    <S.ChatStudent data-time={time}>
      {chats[i - 1]?.type !== type && <S.StudentName>{user.split(' ')[1]}</S.StudentName>}
      <S.StudentMessage className={`${chats[i - 1]?.type === type && 'connect'}`}>
        {message}
        <S.DeleteChat
          src={deleteChat}
          alt='delete chat'
          title='delete chat'
          className='student'
          onClick={() => {
            deleteChatById(id);
          }}
        />
      </S.StudentMessage>
    </S.ChatStudent>
  );
};

export default StudentChat;
