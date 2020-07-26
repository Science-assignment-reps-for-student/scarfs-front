import { AxiosResponse } from 'axios';
import { apiDefault } from '../client';

export interface SignUpType {
  number: string;
  name: string;
  authCode: string;
  password: string;
}

export interface EmailCheckType {
  email: string;
  code: string;
}

export interface EmailSendType {
  email: string;
}

export const signup = async (body: SignUpType): Promise<AxiosResponse<any>> => {
  try {
    const response = await apiDefault.post('/shank/user', body);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const emailCheck = (body: EmailCheckType): Promise<AxiosResponse<any>> => {
  try {
    const response = apiDefault.put('/shank/user/eamil/verify', body);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const emailSend = (body: EmailSendType): Promise<AxiosResponse<any>> => {
  try {
    const response = apiDefault.post('/shank/user/eamil/verify', body);
    return response;
  } catch (err) {
    console.log(err);
  }
};
