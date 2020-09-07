import { ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AxiosError } from 'axios';

import {
  getChattingLog,
  getChattingList,
  deleteChatting,
} from '../../../lib/api/Chatting/Chatting';
import { tokenReIssuance } from '../../../lib/api/Admin/admin';
import { setAccessToken, setRefreshToken } from '../Header';

export interface Chat {
  deleted: boolean;
  id: number;
  message: string;
  time: string;
  type: 'STUDENT' | 'ADMIN';
}

export interface Log {
  deleted: boolean;
  message: string;
  message_time: string;
  show: boolean;
  user_id: number;
  user_name: string;
  user_number: string;
}

export const SET_CONNECT = 'Admin/SET_CONNECT' as const;
export const SET_CHAT = 'Admin/SET_CHAT' as const;
export const SET_CHAT_LOG = 'Admin/SET_CHAT_LOG' as const;
export const SET_USER_INFO = 'Admin/SET_USER_INFO' as const;
export const ADD_CHAT = 'Admin/ADD_CHAT' as const;

export const setConnect = (connect: boolean) => ({
  type: SET_CONNECT,
  payload: { connect },
});
export const setChat = (chats: Chat[]) => ({
  type: SET_CHAT,
  payload: { chats },
});
export const setChatLog = (logs: Log[]) => ({
  type: SET_CHAT_LOG,
  payload: { logs },
});
export const setUserInfo = (user: string) => ({
  type: SET_USER_INFO,
  payload: { user },
});
export const addChat = (chat: Chat) => ({
  type: ADD_CHAT,
  payload: { chat },
});

type AdminQnAAction =
  | ReturnType<typeof setConnect>
  | ReturnType<typeof setChat>
  | ReturnType<typeof setChatLog>
  | ReturnType<typeof setUserInfo>
  | ReturnType<typeof addChat>;

interface AdminQnAState {
  isConnected: boolean;
  chats: Chat[];
  logs: Log[];
  user: string;
}

const adminQnAInit: AdminQnAState = {
  isConnected: false,
  chats: [],
  logs: [],
  user: '학번 이름',
};

export const setChatLogThunk: ActionCreator<ThunkAction<
  Promise<void>,
  AdminQnAAction,
  any,
  AdminQnAAction
>> = () => async dispatch => {
  try {
    const chatLog = await getChattingLog();
    dispatch(setChatLog(chatLog.data));
  } catch (err) {
    errorHandling(err, async () => {
      const chatLog = await getChattingLog();
      dispatch(setChatLog(chatLog.data));
    });
  }
};

export const setChattingListThunk: ActionCreator<ThunkAction<
  Promise<void>,
  AdminQnAAction,
  any,
  AdminQnAAction
>> = (userId: number) => async dispatch => {
  try {
    const chats = await getChattingList(userId);
    dispatch(setChat(chats.data));
  } catch (err) {
    errorHandling(err, async () => {
      const chatLog = await getChattingList(userId);
      dispatch(setChat(chatLog.data));
    });
  }
};

export const deleteChatThunk: ActionCreator<ThunkAction<
  Promise<void>,
  AdminQnAAction,
  any,
  AdminQnAAction
>> = (chatId: number, chats: Chat[]) => async dispatch => {
  try {
    await deleteChatting(chatId);
    dispatch(setChat(chats.filter(chat => chat.id !== chatId)));
  } catch (err) {
    errorHandling(err, async () => {
      await deleteChatting(chatId);
    });
  }
};

const errorHandling = async (err: AxiosError, cb: () => void) => {
  const code = err?.response?.status;
  if (!code) return;
  if (code === 403) {
    await tokenReIssuance();
    cb();
  }
};

const adminQnA = (state: AdminQnAState = adminQnAInit, action: AdminQnAAction) => {
  switch (action.type) {
    case SET_CONNECT:
      return {
        ...state,
        isConnected: action.payload.connect,
      };
    case SET_CHAT:
      return {
        ...state,
        chats: action.payload.chats,
      };
    case ADD_CHAT:
      return {
        ...state,
        chats: [...state.chats, action.payload.chat],
      };
    case SET_CHAT_LOG:
      return {
        ...state,
        logs: action.payload.logs,
      };
    case SET_USER_INFO:
      return {
        ...state,
        user: action.payload.user,
      };
    default:
      return state;
  }
};

export default adminQnA;
