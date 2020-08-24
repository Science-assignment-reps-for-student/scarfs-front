import { AxiosResponse } from 'axios';
import { getApiDefault } from '../client';

export interface AssignmentType {
  totalElements: number;
  totalPages: number;
  applicationResponses: AssignmentElementType[];
}

export interface AssignmentResponseType {
  total_elements: number;
  total_pages: number;
  application_responses: AssignmentElementType[];
}

export interface AssignmentElementType {
  homeworkId: number;
  type: string;
  title: string;
  createdAt: string;
  daedLine: string;
  isFinish: boolean;
  view: number;
}

export interface BoardType {
  totalElements: number;
  totalPages: number;
  applicationResponses: BoardElementType[];
}

export interface BoardResponseType {
  total_elements: number;
  total_pages: number;
  application_responses: BoardElementType[];
}

export interface BoardElementType {
  noticeId: number;
  title: string;
  createdAt: string;
  view: number;
}

export interface UserInfoType {
  name: string;
  studentNumber: number;
  remainingAssignment: number;
  completionAssignment: number;
}

export interface UserInfoResponseType {
  name: string;
  student_number: number;
  remaining_assignment: number;
  completion_assignment: number;
}

export type PagenationType = {
  size: number;
  page: number;
};

export const getAssignment = async ({ size, page }: PagenationType): Promise<AxiosResponse> => {
  const response = await getApiDefault().get<AssignmentResponseType>(
    `/shank/homework?size=${size}&page=${page}`,
  );
  return response;
};

export const getBoard = async ({ size, page }: PagenationType): Promise<AxiosResponse> => {
  const response = await getApiDefault().get<BoardResponseType>(
    `/shank/notice?size=${size}&page=${page}`,
  );
  return response;
};

export const getUserInfo = async (): Promise<AxiosResponse> => {
  const response = await getApiDefault().get<UserInfoType>('/shank/user/me');
  return response;
};
