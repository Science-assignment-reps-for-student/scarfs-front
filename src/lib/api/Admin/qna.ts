import { getApiDefault } from '../client';

interface User {
  id: number;
  number: string;
  name: string;
}

export type ChatUsers = User[];

export const apiChatModalUsers = () => {
  return getApiDefault().get<ChatUsers>(`${process.env.BASE_URL}/shank/user/search?query=`);
};
