import { getApiDefault } from '../client';

type ClassBoardItem = {
  boardId: number;
  title: string;
  previewContent: string;
  writerName: string;
  createdAt: string;
  view: number;
};

export type ClassBoard = {
  totalElements: number;
  totalPages: number;
  boardResponses: ClassBoardItem[];
};

export const getClassBoard = (data: { size: number; page: number }) =>
  getApiDefault().get<ClassBoard>(`/shank/board?size=${data.size}&page=${data.page}`);
