import axios from 'axios';

import { Login } from './responseTypes';

export const apiLogin = ({ ID, PW }: { ID: string; PW: string }) => {
  return axios.post<Login>(`${process.env.BASE_URL}/chateaubriand/auth`, {
    email: ID,
    password: PW,
  });
};
