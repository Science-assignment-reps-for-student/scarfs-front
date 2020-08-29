import { getApiDefault } from '../client';

export interface ClassBoardItem {
  board_id: number;
  title: string;
  pre_view_content: string;
  name: string;
  created_at: string;
  view: number;
}

export interface ClassBoard {
  total_elements: number;
  total_pages: number;
  application_responses: ClassBoardItem[];
  class_number: number;
}

export const getClassBoard = (data: { size: number; page: number; classNumber?: number }) =>
  getApiDefault().get<ClassBoard>(
    `/shank/board?size=${data.size}&page=${data.page}&class_number=${
      data.classNumber ? data.classNumber : ''
    }`,
  );
