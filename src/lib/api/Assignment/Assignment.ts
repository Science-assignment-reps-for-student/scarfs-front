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

export const getAssignment = async (): Promise<AssignmentType[]> => {
  const response = await getApiDefault().get<AssignmentType[]>('/shank/homework');
  return response.data;
};

export const getBoard = async (): Promise<BoardType[]> => {
  const response = await getApiDefault().get<BoardType[]>('/shank/notice');
  return response.data;
};

export const getUserInfo = async (): Promise<UserInfoType> => {
  const response = await apiDefault.get<UserInfoType>('/shank/user');
  return response.data;
};
