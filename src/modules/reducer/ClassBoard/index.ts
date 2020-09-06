import { ErrorType, errorInitialState } from '../../../lib/type';
import { ClassBoard } from '../../../lib/api/ClassBoard';

export const GET_BOARD = 'ClassBoard/GET_BOARD' as const;
export const GET_BOARD_SUCCESS = 'ClassBoard/GET_BOARD_SUCCESS' as const;
export const GET_BOARD_FAILURE = 'ClassBoard/GET_BOARD_FAILURE' as const;

export const SEARCH_CLASS_BOARD = 'ClassBoard/SEARCH_CLASS_BOARD' as const;
export const SEARCH_CLASS_BOARD_SUCCESS = 'ClassBoard/SEARCH_CLASS_BOARD_SUCCESS' as const;
export const SEARCH_CLASS_BOARD_FAILURE = 'ClassBoard/SEARCH_CLASS_BOARD_FAILURE' as const;

export const RESET_GET_BOARD = 'ClassBoard/RESET_GET_BOARD' as const;

export const getBoardSuccess = (payload: ClassBoard) => ({
  type: GET_BOARD_SUCCESS,
  payload,
});

export const getBoardFailure = (error: ErrorType) => ({
  type: GET_BOARD_FAILURE,
  payload: error,
});

export const searchClassBoardSuccess = (payload: ClassBoard) => ({
  type: SEARCH_CLASS_BOARD_SUCCESS,
  payload,
});

export const searchClassBoardFailure = (error: ErrorType) => ({
  type: SEARCH_CLASS_BOARD_FAILURE,
  payload: error,
});

export const resetBoard = () => ({
  type: RESET_GET_BOARD,
});

export type ClassBoardAction =
  | ReturnType<typeof getBoardSuccess>
  | ReturnType<typeof getBoardFailure>
  | ReturnType<typeof searchClassBoardSuccess>
  | ReturnType<typeof searchClassBoardFailure>
  | ReturnType<typeof resetBoard>;

export type ClassBoardState = {
  classBoard: ClassBoard;
  getBoardError: ErrorType;
};

const initialState: ClassBoardState = {
  classBoard: {
    total_elements: 0,
    total_pages: 0,
    application_responses: [],
    class_number: 1,
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
    case SEARCH_CLASS_BOARD_SUCCESS:
      return {
        ...state,
        classBoard: action.payload,
        getBoardError: errorInitialState,
      };
    case SEARCH_CLASS_BOARD_FAILURE:
      return {
        ...state,
        getBoardError: action.payload,
      };
    case RESET_GET_BOARD:
      return initialState;
    default:
      return state;
  }
}
