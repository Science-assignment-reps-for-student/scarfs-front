import { createRequestThunk } from '../../../lib/thunk';
import { GET_STUDENTS, DELETE_TEAM_MEMBER, ADD_TEAM_MEMBER } from '../../reducer/AddTeamMember';
import { getStudents, deleteTeamMember, addTeamMember } from '../../../lib/api/AddTeamMember';

export const getStudentsThunk = createRequestThunk(GET_STUDENTS, getStudents);
export const deleteTeamMemberThunk = createRequestThunk(DELETE_TEAM_MEMBER, deleteTeamMember);
export const addTeamMemberThunk = createRequestThunk(ADD_TEAM_MEMBER, addTeamMember);
