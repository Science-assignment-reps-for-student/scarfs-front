import { createRequestThunk } from '../../../lib/thunk';
import { ADD_COMMENT, UPDATE_COMMENT } from '../../reducer/Comment';
import { addCommnt, updateComment } from '../../../lib/api/Comment';

export const addCommentThunk = createRequestThunk(ADD_COMMENT, addCommnt);
export const updateCommentThunk = createRequestThunk(UPDATE_COMMENT, updateComment);
