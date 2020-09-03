import React, { FC, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStateCallback } from '../../../../../lib/function';
import { ClassDetailPostState } from '../../../../../modules/reducer/ClassDetailPost';
import { CommentModal } from '../../../../../components/Board/DetailPost';
import {
  CommentState,
  resetCommentState as creaetResetCommentAction,
} from '../../../../../modules/reducer/Comment';
import {
  addCommentThunk,
  updateCommentThunk,
  deleteCommentThunk,
} from '../../../../../modules/thunk/Comment';
import { getDetailPostThunk } from '../../../../../modules/thunk/ClassDetailPost';

const CommentModalContainer: FC = () => {
  const dispatch = useDispatch();
  const {
    classDetailPost: { comments },
  } = useSelector(getStateCallback<ClassDetailPostState>('ClassDetailPost'));
  const {
    addCommentSuccess,
    addCommentError,
    updateCommentSuccess,
    updateCommentError,
    deleteCommentSuccess,
    deleteCommentError,
  } = useSelector(getStateCallback<CommentState>('Comment'));

  const getDetailPost = (boardId: number) => {
    dispatch(getDetailPostThunk(boardId));
  };

  const addComment = useCallback(
    (boardId: number, content: string) => {
      dispatch(addCommentThunk({ boardId, content }));
    },
    [dispatch],
  );

  const updateComment = useCallback(
    (commentId: number, content: string) => {
      dispatch(updateCommentThunk({ commentId, content }));
    },
    [dispatch],
  );

  const deleteComment = useCallback(
    (commentId: number) => {
      dispatch(deleteCommentThunk({ commentId }));
    },
    [dispatch],
  );

  const resetCommentState = useCallback(() => {
    dispatch(creaetResetCommentAction());
  }, [dispatch]);

  return (
    <CommentModal
      comments={comments}
      getDetailPost={getDetailPost}
      addComment={addComment}
      addCommentSuccess={addCommentSuccess}
      addCommentError={addCommentError}
      updateComment={updateComment}
      updateCommentSuccess={updateCommentSuccess}
      updateCommentError={updateCommentError}
      deleteComment={deleteComment}
      deleteCommentSuccess={deleteCommentSuccess}
      deleteCommentError={deleteCommentError}
      resetCommentState={resetCommentState}
    />
  );
};

export default CommentModalContainer;
