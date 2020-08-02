import { getApiDefault } from '../client';
import { SignUp } from '../../../modules/reducer/AdminSignUp';

export const apiSignUp = ({ email, password, name }: SignUp) => {
  return getApiDefault().post(`/admin/account`, {
    email: email,
    password: password,
    name: name,
  });
};