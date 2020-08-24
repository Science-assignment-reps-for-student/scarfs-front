import { ErrorType, errorInitialState } from '../../../lib/type';
import { ClassDetailPost } from '../../../lib/api/ClassDetailPost';

export const GET_DETAIL_POST = 'ClassDetailPost/GET_DETAIL_POST' as const;
export const GET_DETAIL_POST_SUCCESS = 'ClassDetailPost/GET_DETAIL_POST_SUCCESS' as const;
export const GET_DETAIL_POST_FAILURE = 'ClassDetailPost/GET_DETAIL_POST_FAILURE' as const;

const getDetailPostSuccess = (payload: ClassDetailPost) => ({
  type: GET_DETAIL_POST_SUCCESS,
  payload,
});

const getDetailPostFailure = (error: ErrorType) => ({
  type: GET_DETAIL_POST_FAILURE,
  payload: error,
});

type ClassDetailPostAction =
  | ReturnType<typeof getDetailPostSuccess>
  | ReturnType<typeof getDetailPostFailure>;

export type ClassDetailPostState = {
  classDetailPost: ClassDetailPost;
  getDetailPostError: ErrorType;
};

const initialState: ClassDetailPostState = {
  classDetailPost: {
    title: '',
    isMine: false,
    writerName: '',
    createdAt: '',
    view: 0,
    content: '',
    nextBoardTitle: '',
    preBoardTitle: '',
    nextBoardId: 0,
    preBoardId: 0,
    comments: [],
  },
  getDetailPostError: errorInitialState,
};

export default function ClassDetailPost(
  state: ClassDetailPostState = initialState,
  action: ClassDetailPostAction,
) {
  switch (action.type) {
    case GET_DETAIL_POST_SUCCESS:
      return {
        ...state,
        classDetailPost: action.payload,
        getDetailPostError: errorInitialState,
      };
    case GET_DETAIL_POST_FAILURE:
      return {
        ...state,
        getDetailPostError: action.payload,
      };
    default:
      return state;
  }
}