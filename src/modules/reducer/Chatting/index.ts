import { AxiosError } from 'axios';

export const PARTNER = 'Chatting/PARTNER' as const;
export const CHATTING_LIST = 'Chatting/CHATTING_LIST' as const;
export const ERROR = 'Chatting/ERROR' as const;
export const INPUT = 'Chatting/INPUT' as const;
export const IS_ABLE = 'Chatting/IS_ABLE' as const;

export type ChattingContentType = {
  text: string;
  isMine: boolean;
};

export const setPartner = (payload: string) => ({
  type: PARTNER,
  payload,
});

export const setChattingList = (payload: ChattingContentType[]) => ({
  type: CHATTING_LIST,
  payload,
});

export const setError = (payload: AxiosError) => ({
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

export type ChattingState = {
  partner: string;
  chattingList: ChattingContentType[];
  input: string;
  error: AxiosError | null;
  isAble: boolean;
};

export const initialState: ChattingState = {
  partner: '박지연 선생님',
  chattingList: [],
  input: '',
  error: null,
  isAble: false,
};

export type ChattingType =
  | ReturnType<typeof setPartner>
  | ReturnType<typeof setChattingList>
  | ReturnType<typeof setError>
  | ReturnType<typeof setInput>
  | ReturnType<typeof setIsAble>;

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
    case CHATTING_LIST: {
      return {
        ...state,
        chattingList: action.payload,
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
    default:
      return state;
  }
};

export default ChattingState;
