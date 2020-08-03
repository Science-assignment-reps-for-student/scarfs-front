import { getApiDefault } from '../client';

export const apiLogin = ({ ID, PW }: { ID: string; PW: string }) => {
  return getApiDefault().post(`/admin/auth`, {
    email: ID,
    password: PW,
  });
};
