import { ErrorType, errorInitialState } from '../../../lib/type';
import { StudentResponse } from '../../../lib/api/AddTeamMember';

export const GET_STUDENTS = 'AddTeamMember/GET_STUDENTS' as const;
export const GET_STUDENTS_SUCCESS = 'AddTeamMember/GET_STUDENTS_SUCCESS' as const;
export const GET_STUDENTS_FAILURE = 'AddTeamMember/GET_STUDENTS_FAILURE' as const;

export const DELETE_TEAM_MEMBER = 'AddTeamMember/DELETE_TEAM_MEMBER' as const;
export const DELETE_TEAM_MEMBER_SUCCESS = 'AddTeamMember/DELETE_TEAM_MEMBER_SUCCESS' as const;
export const DELETE_TEAM_MEMBER_FAILURE = 'AddTeamMember/DELETE_TEAM_MEMBER_FAILURE' as const;

export const ADD_TEAM_MEMBER = 'AddTeamMember/ADD_TEAM_MEMBER' as const;
export const ADD_TEAM_MEMBER_SUCCESS = 'AddTeamMember/ADD_TEAM_MEMBER_SUCCESS' as const;
export const ADD_TEAM_MEMBER_FAILURE = 'AddTeamMember/ADD_TEAM_MEMBER_FAILURE' as const;

export const SET_ADD_TEAM_MEMBER_STUDENT_NO = 'AddTeamMember/SET_ADD_TEAM_MEMBER_STUDENT_NO' as const;

export const SET_IS_LAST_ADD_TEAM_MEMBER = 'AddTeamMember/SET_IS_LAST_ADD_TEAM_MEMBER' as const;

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

export const addTeamMemberSuccess = () => ({
  type: ADD_TEAM_MEMBER_SUCCESS,
});

export const addTeamMemberFailure = (error: ErrorType) => ({
  type: ADD_TEAM_MEMBER_FAILURE,
  payload: error,
});

export const setAddTeamMemberStudentNo = (studentNo: string) => ({
  type: SET_ADD_TEAM_MEMBER_STUDENT_NO,
  payload: studentNo,
});

export const setIsLastAddTeamMember = () => ({
  type: SET_IS_LAST_ADD_TEAM_MEMBER,
});

export const resetAddTeamMember = () => ({
  type: RESET_ADD_TEAM_MEMBER,
});

export type AddTeamMemberAction =
  | ReturnType<typeof getStudentsSuccess>
  | ReturnType<typeof getStudentsFailure>
  | ReturnType<typeof deleteTeamMemberSuccess>
  | ReturnType<typeof deleteTeamMemberFailure>
  | ReturnType<typeof addTeamMemberSuccess>
  | ReturnType<typeof addTeamMemberFailure>
  | ReturnType<typeof setAddTeamMemberStudentNo>
  | ReturnType<typeof setIsLastAddTeamMember>
  | ReturnType<typeof resetAddTeamMember>;

export type AddTeamMemberStatus = {
  students: StudentResponse[];
  getStudentsError: ErrorType;
  deleteTeamMemberSuccess: boolean;
  deleteTeamMemberError: ErrorType;
  addTeamMemberSuccess: boolean;
  addTeamMemberError: ErrorType;
  addTeamMemberStudentNo: string;
  isLastAddTeamMember: boolean;
};

const initialState: AddTeamMemberStatus = {
  students: [],
  getStudentsError: errorInitialState,
  deleteTeamMemberSuccess: false,
  deleteTeamMemberError: errorInitialState,
  addTeamMemberSuccess: false,
  addTeamMemberError: errorInitialState,
  addTeamMemberStudentNo: '',

  isLastAddTeamMember: false,
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
    case ADD_TEAM_MEMBER_SUCCESS:
      return {
        ...state,
        addTeamMemberSuccess: true,
        addTeamMemberError: errorInitialState,
      };
    case ADD_TEAM_MEMBER_FAILURE:
      return {
        ...state,
        addTeamMemberSuccess: false,
        addTeamMemberError: action.payload,
      };
    case SET_ADD_TEAM_MEMBER_STUDENT_NO:
      return {
        ...state,
        addTeamMemberStudentNo: action.payload,
      };
    case SET_IS_LAST_ADD_TEAM_MEMBER:
      return {
        ...state,
        isLastAddTeamMember: true,
      };
    case RESET_ADD_TEAM_MEMBER:
      return initialState;
    default:
      return state;
  }
}
