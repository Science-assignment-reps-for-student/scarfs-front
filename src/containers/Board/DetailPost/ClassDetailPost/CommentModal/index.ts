import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStateCallback } from '../../../../../lib/function';
import { addReCommentThunk } from '../../../../../modules/thunk/Comment';
import { CommentState } from '../../../../../modules/reducer/Comment';
import { ErrorType } from '../../../../../lib/type';

export { default as CommentModalContainer } from './CommentModalContainer';

export const useAddReCommentRedux = (): [
  number,
  ErrorType,
  (commentId: number, content: string) => void,
] => {
  const dispatch = useDispatch();
  const { addReCommentSuccess, addReCommentError } = useSelector(
    getStateCallback<CommentState>('Comment'),
  );

  const addReComment = useCallback(
    (commentId: number, content: string) => {
      dispatch(addReCommentThunk({ commentId, content }));
    },
    [dispatch],
  );

  return [addReCommentSuccess, addReCommentError, addReComment];
};
