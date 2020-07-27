import { apiDefault } from '../client';

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

export const getAssignment = async (): Promise<AssignmentType[]> => {
  const response = await apiDefault.get<AssignmentType[]>('/shank/homework');
  return response.data;
};

export const getBoard = async (): Promise<BoardType[]> => {
  const response = await apiDefault.get<BoardType[]>('/shank/notice');
  return response.data;
};
