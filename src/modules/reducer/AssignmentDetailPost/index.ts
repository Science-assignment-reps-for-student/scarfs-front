import { ErrorType, errorInitialState } from '../../../lib/type';
import { AssignmentDetailPost, FileResponse } from '../../../lib/api/AssignmentDetailPost';

export const GET_ASSIGNMENT_DETAIL_POST = 'AssignmentDetailPost/GET_ASSIGNMENT_DETAIL_POST' as const;
export const GET_ASSIGNMENT_DETAIL_POST_SUCCESS = 'AssignmentDetailPost/GET_ASSIGNMENT_DETAIL_POST_SUCCESS' as const;
export const GET_ASSIGNMENT_DETAIL_POST_FAILURE = 'AssignmentDetailPost/GET_ASSIGNMENT_DETAIL_POST_FAILURE' as const;

export const GET_ASSIGNMENT_FILES = 'AssignmentDetailPost/GET_ASSIGNMENT_FILES' as const;
export const GET_ASSIGNMENT_FILES_SUCCESS = 'AssignmentDetailPost/GET_ASSIGNMENT_FILES_SUCCESS' as const;
export const GET_ASSIGNMENT_FILES_FAILURE = 'AssignmentDetailPost/GET_ASSIGNMENT_FILES_FAILURE' as const;

export const RESET_ASSIGNMENT_DETAIL_POST = 'AssignmentDetailPost/RESET_ASSIGNMENT_DETAIL_POST' as const;

const getAssignmentDetailPostSuccess = (payload: AssignmentDetailPost) => ({
  type: GET_ASSIGNMENT_DETAIL_POST_SUCCESS,
  payload,
});

const getAssignmentDetailPostFailure = (error: ErrorType) => ({
  type: GET_ASSIGNMENT_DETAIL_POST_FAILURE,
  payload: error,
});

const getAssignmentFilesSuccess = (files: FileResponse[]) => ({
  type: GET_ASSIGNMENT_FILES_SUCCESS,
  payload: files,
});

const getAssignmentFilesFailure = (error: ErrorType) => ({
  type: GET_ASSIGNMENT_FILES_FAILURE,
  payload: error,
});

export const resetDetailPost = () => ({
  type: RESET_ASSIGNMENT_DETAIL_POST,
});

type AssignmentDetailPostAction =
  | ReturnType<typeof getAssignmentDetailPostSuccess>
  | ReturnType<typeof getAssignmentDetailPostFailure>
  | ReturnType<typeof getAssignmentFilesSuccess>
  | ReturnType<typeof getAssignmentFilesFailure>
  | ReturnType<typeof resetDetailPost>;

export type AssignmentDetailPostState = {
  assignmentDetailPost: AssignmentDetailPost;
  getAssignmentDetailPostError: ErrorType;
  files: FileResponse[];
  getAssignmentFilesError: ErrorType;
};

const initialState: AssignmentDetailPostState = {
  assignmentDetailPost: {
    title: '',
    type: '',
    created_at: '',
    dead_line: '',
    view: 0,
    description: '',
    next_board_title: '',
    pre_board_title: '',
    next_board_id: 0,
    pre_board_id: 0,
    complete: false,
  },
  getAssignmentDetailPostError: errorInitialState,
  files: [],
  getAssignmentFilesError: errorInitialState,
};

export default function AssignmentDetailPost(
  state: AssignmentDetailPostState = initialState,
  action: AssignmentDetailPostAction,
) {
  switch (action.type) {
    case GET_ASSIGNMENT_DETAIL_POST_SUCCESS:
      return {
        ...state,
        assignmentDetailPost: action.payload,
        getAssignmentDetailPostError: errorInitialState,
      };
    case GET_ASSIGNMENT_DETAIL_POST_FAILURE:
      return {
        ...state,
        getAssignmentDetailPostError: action.payload,
      };
    case GET_ASSIGNMENT_FILES_SUCCESS:
      return {
        ...state,
        files: action.payload,
        getAssignmentFilesError: errorInitialState,
      };
    case GET_ASSIGNMENT_FILES_FAILURE:
      return {
        ...state,
        getAssignmentFilesError: action.payload,
      };
    case RESET_ASSIGNMENT_DETAIL_POST:
      return initialState;
    default:
      return state;
  }
}
