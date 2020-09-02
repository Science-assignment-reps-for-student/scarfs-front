import { getApiDefault } from '../client';

export const addComment = ({ boardId, content }: { boardId: number; content: string }) =>
  getApiDefault().post(`/shank/comment/${boardId}`, {
    content,
  });

export const updateComment = ({ commentId, content }) =>
  getApiDefault().put<number>(`/shank/comment/${commentId}`, { content });

export const deleteComment = ({ commentId }) =>
  getApiDefault().delete(`/shank/comment/${commentId}`);

export const addReComment = ({ commentId, content }: { commentId: number; content: string }) =>
  getApiDefault().post<number>(`/shank/comment/sub/${commentId}`, {
    content,
  });

export const updateReComment = ({
  reCommentId,
  content,
}: {
  reCommentId: number;
  content: string;
}) => getApiDefault().put<number>(`/shank/comment/sub/${reCommentId}`, { content });
