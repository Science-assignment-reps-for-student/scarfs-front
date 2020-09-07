import React, { FC, useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeaderState, { sendRefreshToken } from '../../../src/modules/reducer/Header';
import Chatting, { ChattingOpenButton, ChattingCloseButton } from '../../components/Chatting';
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

const TEACHER_TARGET = 1;
const ADMIN_TARGET = 2;
const TEACHER = 'TEACHER';
const ADMIN = 'ADMIN';
const STUDENT = 'STUDENT';

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
      io.current.send(message, userInfo.id, isTeacher(partner) ? TEACHER_TARGET : ADMIN_TARGET);
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
          page: 'Chatting',
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
  const updateStudentChatting = useCallback((response: ChattingContentType) => {
    if (response.target === TEACHER_TARGET) dispatch(pushTeacherChattingList(response));
    else dispatch(pushAdminChattingList(response));
  }, []);
  const updateOtherChatting = useCallback((response: ChattingContentType) => {
    if (response.type === TEACHER) dispatch(pushTeacherChattingList(response));
    else dispatch(pushAdminChattingList(response));
  }, []);
  const updateChatting = useCallback(
    (response: ChattingContentType) => {
      if (response.type === STUDENT) {
        updateStudentChatting(response);
      } else {
        updateOtherChatting(response);
        alarmChange(true);
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
    dispatch(getAdminChattingListThunk(ADMIN_TARGET));
    dispatch(getTeacherChattingListThunk(TEACHER_TARGET));
    dispatch(getChattingLogThunk(0));
  }, []);

  const alarmSetting = useCallback((chattingLog: ChattingListType[]) => {
    chattingLog.map(log => {
      if (!log.show && !log.mine) {
        alarmChange(true);
      }
    });
  }, []);

  const chattingSetting = useCallback(() => {
    setSocketUrl(io.current, ADMIN_TARGET);
    io.current.connect();
    dispatch(setIsConnected(true));
    io.current.joinRoom(userInfo.id, TEACHER_TARGET);
    io.current.joinRoom(userInfo.id, ADMIN_TARGET);
    io.current.receive(updateChatting);
    io.current.error(() => dispatch(setIsConnected(false)));
  }, [io, userInfo]);

  useEffect(() => {
    if (!isLogin) return;
    initPage();
  }, []);

  useEffect(() => {
    if (!userInfo || !isLogin || userInfo.type === 'ADMIN') return;
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
    const statusCode = error.status;
    serverErrorHandler(statusCode);
  }, [error]);
  return isLogin && userInfo && userInfo.type !== 'ADMIN' ? (
    isAble ? (
      <>
        <Chatting
          partner={partner}
          input={input}
          chattingList={isTeacher(partner) ? teacherChattingList : adminChattingList}
          headerChange={partnerChange}
          inputChange={inputChange}
          isConnected={isConnected}
          sendMessage={sendMessage}
          chattingBodyRef={chattingBody}
          isDeleteChange={isDeleteChange}
          isDelete={isDelete}
        />
        <ChattingCloseButton isAbleChange={isAbleChange} alarm={alarm} />
      </>
    ) : (
      <ChattingOpenButton isAbleChange={isAbleChange} alarmChange={alarmChange} alarm={alarm} />
    )
  ) : (
    <></>
  );
};

export default ChattingContainer;
