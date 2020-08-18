import { getApiDefault } from '../client';
import { Comment, ReComment } from '../../../components/Board/DetailPost/ClassDetailPost';

export interface ClassDetailPost {
  title: string;
  isMine: boolean;
  writerName: string;
  createdAt: string;
  view: number;
  content: string;
  nextBoardTitle: string;
  preBoardTitle: string;
  nextBoardId: number;
  preBoardId: number;
  comments: Comment[];
}

export const getClassDetailPost = (boardId: number) =>
  getApiDefault().get<ClassDetailPost>(`/shank/board/${boardId}`);
