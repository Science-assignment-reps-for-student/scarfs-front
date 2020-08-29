import React, { FC, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStateCallback } from '../../../../../lib/function';
import { ClassDetailPostState } from '../../../../../modules/reducer/ClassDetailPost';
import { CommentModal } from '../../../../../components/Board/DetailPost';
import {
  CommentState,
  resetCommentState as creaetResetCommentAction,
} from '../../../../../modules/reducer/Comment';
import { addCommentThunk } from '../../../../../modules/thunk/Comment';
import { getDetailPostThunk } from '../../../../../modules/thunk/ClassDetailPost';

const CommentModalContainer: FC = () => {
  const dispatch = useDispatch();
  const {
    classDetailPost: { comments },
  } = useSelector(getStateCallback<ClassDetailPostState>('ClassDetailPost'));
  const { addCommentSuccess, addCommentError } = useSelector(
    getStateCallback<CommentState>('Comment'),
  );

  const getDetailPost = (boardId: number) => {
    dispatch(getDetailPostThunk(boardId));
  };

  const addComment = useCallback(
    (boardId: number, content: string) => {
      dispatch(addCommentThunk({ boardId, content }));
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
      resetCommentState={resetCommentState}
    />
  );
};

export default CommentModalContainer;
