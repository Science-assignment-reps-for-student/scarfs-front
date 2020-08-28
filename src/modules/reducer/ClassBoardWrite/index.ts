import { ErrorType, errorInitialState } from '../../../lib/type';

export const WRITE_BOARD = 'ClassBoardWrite/WRITE_BOARD' as const;
export const WRITE_BOARD_SUCCESS = 'ClassBoardWrite/WRITE_BOARD_SUCCESS' as const;
export const WRITE_BOARD_FAILURE = 'ClassBoardWrite/WRITE_BOARD_FAILURE' as const;
export const WRITE_BOARD_RESET = 'ClassBoardWrite/WRITE_BOARD_RESET' as const;
export const WRITE_BOARD_CLASS_NUMBER = 'ClassBoardWrite/WRITE_BOARD_CLASS_NUMBER' as const;

export const writeBoardSuccess = (payload: number) => ({
  type: WRITE_BOARD_SUCCESS,
  payload,
});

export const writeBoardFailure = (error: ErrorType) => ({
  type: WRITE_BOARD_FAILURE,
  payload: error,
});

export const writeBoardReset = () => ({
  type: WRITE_BOARD_RESET,
});

export const setWriteBoardClassNumber = (payload: number) => ({
  type: WRITE_BOARD_CLASS_NUMBER,
  payload,
});

export type ClassBoardWriterAction =
  | ReturnType<typeof writeBoardSuccess>
  | ReturnType<typeof writeBoardFailure>
  | ReturnType<typeof writeBoardReset>
  | ReturnType<typeof setWriteBoardClassNumber>;

export type ClassBoardWriteState = {
  writeBoardSuccess: number;
  writeBoardError: ErrorType;
  classNumber: number;
};

const initialState: ClassBoardWriteState = {
  writeBoardSuccess: 0,
  writeBoardError: errorInitialState,
  classNumber: 1,
};

export default function ClassBoardWriter(
  state: ClassBoardWriteState = initialState,
  action: ClassBoardWriterAction,
) {
  switch (action.type) {
    case WRITE_BOARD_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        writeBoardSuccess: action.payload,
      };
    case WRITE_BOARD_FAILURE:
      return {
        ...state,
        writeBoardError: action.payload,
      };
    case WRITE_BOARD_RESET:
      return initialState;
    case WRITE_BOARD_CLASS_NUMBER:
      return {
        ...state,
        classNumber: action.payload,
      };
    default:
      return state;
  }
}
