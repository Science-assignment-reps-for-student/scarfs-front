import { createRequestThunk } from '../../../lib/thunk';
import {
  GET_ASSIGNMENT_DETAIL_POST,
  GET_ASSIGNMENT_FILES,
} from '../../../modules/reducer/AssignmentDetailPost';
import { getAssignmentDetailPost, getAssignmentFiles } from '../../../lib/api/AssignmentDetailPost';

export const getAssignmentDetailPostThunk = createRequestThunk(
  GET_ASSIGNMENT_DETAIL_POST,
  getAssignmentDetailPost,
);

export const getAssignmentFilesThunk = createRequestThunk(GET_ASSIGNMENT_FILES, getAssignmentFiles);
