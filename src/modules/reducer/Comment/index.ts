import { ErrorType, errorInitialState } from '../../../lib/type';

export const ADD_COMMENT = 'Comment/ADD_COMMENT' as const;
export const ADD_COMMENT_SUCCESS = 'Comment/ADD_COMMENT_SUCCESS' as const;
export const ADD_COMMENT_FAILURE = 'Comment/ADD_COMMENT_FAILURE' as const;

export const UPDATE_COMMENT = 'Comment/UPDATE_COMMENT' as const;
export const UPDATE_COMMENT_SUCCESS = 'Comment/UPDATE_COMMENT_SUCCESS' as const;
export const UPDATE_COMMENT_FAILURE = 'Comment/UPDATE_COMMENT_FAILURE' as const;

export const DELETE_COMMENT = 'Comment/DELETE_COMMENT' as const;
export const DELETE_COMMENT_SUCCESS = 'Comment/DELETE_COMMENT_SUCCESS' as const;
export const DELETE_COMMENT_FAILURE = 'Comment/DELETE_COMMENT_FAILURE' as const;

export const ADD_RE_COMMENT = 'Comment/ADD_RE_COMMENT' as const;
export const ADD_RE_COMMENT_SUCCESS = 'Comment/ADD_RE_COMMENT_SUCCESS' as const;
export const ADD_RE_COMMENT_FAILURE = 'Comment/ADD_RE_COMMENT_FAILURE' as const;

export const UPDATE_RE_COMMENT = 'Comment/UPDATE_RE_COMMENT' as const;
export const UPDATE_RE_COMMENT_SUCCESS = 'Comment/UPDATE_RE_COMMENT_SUCCESS' as const;
export const UPDATE_RE_COMMENT_FAILURE = 'Comment/UPDATE_RE_COMMENT_FAILURE' as const;

export const RESET_COMMENT_STATE = 'Comment/RESET_COMMENT_STATE' as const;

export const addCommentSuccess = () => ({
  type: ADD_COMMENT_SUCCESS,
});

export const addCommentFailure = (error: ErrorType) => ({
  type: ADD_COMMENT_FAILURE,
  payload: error,
});

export const updateCommentSuccess = (payload: number) => ({
  type: UPDATE_COMMENT_SUCCESS,
  payload,
});

export const updateCommentFailure = (error: ErrorType) => ({
  type: UPDATE_COMMENT_FAILURE,
  payload: error,
});

export const deleteCommentSuccess = () => ({
  type: DELETE_COMMENT_SUCCESS,
});

export const deleteCommentFailure = (error: ErrorType) => ({
  type: DELETE_COMMENT_FAILURE,
  payload: error,
});

export const addReCommentSuccess = (payload: number) => ({
  type: ADD_RE_COMMENT_SUCCESS,
  payload,
});

export const addReCommentFailure = (error: ErrorType) => ({
  type: ADD_RE_COMMENT_FAILURE,
  payload: error,
});

export const updateReCommentSuccess = (payload: number) => ({
  type: UPDATE_RE_COMMENT_SUCCESS,
  payload,
});

export const updateReCommentFailure = (error: ErrorType) => ({
  type: UPDATE_RE_COMMENT_FAILURE,
  payload: error,
});

export const resetCommentState = () => ({
  type: RESET_COMMENT_STATE,
});

export type ClassBoardWriterAction =
  | ReturnType<typeof addCommentSuccess>
  | ReturnType<typeof addCommentFailure>
  | ReturnType<typeof updateCommentSuccess>
  | ReturnType<typeof updateCommentFailure>
  | ReturnType<typeof deleteCommentSuccess>
  | ReturnType<typeof deleteCommentFailure>
  | ReturnType<typeof addReCommentSuccess>
  | ReturnType<typeof addReCommentFailure>
  | ReturnType<typeof updateReCommentSuccess>
  | ReturnType<typeof updateReCommentFailure>
  | ReturnType<typeof resetCommentState>;

export type CommentState = {
  addCommentSuccess: boolean;
  addCommentError: ErrorType;
  updateCommentSuccess: number;
  updateCommentError: ErrorType;
  deleteCommentSuccess: boolean;
  deleteCommentError: ErrorType;
  addReCommentSuccess: number;
  addReCommentError: ErrorType;
  updateReCommentSuccess: number;
  updateReCommentError: ErrorType;
};

const initialState: CommentState = {
  addCommentSuccess: false,
  addCommentError: errorInitialState,
  updateCommentSuccess: 0,
  updateCommentError: errorInitialState,
  deleteCommentSuccess: false,
  deleteCommentError: errorInitialState,
  addReCommentSuccess: 0,
  addReCommentError: errorInitialState,
  updateReCommentSuccess: 0,
  updateReCommentError: errorInitialState,
};

export default function Comment(
  state: CommentState = initialState,
  action: ClassBoardWriterAction,
) {
  switch (action.type) {
    case ADD_COMMENT_SUCCESS:
      return {
        ...initialState,
        addCommentSuccess: true,
      };
    case ADD_COMMENT_FAILURE:
      return {
        ...initialState,
        addCommentError: action.payload,
      };
    case UPDATE_COMMENT_SUCCESS:
      return {
        ...initialState,
        updateCommentSuccess: action.payload,
      };
    case UPDATE_COMMENT_FAILURE:
      return {
        ...initialState,
        updateCommentError: action.payload,
      };
    case DELETE_COMMENT_SUCCESS:
      return {
        ...initialState,
        deleteCommentSuccess: true,
      };
    case DELETE_COMMENT_FAILURE:
      return {
        ...initialState,
        deleteCommentError: action.payload,
      };
    case ADD_RE_COMMENT_SUCCESS:
      return {
        ...initialState,
        addReCommentSuccess: action.payload,
      };
    case ADD_RE_COMMENT_FAILURE:
      return {
        ...initialState,
        addReCommentError: action.payload,
      };
    case UPDATE_RE_COMMENT_SUCCESS:
      return {
        ...initialState,
        updateReCommentSuccess: action.payload,
      };
    case UPDATE_RE_COMMENT_FAILURE:
      return {
        ...initialState,
        updateReCommentError: action.payload,
      };
    case RESET_COMMENT_STATE:
      return initialState;
    default:
      return state;
  }
}
