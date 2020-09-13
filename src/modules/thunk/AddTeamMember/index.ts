import { createRequestThunk } from '../../../lib/thunk';
import { GET_STUDENTS, DELETE_TEAM_MEMBER } from '../../reducer/AddTeamMember';
import { getStudents, deleteTeamMember } from '../../../lib/api/AddTeamMember';

export const getStudentsThunk = createRequestThunk(GET_STUDENTS, getStudents);
export const deleteTeamMemberThunk = createRequestThunk(DELETE_TEAM_MEMBER, deleteTeamMember);
