import { ErrorType } from 'lib/type';
import {
  AssignmentResponseType,
  AssignmentType,
  BoardResponseType,
  BoardType,
} from '../../../lib/api/Assignment/Assignment';

export const ASSIGNMENT = 'Main/ASSIGNMENT' as const;
export const BOARD = 'Main/BOARD' as const;
export const USERINFO = 'Main/USERINFO' as const;

export const GET_ASSIGNMENT = 'Main/GET_ASSIGNMENT' as const;
export const GET_ASSIGNMENT_FAILURE = 'Main/GET_ASSIGNMENT_FAILURE' as const;
export const GET_ASSIGNMENT_SUCCESS = 'Main/GET_ASSIGNMENT_SUCCESS' as const;

export const GET_BOARD_MAIN = 'Main/GET_BOARD' as const;
export const GET_BOARD_FAILURE = 'Main/GET_BOARD_FAILURE' as const;
export const GET_BOARD_SUCCESS = 'Main/GET_BOARD_SUCCESS' as const;

export const SET_ASSIGNMENT_CLASS_NUMBER = 'Main/SET_ASSIGNMENT_CLASS_NUMBER' as const;

export const SEARCH_NOTICE_BOARDS = 'Main/SEARCH_NOTICE_BOARDS' as const;
export const SEARCH_NOTICE_BOARDS_SUCCESS = 'Main/SEARCH_NOTICE_BOARDS_SUCCESS' as const;
export const SEARCH_NOTICE_BOARDS_FAILURE = 'Main/SEARCH_NOTICE_BOARDS_FAILURE' as const;

export const RESET_MAIN = 'Main/RESET_MAIN' as const;

export const setBoard = (payload: BoardType) => ({
  type: BOARD,
  payload,
});

export const setAssignment = (payload: AssignmentType) => ({
  type: ASSIGNMENT,
  payload,
});

export const getAssignmentFailure = (payload: ErrorType) => ({
  type: GET_ASSIGNMENT_FAILURE,
  payload,
});

export const getAssignmentSuccess = (payload: AssignmentResponseType) => ({
  type: GET_ASSIGNMENT_SUCCESS,
  payload,
});

export const getBoardFailure = (payload: ErrorType) => ({
  type: GET_BOARD_FAILURE,
  payload,
});

export const getBoardSuccess = (payload: BoardResponseType) => ({
  type: GET_BOARD_SUCCESS,
  payload,
});

export const setAssignmentClassNumber = (class_number: number) => ({
  type: SET_ASSIGNMENT_CLASS_NUMBER,
  payload: class_number,
});

export const searchNoticeBoardsSuccess = (payload: BoardResponseType) => ({
  type: SEARCH_NOTICE_BOARDS_SUCCESS,
  payload,
});

export const searchNoticeBoardsFarilure = (error: ErrorType) => ({
  type: SEARCH_NOTICE_BOARDS_FAILURE,
  payload: error,
});

export const resetMain = () => ({
  type: RESET_MAIN,
});

export type MainState = {
  boardPreview: BoardType | null;
  assignmentPreview: AssignmentType | null;
  error: ErrorType | null;
  loading: boolean;
  assignmentClassNumber: number;
};

const initialState: MainState = {
  boardPreview: null,
  assignmentPreview: null,
  error: null,
  loading: false,
  assignmentClassNumber: 1,
};

export type MainActionType =
  | ReturnType<typeof setBoard>
  | ReturnType<typeof setAssignment>
  | ReturnType<typeof getAssignmentFailure>
  | ReturnType<typeof getBoardFailure>
  | ReturnType<typeof getAssignmentSuccess>
  | ReturnType<typeof getBoardSuccess>
  | ReturnType<typeof setAssignmentClassNumber>
  | ReturnType<typeof searchNoticeBoardsSuccess>
  | ReturnType<typeof searchNoticeBoardsFarilure>
  | ReturnType<typeof resetMain>;

const MainState = (state: MainState = initialState, action: MainActionType): MainState => {
  switch (action.type) {
    case ASSIGNMENT: {
      return {
        ...state,
        assignmentPreview: action.payload,
      };
    }
    case BOARD: {
      return {
        ...state,
        boardPreview: action.payload,
      };
    }
    case GET_ASSIGNMENT_SUCCESS: {
      const { application_responses, total_elements, total_pages, class_number } = action.payload;
      return {
        ...state,
        assignmentPreview: {
          applicationResponses: application_responses,
          totalElements: total_elements,
          totalPages: total_pages,
          class_number,
        },
      };
    }
    case GET_BOARD_SUCCESS: {
      const { application_responses, total_elements, total_pages } = action.payload;
      return {
        ...state,
        boardPreview: {
          applicationResponses: application_responses,
          totalElements: total_elements,
          totalPages: total_pages,
        },
      };
    }
    case GET_BOARD_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case GET_ASSIGNMENT_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case SET_ASSIGNMENT_CLASS_NUMBER:
      return {
        ...state,
        assignmentClassNumber: action.payload,
      };
    case SEARCH_NOTICE_BOARDS_SUCCESS:
      const { application_responses, total_elements, total_pages } = action.payload;
      return {
        ...state,
        boardPreview: {
          applicationResponses: application_responses,
          totalElements: total_elements,
          totalPages: total_pages,
        },
      };
    case SEARCH_NOTICE_BOARDS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case RESET_MAIN:
      return {
        ...initialState,
        assignmentClassNumber: state.assignmentClassNumber,
      };
    default: {
      return state;
    }
  }
};

export default MainState;
