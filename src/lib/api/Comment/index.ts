import { getApiDefault } from '../client';

export const addCommnt = ({ boardId, content }: { boardId: number; content: string }) =>
  getApiDefault().post(`/shank/comment/${boardId}`, {
    content,
  });
