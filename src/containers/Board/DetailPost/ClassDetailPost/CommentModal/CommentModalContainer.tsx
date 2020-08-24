import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { getStateCallback } from '../../../../../lib/function';
import { ClassDetailPostState } from '../../../../../modules/reducer/ClassDetailPost';
import { CommentModal } from '../../../../../components/Board/DetailPost';

const CommentModalContainer: FC = () => {
  const {
    classDetailPost: { comments },
  } = useSelector(getStateCallback<ClassDetailPostState>('ClassDetailPost'));
  return <CommentModal comments={comments} />;
};

export default CommentModalContainer;
