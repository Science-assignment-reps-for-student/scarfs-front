import React, { FC, ReactElement, MutableRefObject } from 'react';
import { useParams } from 'react-router-dom';

import Chat from './Chat';
import ChatList from './ChatList';

interface Props {
  chatBody: MutableRefObject<HTMLDivElement>;
  sendMessage: (message: string, studentId: number) => void;
}

const AdminQnA: FC<Props> = ({ chatBody, sendMessage }): ReactElement => {
  const { user_id } = useParams();

  return <>{user_id ? <Chat chatBody={chatBody} sendMessage={sendMessage} /> : <ChatList />}</>;
};

export default AdminQnA;
