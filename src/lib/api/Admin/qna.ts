import { ChatUsers } from './responseTypes';

import { getApiDefault } from '../client';

export const apiChatModalUsers = () => {
  return getApiDefault().get<ChatUsers>(`${process.env.BASE_URL}/shank/user/search?query=`);
};
