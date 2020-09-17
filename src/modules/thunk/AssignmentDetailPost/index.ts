import { createRequestThunk, createRequestFileThunk } from '../../../lib/thunk';
import {
  GET_ASSIGNMENT_DETAIL_POST,
  GET_ASSIGNMENT_FILES,
  GET_TEAM,
} from '../../../modules/reducer/AssignmentDetailPost';
import {
  getAssignmentDetailPost,
  getAssignmentFiles,
  getTeam,
} from '../../../lib/api/AssignmentDetailPost';

export const getAssignmentDetailPostThunk = createRequestThunk(
  GET_ASSIGNMENT_DETAIL_POST,
  getAssignmentDetailPost,
);

export const getAssignmentFilesThunk = createRequestFileThunk(
  GET_ASSIGNMENT_FILES,
  getAssignmentFiles,
);
export const getTeamThunk = createRequestThunk(GET_TEAM, getTeam);
