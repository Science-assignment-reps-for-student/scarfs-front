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
