import { getApiDefault } from '../client';

export interface AssignmentType {
  totalElements: number;
  totalPages: number;
  boardResponses: AssignmentElementType[];
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
  boardResponses: BoardElementType[];
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

export type PagenationType = {
  size: number;
  page: number;
};

export const getAssignment = async ({ size, page }: PagenationType): Promise<AssignmentType> => {
  const response = await getApiDefault().get<AssignmentType>(
    `/shank/homework?size=${size}&page=${page}`,
  );
  return response.data;
};

export const getBoard = async ({ size, page }: PagenationType): Promise<BoardType> => {
  const response = await getApiDefault().get<BoardType>(`/shank/notice?size=${size}&page=${page}`);
  return response.data;
};

export const getUserInfo = async (): Promise<UserInfoType> => {
  const response = await getApiDefault().get<UserInfoType>('/shank/user');
  return response.data;
};
