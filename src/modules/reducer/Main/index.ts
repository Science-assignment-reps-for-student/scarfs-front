import { AssignmentType, BoardType, UserInfoType } from '../../../lib/api/Assignment/Assignment';
import { getAssignmentThunk, getBoardThunk, getUserInfoThunk } from '../../thunk/Main';

export const ASSIGNMENT = 'MAIN/ASSIGNMENT' as const;
export const BOARD = 'MAIN/BOARD' as const;
export const USERINFO = 'MAIN/USERINFO' as const;

export const GET_ASSIGNMENT = 'MAIN/GET_ASSIGNMENT' as const;
export const GET_ASSIGNMENT_FAILURE = 'MAIN/GET_ASSIGNMENT_FAILURE' as const;
export const GET_ASSIGNMENT_SUCCESS = 'MAIN/GET_ASSIGNMENT_SUCCESS' as const;

export const GET_BOARD = 'Main/GET_BOARD' as const;
export const GET_BOARD_FAILURE = 'MAIN/GET_BOARD_FAILURE' as const;
export const GET_BOARD_SUCCESS = 'MAIN/GET_BOARD_SUCCESS' as const;

export const GET_USER_INFO = 'MAIN/GET_USER_INFO' as const;
export const GET_USER_INFO_SUCCESS = 'MAIN/GET_USER_INFO_SUCCESS' as const;
export const GET_USER_INFO_FAILURE = 'MAIN/GET_USER_INFO_FAILURE' as const;

export const LOADING = 'MAIN/LOADING' as const;

export const getAssignment = getAssignmentThunk();
export const getBoard = getBoardThunk();
export const getUserInfo = () => getUserInfoThunk();

export const setBoard = (payload: BoardType) => ({
  type: BOARD,
  payload,
});

export const setAssignment = (payload: AssignmentType) => ({
  type: ASSIGNMENT,
  payload,
});

export const setUserInfo = (payload: UserInfoType) => ({
  type: USERINFO,
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

export const getUserInfoSuccess = (payload: UserInfoType) => ({
  type: GET_USER_INFO_SUCCESS,
  payload,
});

export const getUserInfoFailure = (payload: Error) => ({
  type: GET_USER_INFO_FAILURE,
  payload,
});

export const setLoading = (payload: boolean) => ({
  type: LOADING,
  payload,
});

export type MainState = {
  boardPreview: BoardType | null;
  assignmentPreview: AssignmentType | null;
  userInfo: UserInfoType;
  error: Error | null;
  loading: boolean;
};

const initialState: MainState = {
  boardPreview: null,
  assignmentPreview: null,
  userInfo: {
    name: '에러에러에러에러에러',
    studentNumber: 9999,
    remainingAssignment: 99,
    completionAssignment: 99,
  },
  error: null,
  loading: false,
};

export type MainActionType =
  | ReturnType<typeof setBoard>
  | ReturnType<typeof setAssignment>
  | ReturnType<typeof getAssignmentFailure>
  | ReturnType<typeof getBoardFailure>
  | ReturnType<typeof getUserInfoFailure>
  | ReturnType<typeof getAssignmentSuccess>
  | ReturnType<typeof getBoardSuccess>
  | ReturnType<typeof getUserInfoSuccess>
  | ReturnType<typeof setLoading>;

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
    case GET_USER_INFO_SUCCESS: {
      return {
        ...state,
        userInfo: action.payload,
      };
    }
    case GET_USER_INFO_FAILURE: {
      return {
        ...state,
        error: action.payload,
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
    case LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default MainState;
