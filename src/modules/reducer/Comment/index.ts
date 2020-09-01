import { ErrorType, errorInitialState } from '../../../lib/type';

export const ADD_COMMENT = 'Comment/ADD_COMMENT' as const;
export const ADD_COMMENT_SUCCESS = 'Comment/ADD_COMMENT_SUCCESS' as const;
export const ADD_COMMENT_FAILURE = 'Comment/ADD_COMMENT_FAILURE' as const;

export const RESET_COMMENT_STATE = 'Comment/RESET_COMMENT_STATE' as const;

export const addCommentSuccess = () => ({
  type: ADD_COMMENT_SUCCESS,
});

export const addCommentFailure = (error: ErrorType) => ({
  type: ADD_COMMENT_FAILURE,
  payload: error,
});

export const resetCommentState = () => ({
  type: RESET_COMMENT_STATE,
});

export type ClassBoardWriterAction =
  | ReturnType<typeof addCommentSuccess>
  | ReturnType<typeof addCommentFailure>
  | ReturnType<typeof resetCommentState>;

export type CommentState = {
  addCommentSuccess: boolean;
  addCommentError: ErrorType;
};

const initialState: CommentState = {
  addCommentSuccess: false,
  addCommentError: errorInitialState,
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
    case RESET_COMMENT_STATE:
      return initialState;
    default:
      return state;
  }
}
