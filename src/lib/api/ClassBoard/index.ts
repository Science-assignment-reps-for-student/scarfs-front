import { getApiDefault } from '../client';

interface ClassBoardItem {
  boardId: number;
  title: string;
  previewContent: string;
  writerName: string;
  createdAt: string;
  view: number;
}

export interface ClassBoard {
  total_elements: number;
  total_pages: number;
  application_responses: ClassBoardItem[];
}

export const getClassBoard = (data: { size: number; page: number }) =>
  getApiDefault().get<ClassBoard>(`/shank/board?size=${data.size}&page=${data.page}`);
