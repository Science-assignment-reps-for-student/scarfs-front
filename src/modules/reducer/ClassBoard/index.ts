import { ErrorType, errorInitialState } from '../../../lib/type';
import { ClassBoard } from '../../../lib/api/ClassBoard';

export const GET_BOARD = 'ClassBoard/GET_BOARD' as const;
export const GET_BOARD_SUCCESS = 'ClassBoard/GET_BOARD_SUCCESS' as const;
export const GET_BOARD_FAILURE = 'ClassBoard/GET_BOARD_FAILURE' as const;

export const getBoardSuccess = (payload: ClassBoard) => ({
  type: GET_BOARD_SUCCESS,
  payload,
});

export const getBoardFailure = (error: ErrorType) => ({
  type: GET_BOARD_FAILURE,
  payload: error,
});

export type ClassBoardAction =
  | ReturnType<typeof getBoardSuccess>
  | ReturnType<typeof getBoardFailure>;

export type ClassBoardState = {
  classBoard: ClassBoard;
  getBoardError: ErrorType;
};

const initialState: ClassBoardState = {
  classBoard: {
    totalElements: 0,
    totalPages: 0,
    boardResponses: [],
  },
  getBoardError: errorInitialState,
};

export default function ClassBoard(
  state: ClassBoardState = initialState,
  action: ClassBoardAction,
): ClassBoardState {
  switch (action.type) {
    case GET_BOARD_SUCCESS:
      return {
        ...state,
        classBoard: action.payload,
        getBoardError: errorInitialState,
      };
    case GET_BOARD_FAILURE:
      return {
        ...state,
        getBoardError: action.payload,
      };
    default:
      return state;
  }
}
