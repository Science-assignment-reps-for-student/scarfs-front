import React, { FC, useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeaderState from '../../../src/modules/reducer/Header';
import Chatting, { ChattingOpenButton } from '../../components/Chatting';
import { getStateCallback } from '../../lib/function';
import {
  ChattingState,
  pushAdminChattingList,
  pushTeacherChattingList,
  setInput,
  setIsAble,
  setPartner,
  setIsConnected,
  setAlarm,
  setIsDelete,
} from '../../modules/reducer/Chatting';
import {
  getAdminChattingListThunk,
  getTeacherChattingListThunk,
  getChattingLogThunk,
} from '../../../src/modules/thunk/Chatting';
import IO from './WebSocket';
import { ChattingContentType, ChattingListType } from 'lib/api/Chatting/Chatting';

const ChattingContainer: FC = () => {
  const dispatch = useDispatch();
  const {
    isAble,
    adminChattingList,
    input,
    partner,
    teacherChattingList,
    isConnected,
    alarm,
    chattingLog,
    isDelete,
  } = useSelector(getStateCallback<ChattingState>('Chatting'));
  const { isLogin, userInfo, accessToken } = useSelector(getStateCallback<HeaderState>('Header'));
  const io = useRef<IO>();
  const chattingBody = useRef<HTMLDivElement>();
  const isTeacher = useCallback((parter: string) => {
    if (parter === '박지연 선생님') return true;
    return false;
  }, []);
  const sendMessage = useCallback(
    (message: string) => {
      io.current.send(message, userInfo.id, isTeacher(partner) ? 1 : 2);
    },
    [partner, userInfo],
  );

  const partnerChange = useCallback((payload: string) => {
    dispatch(setPartner(payload));
  }, []);

  const isAbleChange = useCallback((payload: boolean) => {
    dispatch(setIsAble(payload));
  }, []);

  const alarmChange = useCallback((payload: boolean) => {
    dispatch(setAlarm(payload));
  }, []);

  const inputChange = useCallback((payload: string) => {
    dispatch(setInput(payload));
  }, []);

  const isDeleteChange = useCallback((payload: boolean) => {
    dispatch(setIsDelete(payload));
  }, []);

  const updateChatting = useCallback(
    (response: ChattingContentType) => {
      if (!isAble) {
        alarmChange(true);
      }
      if (response.target === 1) {
        dispatch(pushTeacherChattingList(response));
      } else {
        dispatch(pushAdminChattingList(response));
      }
      chattingBody.current.scrollTop = chattingBody.current.scrollHeight;
    },
    [partner, isAble],
  );
  const chattingBodyScrollDown = useCallback((chattingBody: HTMLDivElement) => {
    if (chattingBody) chattingBody.scrollTop = chattingBody.scrollHeight;
  }, []);
  const setSocketUrl = useCallback(
    (io: IO, adminType: number) => {
      io.setUrl(
        `http://54.180.174.253:8001?studentId=${userInfo.id}&adminId=${adminType}&token=${accessToken}`,
      );
    },
    [userInfo, accessToken],
  );
  const alarmSetting = useCallback((chattingLog: ChattingListType[]) => {
    chattingLog.map(log => {
      if (!log.show) {
        alarmChange(true);
      }
    });
  }, []);
  useEffect(() => {
    dispatch(getAdminChattingListThunk(2));
    dispatch(getTeacherChattingListThunk(1));
    dispatch(getChattingLogThunk(0));
  }, []);
  useEffect(() => {
    if (!accessToken || !userInfo) return;
    setSocketUrl(io.current, 2);
    io.current.connect();
    dispatch(setIsConnected(true));
    io.current.joinRoom(userInfo.id, 1);
    io.current.joinRoom(userInfo.id, 2);
    io.current.receive(updateChatting);
    io.current.error(() => dispatch(setIsConnected(false)));
  }, [userInfo]);
  useEffect(() => {
    io.current = new IO();
  }, []);
  useEffect(() => {
    chattingBodyScrollDown(chattingBody.current);
  }, [partner, isAble]);
  useEffect(() => {
    if (!chattingLog) return;
    alarmSetting(chattingLog);
  }, [chattingLog]);

  return isLogin ? (
    isAble ? (
      <Chatting
        partner={partner}
        input={input}
        chattingList={isTeacher(partner) ? teacherChattingList : adminChattingList}
        headerChange={partnerChange}
        inputChange={inputChange}
        isAbleChange={isAbleChange}
        isConnected={isConnected}
        sendMessage={sendMessage}
        chattingBodyRef={chattingBody}
        isDeleteChange={isDeleteChange}
        isDelete={isDelete}
      />
    ) : (
      <ChattingOpenButton isAbleChange={isAbleChange} alarmChange={alarmChange} alarm={alarm} />
    )
  ) : (
    <></>
  );
};

export default ChattingContainer;
