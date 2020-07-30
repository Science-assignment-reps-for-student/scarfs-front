import { AxiosResponse } from 'axios';
import { getApiDefault } from '../client';

export interface SignUpType {
  number: string;
  name: string;
  authCode: string;
  password: string;
  loading: boolean;
}

export interface EmailCheckType {
  email: string;
  code: string;
  loading: boolean;
}

export interface EmailSendType {
  email: string;
  loading: boolean;
}

export const signup = async (body: SignUpType): Promise<AxiosResponse<any>> => {
  try {
    const response = await getApiDefault().post('/shank/user', body);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const emailCheck = (body: EmailCheckType): Promise<AxiosResponse<any>> => {
  try {
    const response = getApiDefault().put('/shank/user/eamil/verify', body);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const emailSend = (body: EmailSendType): Promise<AxiosResponse<any>> => {
  try {
    const response = getApiDefault().post('/shank/user/eamil/verify', body);
    return response;
  } catch (err) {
    console.log(err);
  }
};
