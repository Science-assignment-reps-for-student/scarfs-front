import React, { FC, useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeaderState, { sendRefreshToken } from '../../../src/modules/reducer/Header';
import Chatting, { ChattingOpenButton } from '../../components/Chatting';
import { getStateCallback, isNetworkError } from '../../lib/function';
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

const TEACHER_TYPE = 1;
const ADMIN_TYPE = 2;

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
    error,
  } = useSelector(getStateCallback<ChattingState>('Chatting'));
  const { isLogin, userInfo, accessToken, refreshToken } = useSelector(
    getStateCallback<HeaderState>('Header'),
  );
  const io = useRef<IO>();
  const chattingBody = useRef<HTMLDivElement>();

  const isTeacher = useCallback((parter: string) => {
    if (parter === '박지연 선생님') return true;
    return false;
  }, []);

  const sendMessage = useCallback(
    (message: string) => {
      io.current.send(message, userInfo.id, isTeacher(partner) ? TEACHER_TYPE : ADMIN_TYPE);
    },
    [partner, userInfo],
  );

  const serverErrorHandler = useCallback((status: number) => {
    switch (status) {
      case 403: {
        const params = {
          serverType: {
            refreshToken,
          },
          callback: initPage,
        };
        dispatch(sendRefreshToken(params));
      }
    }
  }, []);

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
      if (response.target === TEACHER_TYPE) {
        dispatch(pushTeacherChattingList(response));
      } else {
        dispatch(pushAdminChattingList(response));
      }
      chattingBodyScrollDown(chattingBody.current);
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

  const initPage = useCallback(() => {
    dispatch(getAdminChattingListThunk(ADMIN_TYPE));
    dispatch(getTeacherChattingListThunk(TEACHER_TYPE));
    dispatch(getChattingLogThunk(0));
  }, []);

  const alarmSetting = useCallback((chattingLog: ChattingListType[]) => {
    chattingLog.map(log => {
      if (!log.show) {
        alarmChange(true);
      }
    });
  }, []);

  const chattingSetting = useCallback(() => {
    setSocketUrl(io.current, ADMIN_TYPE);
    io.current.connect();
    dispatch(setIsConnected(true));
    io.current.joinRoom(userInfo.id, TEACHER_TYPE);
    io.current.joinRoom(userInfo.id, ADMIN_TYPE);
    io.current.receive(updateChatting);
    io.current.error(() => dispatch(setIsConnected(false)));
  }, [io, userInfo]);

  useEffect(() => {
    initPage();
  }, []);

  useEffect(() => {
    if (!accessToken || !userInfo) return;
    chattingSetting();
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

  useEffect(() => {
    if (!error) return;
    if (isNetworkError(error)) return;
    const statusCode = error.response.status;
    serverErrorHandler(statusCode);
  }, [error]);

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
