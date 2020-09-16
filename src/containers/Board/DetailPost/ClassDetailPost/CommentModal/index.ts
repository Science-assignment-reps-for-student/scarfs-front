import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStateCallback } from '../../../../../lib/function';
import {
  addReCommentThunk,
  updateReCommentThunk,
  deleteReCommentThunk,
} from '../../../../../modules/thunk/Comment';
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

export const useUpdateReCommentRedux = (): [
  number,
  ErrorType,
  (reCommentId: number, content: string) => void,
] => {
  const dispatch = useDispatch();
  const { updateReCommentSuccess, updateReCommentError } = useSelector(
    getStateCallback<CommentState>('Comment'),
  );

  const updateReComment = useCallback(
    (reCommentId: number, content: string) => {
      dispatch(updateReCommentThunk({ reCommentId, content }));
    },
    [dispatch],
  );

  return [updateReCommentSuccess, updateReCommentError, updateReComment];
};

export const useDeleteReCommentRedux = (): [boolean, ErrorType, (reCommentId: number) => void] => {
  const dispatch = useDispatch();
  const { deleteReCommentSuccess, deleteReCommentError } = useSelector(
    getStateCallback<CommentState>('Comment'),
  );

  const deleteReComment = useCallback(
    (reCommentId: number) => {
      dispatch(deleteReCommentThunk({ reCommentId }));
    },
    [dispatch],
  );

  return [deleteReCommentSuccess, deleteReCommentError, deleteReComment];
};
