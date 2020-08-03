import { AxiosResponse } from 'axios';
import { getApiDefault } from '../client';

export interface SignUpType {
  number: string;
  name: string;
  authCode: string;
  password: string;
}

export interface SignUpThunkType {
  serverType: SignUpType;
  loading: boolean;
}

export interface EmailCheckType {
  email: string;
  code: string;
}

export interface EmailCheckThunkType {
  serverType: EmailCheckType;
  loading: boolean;
}

export interface EmailSendType {
  email: string;
}

export interface EmailSendThunkType {
  serverType: EmailSendType;
  loading: boolean;
}

export const signup = async (body: SignUpType): Promise<AxiosResponse<any>> => {
  const response = await getApiDefault().post('/shank/user', body);
  return response;
};

export const emailCheck = (body: EmailCheckType): Promise<AxiosResponse<any>> => {
  const response = getApiDefault().put('/shank/user/eamil/verify', body);
  return response;
};

export const emailSend = (body: EmailSendType): Promise<AxiosResponse<any>> => {
  const response = getApiDefault().post('/shank/user/email/verify', body);
  return response;
};
