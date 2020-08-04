import { AxiosError } from 'axios';

export const PARTNER = 'Chatting/PARTNER' as const;
export const CHATTING_LIST = 'Chatting/CHATTING_LIST' as const;
export const ERROR = 'Chatting/ERROR' as const;

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

export type ChattingState = {
  partner: string;
  chattingList: ChattingContentType[];
  error: AxiosError | null;
};

export const initialState: ChattingState = {
  partner: '',
  chattingList: [],
  error: null,
};

export type ChattingType =
  | ReturnType<typeof setPartner>
  | ReturnType<typeof setChattingList>
  | ReturnType<typeof setError>;

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
    default:
      return state;
  }
};

export default ChattingState;
