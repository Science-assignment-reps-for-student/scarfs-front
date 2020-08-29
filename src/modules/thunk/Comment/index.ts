import { createRequestThunk } from '../../../lib/thunk';
import { ADD_COMMENT } from '../../reducer/Comment';
import { addCommnt } from '../../../lib/api/Comment';

export const addCommentThunk = createRequestThunk(ADD_COMMENT, addCommnt);
