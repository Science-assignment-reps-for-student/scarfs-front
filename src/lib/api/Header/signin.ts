import { getApiDefault } from '../client';

export interface SignInType {
  email: string;
  password: string;
}

export interface SignInResponseType {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
}

export interface SignInThunkType {
  serverType: SignInType;
  loading: boolean;
}

export interface RefreshTokenType {
  refreshToken: string;
}

export interface RefreshTokenResponseType {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
}

export interface RefreshTokenThunkType {
  serverType: RefreshTokenType;
  loading: boolean;
  callback: () => void;
}

export const signin = async (body: SignInType): Promise<SignInResponseType> => {
  const response = await getApiDefault().post<SignInResponseType>('/shank/auth', body);
  return response.data;
};

export const sendRefreshToken = async (
  body: RefreshTokenType,
): Promise<RefreshTokenResponseType> => {
  const response = await getApiDefault().post<RefreshTokenResponseType>('/shank/auth', body);
  return response.data;
};
