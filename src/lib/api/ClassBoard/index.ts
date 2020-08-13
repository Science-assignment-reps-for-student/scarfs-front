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
  totalElements: number;
  totalPages: number;
  boardResponses: ClassBoardItem[];
}

export const getClassBoard = (data: { size: number; page: number }) =>
  getApiDefault().get<ClassBoard>(`/shank/board?size=${data.size}&page=${data.page}`);
