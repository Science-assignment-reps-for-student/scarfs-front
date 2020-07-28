import { apiDefault } from '../client';

export interface SignInType {
  email: string;
  password: string;
  loading: boolean;
}

export interface SignInResponseType {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
  loading: boolean;
}

export const signin = async (body: SignInType): Promise<SignInResponseType> => {
  const response = await apiDefault.post<SignInResponseType>('/shank/auth', body);
  return response.data;
};
