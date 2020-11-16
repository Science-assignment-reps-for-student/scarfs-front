import { getApiDefault } from '../client';

export interface NoticeWrite {
  title: string;
  content: string;
}

export const writeBoard = (data: NoticeWrite) => getApiDefault().post('/shank/notice', data);
