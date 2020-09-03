import axios from 'axios';
import { SignUp } from '../../../modules/reducer/AdminSignUp/reducer';

export const apiSignUp = ({ email, password, name }: SignUp) => {
  return axios.post(`${process.env.BASE_URL}/chateaubriand/account`, {
    email: email,
    password: password,
    name: name,
  });
};
