import { getApiDefault } from '../client';

export const writeBoard = (data: FormData) =>
  getApiDefault('multipart/form-data').post('/shank/board', data);

export const getImageFileByURL = (url: string) =>
  getApiDefault().get<File>(`/shank/image/${url}`, { responseType: 'blob' });

export const updateBoard = ({ boardId, data }: { boardId: number; data: FormData }) =>
  getApiDefault('multipart/form-data').put(`/shank/board/${boardId}`, data);
