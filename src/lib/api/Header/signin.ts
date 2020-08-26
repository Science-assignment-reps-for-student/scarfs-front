import { getApiDefault, getRefreshApiDefault } from '../client';

export interface SignInType {
  email: string;
  password: string;
}

export interface SignInResponseType {
  access_token: string;
  refresh_token: string;
  token_type: string;
}

export interface RefreshTokenType {
  refreshToken: string;
}

export interface RefreshTokenResponseType {
  access_token: string;
  refresh_token: string;
  token_type: string;
}

export interface RefreshTokenThunkType {
  serverType: RefreshTokenType;
  callback: () => void;
}

export const signin = async (body: SignInType): Promise<SignInResponseType> => {
  const response = await getApiDefault().post<SignInResponseType>('/shank/auth', body);
  return response.data;
};

export const sendRefreshToken = async (
  body: RefreshTokenType,
): Promise<RefreshTokenResponseType> => {
  const response = await getRefreshApiDefault().put<RefreshTokenResponseType>('/shank/auth', body);
  return response.data;
};
