import { ErrorType, errorInitialState } from '../../../lib/type';
import { StudentResponse } from '../../../lib/api/AddTeamMember';

export const GET_STUDENTS = 'AddTeamMember/GET_STUDENTS' as const;
export const GET_STUDENTS_SUCCESS = 'AddTeamMember/GET_STUDENTS_SUCCESS' as const;
export const GET_STUDENTS_FAILURE = 'AddTeamMember/GET_STUDENTS_FAILURE' as const;

export const DELETE_TEAM_MEMBER = 'AddTeamMember/DELETE_TEAM_MEMBER' as const;
export const DELETE_TEAM_MEMBER_SUCCESS = 'AddTeamMember/DELETE_TEAM_MEMBER_SUCCESS' as const;
export const DELETE_TEAM_MEMBER_FAILURE = 'AddTeamMember/DELETE_TEAM_MEMBER_FAILURE' as const;

export const RESET_ADD_TEAM_MEMBER = 'AddTeamMember/RESET_ADD_TEAM_MEMBER' as const;

export const getStudentsSuccess = (payload: StudentResponse[]) => ({
  type: GET_STUDENTS_SUCCESS,
  payload,
});

export const getStudentsFailure = (error: ErrorType) => ({
  type: GET_STUDENTS_FAILURE,
  payload: error,
});

export const deleteTeamMemberSuccess = () => ({
  type: DELETE_TEAM_MEMBER_SUCCESS,
});

export const deleteTeamMemberFailure = (error: ErrorType) => ({
  type: DELETE_TEAM_MEMBER_FAILURE,
  payload: error,
});

export const resetAddTeamMember = () => ({
  type: RESET_ADD_TEAM_MEMBER,
});

export type AddTeamMemberAction =
  | ReturnType<typeof getStudentsSuccess>
  | ReturnType<typeof getStudentsFailure>
  | ReturnType<typeof deleteTeamMemberSuccess>
  | ReturnType<typeof deleteTeamMemberFailure>
  | ReturnType<typeof resetAddTeamMember>;

export type AddTeamMemberStatus = {
  students: StudentResponse[];
  getStudentsError: ErrorType;
  deleteTeamMemberSuccess: boolean;
  deleteTeamMemberError: ErrorType;
};

const initialState: AddTeamMemberStatus = {
  students: [],
  getStudentsError: errorInitialState,
  deleteTeamMemberSuccess: false,
  deleteTeamMemberError: errorInitialState,
};

export default function AddTeamMember(
  state: AddTeamMemberStatus = initialState,
  action: AddTeamMemberAction,
) {
  switch (action.type) {
    case GET_STUDENTS_SUCCESS:
      return {
        ...state,
        getStudentsError: errorInitialState,
        students: action.payload,
      };
    case GET_STUDENTS_FAILURE:
      return {
        ...state,
        getStudentsError: action.payload,
      };
    case DELETE_TEAM_MEMBER_SUCCESS:
      return {
        ...state,
        deleteTeamMemberSuccess: true,
        deleteTeamMemberError: errorInitialState,
      };
    case DELETE_TEAM_MEMBER_FAILURE:
      return {
        ...state,
        deleteTeamMemberSuccess: false,
        deleteTeamMemberError: action.payload,
      };
    default:
      return state;
  }
}
