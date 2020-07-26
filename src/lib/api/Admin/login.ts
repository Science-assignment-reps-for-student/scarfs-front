import { apiDefault } from '../client';

export const apiLogin = ({ ID, PW }: { ID: string; PW: string; type: string }) => {
  return apiDefault.post(`/admin/auth`, {
    email: ID,
    password: PW,
  });
};
