import { AxiosResponse } from 'axios';
import { getApiDefault } from '../client';

export interface AssignmentType {
  totalElements: number;
  totalPages: number;
  class_number: number;
  applicationResponses: AssignmentElementType[];
}

export interface AssignmentResponseType {
  total_elements: number;
  total_pages: number;
  class_number: number;
  application_responses: AssignmentElementType[];
}

export interface AssignmentElementType {
  assignment_id: number;
  type: string;
  title: string;
  created_at: string;
  dead_line: string;
  view: number;
  complete: boolean;
  pre_view_description: string;
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
  notice_id: number;
  title: string;
  created_at: string;
  view: number;
  pre_view_content: string;
}

export type PagenationType = {
  size: number;
  page: number;
  classNumber?: number | '';
};

export const getAssignment = async ({
  size,
  page,
  classNumber = '',
}: PagenationType): Promise<AxiosResponse> => {
  const response = await getApiDefault().get<AssignmentResponseType>(
    `/shank/assignment?size=${size}&page=${page}&class_number=${classNumber}`,
  );
  return response;
};

export const getBoard = async ({ size, page }: PagenationType): Promise<AxiosResponse> => {
  const response = await getApiDefault().get<BoardResponseType>(
    `/shank/notice?size=${size}&page=${page}`,
  );
  return response;
};

export const searchNoticeBoards = ({ query, page }: { query: string; page: number }) =>
  getApiDefault().get(`/shank/search/notice?query=${query}&page=${page}&size=7`);
