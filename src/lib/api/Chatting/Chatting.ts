import { getApiDefault } from '../client';

export type ChattingContentType = {
  id: number;
  message: string;
  type: string;
  time: Object;
  target: number;
  deleted: boolean;
};

export type ChattingListType = {
  user_id: number;
  user_number: number;
  user_name: string;
  message: string;
  message_time: string;
  show: boolean;
  deleted: boolean;
};

export const getChattingList = async (id: number) => {
  const response = await getApiDefault().get(`/shank/message/${id}`);
  return response;
};

export const getChattingLog = async () => {
  const response = await getApiDefault().get('/shank/message');
  return response;
};

export const deleteChatting = async (id: number) => {
  const response = await getApiDefault().delete(`/shank/message/${id}`);
  return response;
};
