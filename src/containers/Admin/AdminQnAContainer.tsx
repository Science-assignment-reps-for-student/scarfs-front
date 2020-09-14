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

const ADMIN_TYPE = 2;

const AdminQnAContainer: FC<Props> = (): ReactElement => {
  const { user_id } = useParams<{ user_id: string }>();
  const dispatch = useDispatch();
  const { logs, chats } = useSelector((state: reducerType) => state.AdminQnA);
  const io = useRef<IO>();
  const chatBody = useRef<HTMLDivElement>(null);

  const setSocketUrl = () => {
    io.current.setUrl(`http://54.180.174.253:8001?token=${localStorage.getItem('accessToken')}`);
  };

  const sendMessage = (message: string, studentId: number) => {
    io.current.send(message, studentId, ADMIN_TYPE);
  };

  const chattingBodyScrollDown = (chattingBody: HTMLDivElement) => {
    if (chattingBody) chattingBody.scrollTop = chattingBody.scrollHeight;
  };

  const initChatting = () => {
    setSocketUrl();
    io.current.connect();
    dispatch(setConnect(true));
    io.current.joinRoom(parseInt(user_id), ADMIN_TYPE);
    io.current.receive((data: any) => {
      dispatch(addChat(data));
      chattingBodyScrollDown(chatBody.current);
    });
    io.current.error(() => {
      dispatch(setConnect(false));
    });
  };

  const setChatLogs = () => {
    dispatch(setChatLogThunk());
  };

  const setChats = () => {
    dispatch(setChattingListThunk(parseInt(user_id)));
  };

  useEffect(() => {
    io.current = new IO();
    setChatLogs();
  }, []);
  useEffect(() => {
    if (user_id) {
      initChatting();
    }
  }, [user_id]);
  useEffect(() => {
    const idx = logs.findIndex(log => log.user_id === parseInt(user_id));
    if (idx !== -1) {
      dispatch(setUserInfo(`${logs[idx].user_number} ${logs[idx].user_name}`));
      setChats();
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
