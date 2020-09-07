import React, { FC, ReactElement, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { AdminHeaderContainer } from './';

import { AdminQnA } from '../../components';
import IO from '../../containers/Chatting/WebSocket';
import { reducerType } from '../../modules/reducer';
import {
  setConnect,
  setUserInfo,
  addChat,
  setChatLogThunk,
  setChattingListThunk,
} from '../../modules/reducer/AdminQnA';

interface Props {}

const studentId = 1;
const ADMIN_TYPE = 2;

const AdminQnAContainer: FC<Props> = (): ReactElement => {
  const dispatch = useDispatch();
  const { user_id } = useParams<{ user_id: string }>();
  const io = useRef<IO>();
  const chatBody = useRef<HTMLDivElement>(null);
  const { logs, chats } = useSelector((state: reducerType) => state.AdminQnA);
  const { accessToken } = useSelector((state: reducerType) => state.Header);

  const setSocketUrl = () => {
    io.current.setUrl(`http://54.180.174.253:8001?token=${accessToken}`);
  };

  const sendMessage = (message: string, studentId: number) => {
    io.current.send(message, studentId, ADMIN_TYPE);
  };

  const chattingBodyScrollDown = (chattingBody: HTMLDivElement) => {
    if (chattingBody) chattingBody.scrollTop = chattingBody.scrollHeight;
  };

  const chattingSetting = () => {
    setSocketUrl();
    io.current.connect();
    dispatch(setConnect(true));
    io.current.joinRoom(studentId, ADMIN_TYPE);
    io.current.receive((data: any) => {
      dispatch(addChat(data));
      chattingBodyScrollDown(chatBody.current);
    });
    io.current.error(() => {
      dispatch(setConnect(false));
    });
  };

  const chatList = async () => {
    dispatch(setChatLogThunk());
  };

  const chatting = async () => {
    dispatch(setChattingListThunk(parseInt(user_id)));
  };

  useEffect(() => {
    io.current = new IO();
    chatList();
    chattingSetting();
  }, []);
  useEffect(() => {
    if (logs.some(log => log.user_id === parseInt(user_id))) {
      const idx = logs.findIndex(log => log.user_id === parseInt(user_id));
      dispatch(setUserInfo(`${logs[idx].user_number} ${logs[idx].user_name}`));
      chatting();
    }
  }, [logs, user_id]);
  useEffect(() => {
    if (chatBody.current) {
      chattingBodyScrollDown(chatBody.current);
    }
  }, [chatBody.current, chats]);

  return (
    <>
      <AdminHeaderContainer />
      <AdminQnA chatBody={chatBody} sendMessage={sendMessage} />
    </>
  );
};

export default AdminQnAContainer;
