import { getApiDefault } from '../client';

export const addCommnt = ({ boardId, content }: { boardId: number; content: string }) =>
  getApiDefault().post(`/shank/comment/${boardId}`, {
    content,
  });

export const updateComment = ({ commentId, content }) =>
  getApiDefault().put<number>(`/shank/comment/${commentId}`, { content });
