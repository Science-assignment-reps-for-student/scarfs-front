import { createRequestThunk } from '../../../lib/thunk';
import { GET_DETAIL_POST, DELETE_DETAIL_POST } from '../../../modules/reducer/ClassDetailPost';
import { getClassDetailPost, deleteClassDetailPost } from '../../../lib/api/ClassDetailPost';

export const getDetailPostThunk = createRequestThunk(GET_DETAIL_POST, getClassDetailPost);
export const deleteClassDetailPostThunk = createRequestThunk(
  DELETE_DETAIL_POST,
  deleteClassDetailPost,
);
