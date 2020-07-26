import { apiDefault } from '../client';

export interface BoardElementType {
  boarId: string;
  title: string;
  writerName: string;
  createdAt: string;
  viwe: string;
}

export interface BoardType {
  totalElements: number;
  totalPages: number;
  boardResponses: BoardElementType[];
}

export const getBoard = async (): Promise<BoardType> => {
  const response = await apiDefault.get<BoardType>('/shank/board');
  return response.data;
};
