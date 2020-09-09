import axios from 'axios';

interface Login {
  access_token: string;
  refresh_token: string;
}

export const apiLogin = ({ ID, PW }: { ID: string; PW: string }) => {
  return axios.post<Login>(`${process.env.BASE_URL}/chateaubriand/auth`, {
    email: ID,
    password: PW,
  });
};
