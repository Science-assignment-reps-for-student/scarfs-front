import { ErrorType, errorInitialState } from '../../../lib/type';
import { ClassDetailPost } from '../../../lib/api/ClassDetailPost';

export const GET_DETAIL_POST = 'ClassDetailPost/GET_DETAIL_POST' as const;
export const GET_DETAIL_POST_SUCCESS = 'ClassDetailPost/GET_DETAIL_POST_SUCCESS' as const;
export const GET_DETAIL_POST_FAILURE = 'ClassDetailPost/GET_DETAIL_POST_FAILURE' as const;

export const RESET_DETAIL_POST = 'ClassDetailPost/RESET_DETAIL_POST' as const;

const getDetailPostSuccess = (payload: ClassDetailPost) => ({
  type: GET_DETAIL_POST_SUCCESS,
  payload,
});

const getDetailPostFailure = (error: ErrorType) => ({
  type: GET_DETAIL_POST_FAILURE,
  payload: error,
});

export const resetDetailPost = () => ({
  type: RESET_DETAIL_POST,
});

type ClassDetailPostAction =
  | ReturnType<typeof getDetailPostSuccess>
  | ReturnType<typeof getDetailPostFailure>
  | ReturnType<typeof resetDetailPost>;

export type ClassDetailPostState = {
  classDetailPost: ClassDetailPost;
  getDetailPostError: ErrorType;
};

const initialState: ClassDetailPostState = {
  classDetailPost: {
    title: '',
    writer_name: '',
    created_at: '',
    view: 0,
    content: '',
    next_board_title: '',
    pre_board_title: '',
    next_board_id: 0,
    pre_board_id: 0,
    comments: [],
    images: [],
    class_number: 0,
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
    case RESET_DETAIL_POST:
      return initialState;
    default:
      return state;
  }
}
