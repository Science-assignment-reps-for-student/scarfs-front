import React, { FC, ReactElement } from 'react';

import * as S from './style';

import { deleteChat } from '../../../assets/Admin';

interface Props {
  id: number;
  time: string;
  message: string;
  deleteChatById: (id: number) => void;
}

const TeacherChat: FC<Props> = ({ id, time, message, deleteChatById }): ReactElement => {
  return (
    <S.ChatTeacher data-time={time}>
      <S.TeacherMessage>
        <S.DeleteChat
          src={deleteChat}
          alt='delete chat'
          title='delete chat'
          className='teacher'
          onClick={() => {
            deleteChatById(id);
          }}
        />
        {message}
      </S.TeacherMessage>
    </S.ChatTeacher>
  );
};

export default TeacherChat;
