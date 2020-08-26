import { AxiosResponse } from 'axios';
import { getApiDefault } from '../client';

export interface UserInfoType {
  name: string;
  studentNumber: number;
  remainingAssignment: number;
  completionAssignment: number;
  id: number;
}

export interface UserInfoResponseType {
  name: string;
  student_number: number;
  remaining_assignment: number;
  completion_assignment: number;
  id: number;
}

export const getUserInfo = async (): Promise<AxiosResponse> => {
  const response = await getApiDefault().get<UserInfoType>('/shank/user/me');
  return response;
};
