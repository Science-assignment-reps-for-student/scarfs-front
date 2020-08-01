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
  callback: Function;
  accessToken: string;
}

export interface RefreshTokenResponseType {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
}

export interface RefreshTokenThunkType {
  serverType: RefreshTokenType;
  loading: boolean;
}

export const signin = async (body: SignInType): Promise<SignInResponseType> => {
  const response = await getApiDefault().post<SignInResponseType>('/shank/auth', body);
  return response.data;
};

export const refreshToken = async (body: RefreshTokenType): Promise<RefreshTokenResponseType> => {
  try {
    const response = await getApiDefault().post<RefreshTokenResponseType>('/shank/auth', body);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
