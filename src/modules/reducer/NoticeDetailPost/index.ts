import { ErrorType, errorInitialState } from '../../../lib/type';
import { NoticeDetailPost } from '../../../lib/api/NoticeDetailPost';

export const GET_NOTICE_DETAIL_POST = 'NoticeDetailPost/GET_NOTICE_DETAIL_POST' as const;
export const GET_NOTICE_DETAIL_POST_SUCCESS = 'NoticeDetailPost/GET_NOTICE_DETAIL_POST_SUCCESS' as const;
export const GET_NOTICE_DETAIL_POST_FAILURE = 'NoticeDetailPost/GET_NOTICE_DETAIL_POST_FAILURE' as const;

export const RESET_NOTICE_DETAIL_POST = 'NoticeDetailPost/RESET_NOTICE_DETAIL_POST' as const;

const getNoticeDetailPostSuccess = (payload: NoticeDetailPost) => ({
  type: GET_NOTICE_DETAIL_POST_SUCCESS,
  payload,
});

const getNoticeDetailPostFailure = (error: ErrorType) => ({
  type: GET_NOTICE_DETAIL_POST_FAILURE,
  payload: error,
});

export const resetDetailPost = () => ({
  type: RESET_NOTICE_DETAIL_POST,
});

type NoticeDetailPostAction =
  | ReturnType<typeof getNoticeDetailPostSuccess>
  | ReturnType<typeof getNoticeDetailPostFailure>
  | ReturnType<typeof resetDetailPost>;

export type NoticeDetailPostState = {
  noticeDetailPost: NoticeDetailPost;
  getNoticeDetailPostError: ErrorType;
};

const initialState: NoticeDetailPostState = {
  noticeDetailPost: {
    title: '',
    created_at: '',
    view: 0,
    content: '',
    next_notice_title: '',
    pre_notice_title: '',
    next_notice_id: 0,
    pre_notice_id: 0,
  },
  getNoticeDetailPostError: errorInitialState,
};

export default function NoticeDetailPost(
  state: NoticeDetailPostState = initialState,
  action: NoticeDetailPostAction,
) {
  switch (action.type) {
    case GET_NOTICE_DETAIL_POST_SUCCESS:
      return {
        ...state,
        noticeDetailPost: action.payload,
        getDetailPostError: errorInitialState,
      };
    case GET_NOTICE_DETAIL_POST_FAILURE:
      return {
        ...state,
        getDetailPostError: action.payload,
      };
    case RESET_NOTICE_DETAIL_POST:
      return initialState;
    default:
      return state;
  }
}
