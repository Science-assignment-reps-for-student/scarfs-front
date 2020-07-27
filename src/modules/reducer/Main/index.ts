import { AssignmentType, BoardType } from '../../../lib/api/Assignment/Assignment';
import { getAssignmentThunk, getBoardThunk } from '../../thunk/Main';

export const ASSIGNMENT = 'MAIN/ASSIGNMENT' as const;
export const BOARD = 'MAIN/BOARD' as const;
export const GET_ASSIGNMENT = 'MAIN/GET_ASSIGNMENT' as const;
export const GET_ASSIGNMENT_FAILURE = 'MAIN/GET_ASSIGNMENT_FAILURE' as const;
export const GET_ASSIGNMENT_SUCCESS = 'MAIN/GET_ASSIGNMENT_SUCCESS' as const;
export const GET_BOARD = 'Main/GET_BOARD' as const;
export const GET_BOARD_FAILURE = 'MAIN/GET_BOARD_FAILURE' as const;
export const GET_BOARD_SUCCESS = 'MAIN/GET_BOARD_SUCCESS' as const;

export const getAssignment = getAssignmentThunk();
export const getBoard = getBoardThunk();

export const setBoard = (payload: BoardType) => ({
  type: BOARD,
  payload,
});

export const setAssignment = (payload: AssignmentType) => ({
  type: ASSIGNMENT,
  payload,
});

export const getAssignmentFailure = (payload: Error) => ({
  type: GET_ASSIGNMENT_FAILURE,
  payload,
});

export const getAssignmentSuccess = (payload: AssignmentType) => ({
  type: GET_ASSIGNMENT_SUCCESS,
  payload,
});

export const getBoardFailure = (payload: Error) => ({
  type: GET_BOARD_FAILURE,
  payload,
});

export const getBoardSuccess = (payload: BoardType) => ({
  type: GET_BOARD_SUCCESS,
  payload,
});

export type MainState = {
  boardPreview: BoardType | null;
  assignmentPreview: AssignmentType | null;
  error: Error | null;
};

const initialState: MainState = {
  boardPreview: null,
  assignmentPreview: null,
  error: null,
};

export type MainActionType =
  | ReturnType<typeof setBoard>
  | ReturnType<typeof setAssignment>
  | ReturnType<typeof getAssignmentFailure>
  | ReturnType<typeof getAssignmentFailure>
  | ReturnType<typeof getAssignmentSuccess>
  | ReturnType<typeof getBoardSuccess>;

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
      return {
        ...state,
        assignmentPreview: action.payload,
      };
    }
    case GET_BOARD_SUCCESS: {
      return {
        ...state,
        boardPreview: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default MainState;
