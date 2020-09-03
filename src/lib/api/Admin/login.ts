import axios from 'axios';

export const apiLogin = ({ ID, PW }: { ID: string; PW: string }) => {
  return axios.post(`${process.env.BASE_URL}/chateaubriand/auth`, {
    email: ID,
    password: PW,
  });
};
