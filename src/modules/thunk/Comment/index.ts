import { createRequestThunk } from '../../../lib/thunk';
import { ADD_COMMENT, UPDATE_COMMENT, DELETE_COMMENT } from '../../reducer/Comment';
import { addCommnt, updateComment, deleteComment } from '../../../lib/api/Comment';

export const addCommentThunk = createRequestThunk(ADD_COMMENT, addCommnt);
export const updateCommentThunk = createRequestThunk(UPDATE_COMMENT, updateComment);
export const deleteCommentThunk = createRequestThunk(DELETE_COMMENT, deleteComment);
