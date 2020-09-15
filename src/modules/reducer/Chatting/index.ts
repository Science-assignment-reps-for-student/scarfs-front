import { ErrorType } from 'lib/type';
import { ChattingContentType, ChattingListType } from '../../../lib/api/Chatting/Chatting';

export const PARTNER = 'Chatting/PARTNER' as const;
export const CHATTING_LIST = 'Chatting/CHATTING_LIST' as const;
export const ADMIN_CHATTING_LIST = 'Chatting/ADMIN_CHATTING_LIST' as const;
export const TEACHER_CHATTING_LIST = 'Chatting/TEACHER_CHATTING_LIST' as const;
export const CHATTING_LOG = 'Chatting/CHATTING_LOG' as const;
export const ERROR = 'Chatting/ERROR' as const;
export const INPUT = 'Chatting/INPUT' as const;
export const IS_ABLE = 'Chatting/IS_ABLE' as const;
export const IS_CONNECTED = 'Chatting/IS_CONNECTED' as const;
export const ALARM = 'Chatting/ALARM' as const;
export const IS_DELETE = 'Chatting/IS_DELETE' as const;

export const ADMIN_PUSH_CHATTING_LIST = 'Chatting/ADMIN_PUSH_CHATTING_LIST' as const;
export const TEACHER_PUSH_CHATTING_LIST = 'Chatting/TEACHER_PUSH_CHATTING_LIST' as const;
export const DELETE_CHATTING_LIST = 'Chatting/DELETE_CHATTING_LIST' as const;

export const TEACHER_CHATTING_LIST_CALL = 'Chatting/GET_TEACHER_CHATTING_LIST' as const;
export const TEACHER_CHATTING_LIST_FAILURE = 'Chatting/GET_TEACHER_CHATTING_LIST_FAILURE' as const;
export const TEACHER_CHATTING_LIST_SUCCESS = 'Chatting/GET_TEACHER_CHATTING_LIST_SUCCESS' as const;

export const ADMIN_CHATTING_LIST_CALL = 'Chatting/GET_ADMIN_CHATTING_LIST' as const;
export const ADMIN_CHATTING_LIST_FAILURE = 'Chatting/GET_ADMIN_CHATTING_LIST_FAILURE' as const;
export const ADMIN_CHATTING_LIST_SUCCESS = 'Chatting/GET_ADMIN_CHATTING_LIST_SUCCESS' as const;

export const CHATTING_LOG_CALL = 'Chatting/GET_CHATTING_LOG' as const;
export const CHATTING_LOG_FAILURE = 'Chatting/GET_CHATTING_LOG_FAILURE' as const;
export const CHATTING_LOG_SUCCESS = 'Chatting/GET_CHATTING_LOG_SUCCESS' as const;

export const CHATTING_DELETE_CALL = 'Chatting/DELETE_CHATTING' as const;
export const CHATTING_DELETE_FAILURE = 'Chatting/DELETE_CHATTING_FAILURE' as const;
export const CHATTING_DELETE_SUCCESS = 'Chatting/DELETE_CHATTING_SUCCESS' as const;

export const setAlarm = (payload: boolean) => ({
  type: ALARM,
  payload,
});

export const setPartner = (payload: string) => ({
  type: PARTNER,
  payload,
});

export const setIsConnected = (payload: boolean) => ({
  type: IS_CONNECTED,
  payload,
});

export const setAdminChattingList = (payload: ChattingContentType[]) => ({
  type: ADMIN_CHATTING_LIST,
  payload,
});

export const setTeacherChattingList = (payload: ChattingContentType[]) => ({
  type: TEACHER_CHATTING_LIST,
  payload,
});

export const getAdminChattingListFailure = (payload: ErrorType) => ({
  type: ADMIN_CHATTING_LIST_FAILURE,
  payload,
});

export const getAdminChattingListSuccess = (payload: ChattingContentType[]) => ({
  type: ADMIN_CHATTING_LIST_SUCCESS,
  payload,
});

export const getTeacherChattingListFailure = (payload: ErrorType) => ({
  type: TEACHER_CHATTING_LIST_FAILURE,
  payload,
});

export const getTeacherChattingListSuccess = (payload: ChattingContentType[]) => ({
  type: TEACHER_CHATTING_LIST_SUCCESS,
  payload,
});

export const setChattingLog = (payload: ChattingListType[]) => ({
  type: CHATTING_LIST,
  payload,
});

export const getChattingLogFailure = (payload: ErrorType) => ({
  type: CHATTING_LOG_FAILURE,
  payload,
});

export const getChattingLogSuccess = (payload: ChattingListType[]) => ({
  type: CHATTING_LOG_SUCCESS,
  payload,
});

export const setError = (payload: ErrorType) => ({
  type: ERROR,
  payload,
});

export const setInput = (payload: string) => ({
  type: INPUT,
  payload,
});

export const setIsAble = (payload: boolean) => ({
  type: IS_ABLE,
  payload,
});

export const pushAdminChattingList = (payload: ChattingContentType) => ({
  type: ADMIN_PUSH_CHATTING_LIST,
  payload,
});

export const pushTeacherChattingList = (payload: ChattingContentType) => ({
  type: TEACHER_PUSH_CHATTING_LIST,
  payload,
});

export const setIsDelete = (payload: boolean) => ({
  type: IS_DELETE,
  payload,
});

export const chattingDeleteFailure = (payload: ErrorType) => ({
  type: CHATTING_DELETE_FAILURE,
  payload,
});

export const chattingDeleteSuccess = () => ({
  type: CHATTING_DELETE_SUCCESS,
});

export const deleteChattingList = (payload: number) => ({
  type: DELETE_CHATTING_LIST,
  payload,
});

export type ChattingState = {
  isConnected: boolean;
  partner: string;
  adminChattingList: ChattingContentType[];
  teacherChattingList: ChattingContentType[];
  chattingLog: ChattingListType[];
  input: string;
  error: ErrorType | null;
  isAble: boolean;
  alarm: boolean;
  isDelete: boolean;
};

export const initialState: ChattingState = {
  partner: '박지연 선생님',
  adminChattingList: [],
  teacherChattingList: [],
  chattingLog: [],
  input: '',
  error: null,
  isAble: false,
  isConnected: false,
  alarm: false,
  isDelete: false,
};

export type ChattingType =
  | ReturnType<typeof setPartner>
  | ReturnType<typeof setTeacherChattingList>
  | ReturnType<typeof setAdminChattingList>
  | ReturnType<typeof setError>
  | ReturnType<typeof setInput>
  | ReturnType<typeof setIsAble>
  | ReturnType<typeof getTeacherChattingListFailure>
  | ReturnType<typeof getTeacherChattingListSuccess>
  | ReturnType<typeof getAdminChattingListFailure>
  | ReturnType<typeof getAdminChattingListSuccess>
  | ReturnType<typeof getChattingLogFailure>
  | ReturnType<typeof getChattingLogSuccess>
  | ReturnType<typeof pushAdminChattingList>
  | ReturnType<typeof pushTeacherChattingList>
  | ReturnType<typeof setIsConnected>
  | ReturnType<typeof setAlarm>
  | ReturnType<typeof setIsDelete>
  | ReturnType<typeof chattingDeleteFailure>
  | ReturnType<typeof chattingDeleteSuccess>
  | ReturnType<typeof deleteChattingList>;

const ChattingState = (
  state: ChattingState = initialState,
  action: ChattingType,
): ChattingState => {
  switch (action.type) {
    case PARTNER: {
      return {
        ...state,
        partner: action.payload,
      };
    }
    case ADMIN_CHATTING_LIST: {
      return {
        ...state,
        adminChattingList: action.payload,
      };
    }
    case TEACHER_CHATTING_LIST: {
      return {
        ...state,
        teacherChattingList: action.payload,
      };
    }
    case ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case INPUT: {
      return {
        ...state,
        input: action.payload,
      };
    }
    case IS_ABLE: {
      return {
        ...state,
        isAble: action.payload,
      };
    }
    case ADMIN_CHATTING_LIST_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case ADMIN_CHATTING_LIST_SUCCESS: {
      return {
        ...state,
        adminChattingList: action.payload,
      };
    }
    case TEACHER_CHATTING_LIST_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case TEACHER_CHATTING_LIST_SUCCESS: {
      return {
        ...state,
        teacherChattingList: action.payload,
      };
    }
    case CHATTING_LOG_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case CHATTING_LOG_SUCCESS: {
      return {
        ...state,
        chattingLog: action.payload,
      };
    }
    case ADMIN_PUSH_CHATTING_LIST: {
      return {
        ...state,
        adminChattingList: [...state.adminChattingList, action.payload],
      };
    }
    case TEACHER_PUSH_CHATTING_LIST: {
      return {
        ...state,
        teacherChattingList: [...state.teacherChattingList, action.payload],
      };
    }
    case IS_CONNECTED: {
      return {
        ...state,
        isConnected: action.payload,
      };
    }
    case ALARM: {
      return {
        ...state,
        alarm: action.payload,
      };
    }
    case IS_DELETE: {
      return {
        ...state,
        isDelete: action.payload,
      };
    }
    case CHATTING_DELETE_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case CHATTING_DELETE_SUCCESS: {
      return state;
    }
    case DELETE_CHATTING_LIST: {
      const teacherChattingBuffer = [...state.teacherChattingList].map(chatting => {
        if (chatting.id === action.payload) {
          const buffer = { ...chatting };
          buffer.deleted = true;
          return buffer;
        }
        return chatting;
      });
      const adminChattingBuffer = [...state.adminChattingList].map(chatting => {
        if (chatting.id === action.payload) {
          const buffer = { ...chatting };
          buffer.deleted = true;
          return buffer;
        }
        return chatting;
      });
      return {
        ...state,
        teacherChattingList: teacherChattingBuffer,
        adminChattingList: adminChattingBuffer,
      };
    }
    default:
      return state;
  }
};

export default ChattingState;
