import {
  ErrorType,
  errorInitialState,
  ErrorResponseType,
  errorResponseInitialState,
} from '../../../lib/type';
import { AssignmentDetailPost, FileResponse, Team } from '../../../lib/api/AssignmentDetailPost';

export const GET_ASSIGNMENT_DETAIL_POST = 'AssignmentDetailPost/GET_ASSIGNMENT_DETAIL_POST' as const;
export const GET_ASSIGNMENT_DETAIL_POST_SUCCESS = 'AssignmentDetailPost/GET_ASSIGNMENT_DETAIL_POST_SUCCESS' as const;
export const GET_ASSIGNMENT_DETAIL_POST_FAILURE = 'AssignmentDetailPost/GET_ASSIGNMENT_DETAIL_POST_FAILURE' as const;

export const GET_ASSIGNMENT_FILES = 'AssignmentDetailPost/GET_ASSIGNMENT_FILES' as const;
export const GET_ASSIGNMENT_FILES_SUCCESS = 'AssignmentDetailPost/GET_ASSIGNMENT_FILES_SUCCESS' as const;
export const GET_ASSIGNMENT_FILES_FAILURE = 'AssignmentDetailPost/GET_ASSIGNMENT_FILES_FAILURE' as const;

export const GET_TEAM = 'AssignmentDetailPost/GET_TEAM' as const;
export const GET_TEAM_SUCCESS = 'AssignmentDetailPost/GET_TEAM_SUCCESS' as const;
export const GET_TEAM_FAILURE = 'AssignmentDetailPost/GET_TEAM_FAILURE' as const;

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

const getAssignmentFilesFailure = (error: ErrorResponseType) => ({
  type: GET_ASSIGNMENT_FILES_FAILURE,
  payload: error,
});

const getTeamSuccess = (team: Team) => ({
  type: GET_TEAM_SUCCESS,
  payload: team,
});

const getTeamFailure = (error: ErrorType) => ({
  type: GET_TEAM_FAILURE,
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
  | ReturnType<typeof getTeamSuccess>
  | ReturnType<typeof getTeamFailure>
  | ReturnType<typeof resetDetailPost>;

export type AssignmentDetailPostState = {
  assignmentDetailPost: AssignmentDetailPost;
  getAssignmentDetailPostError: ErrorType;
  files: FileResponse[];
  getAssignmentFilesError: ErrorResponseType;
  team: Team;
  getTeamError: ErrorType;
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
  getAssignmentFilesError: errorResponseInitialState,
  team: {
    team_id: 0,
    team_name: '',
    leader: false,
    leader_id: 0,
    leader_name: '',
    member_list: [],
  },
  getTeamError: errorInitialState,
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
    case GET_TEAM_SUCCESS:
      return {
        ...state,
        getTeamError: errorInitialState,
        team: action.payload,
      };
    case GET_TEAM_FAILURE:
      if (action.payload.message === 'Team Not Found') {
        return {
          ...state,
          team: initialState.team,
          getTeamError: action.payload,
        };
      } else {
        return {
          ...state,
          getTeamError: action.payload,
        };
      }
    default:
      return state;
  }
}
