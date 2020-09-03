import { createRequestThunk } from '../../../lib/thunk';
import {
  ADD_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT,
  ADD_RE_COMMENT,
  UPDATE_RE_COMMENT,
} from '../../reducer/Comment';
import {
  addComment,
  updateComment,
  deleteComment,
  addReComment,
  updateReComment,
} from '../../../lib/api/Comment';

export const addCommentThunk = createRequestThunk(ADD_COMMENT, addComment);
export const updateCommentThunk = createRequestThunk(UPDATE_COMMENT, updateComment);
export const deleteCommentThunk = createRequestThunk(DELETE_COMMENT, deleteComment);

export const addReCommentThunk = createRequestThunk(ADD_RE_COMMENT, addReComment);
export const updateReCommentThunk = createRequestThunk(UPDATE_RE_COMMENT, updateReComment);
