import { apiDefault } from '../client';

export interface AssignmentType {
  totalElements: number;
  totalPages: number;
  boardResponses: [];
}

export interface AssignmentElementType {
  homeworkId: number;
  type: string;
  title: string;
  createdAt: string;
  daedLine: string;
  isFinish: string;
  view: number;
}

export const getAssignment = async (): Promise<AssignmentType> => {
  const response = await apiDefault.get<AssignmentType>('/shank/homework');
  return response.data;
};
