import { createRequestThunk } from '../../../lib/thunk';
import { GET_STUDENTS } from '../../reducer/AddTeamMember';
import { getStudents } from '../../../lib/api/AddTeamMember';

export const getStudentsThunk = createRequestThunk(GET_STUDENTS, getStudents);
