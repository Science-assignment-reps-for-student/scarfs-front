import { createRequestThunk } from '../../../lib/thunk';
import { GET_NOTICE_DETAIL_POST } from '../../../modules/reducer/NoticeDetailPost';
import { getNoticeDetailPost } from '../../../lib/api/NoticeDetailPost';

export const getNoticeDetailPostThunk = createRequestThunk(
  GET_NOTICE_DETAIL_POST,
  getNoticeDetailPost,
);
