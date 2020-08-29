import { getApiDefault } from '../client';

export const writeBoard = (data: FormData) =>
  getApiDefault('multipart/form-data').post('/shank/board', data);
