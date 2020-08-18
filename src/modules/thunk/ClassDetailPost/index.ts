import { createRequestThunk } from '../../../lib/thunk';
import { GET_DETAIL_POST } from '../../../modules/reducer/ClassDetailPost';
import { getClassDetailPost } from '../../../lib/api/ClassDetailPost';

export const getDetailPostThunk = createRequestThunk(GET_DETAIL_POST, getClassDetailPost);
