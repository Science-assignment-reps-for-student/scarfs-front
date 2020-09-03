import { getApiDefault } from '../client';
import { Comment } from '../../../components/Board/DetailPost/ClassDetailPost';

export interface ClassDetailPost {
  title: string;
  writer_name: string;
  created_at: string;
  view: number;
  content: string;
  next_board_title: string | null;
  pre_board_title: string | null;
  next_board_id: number | null;
  pre_board_id: number | null;
  comments: Comment[];
  images: string[];
  class_number: number;
}

export const getClassDetailPost = (boardId: number) =>
  getApiDefault().get<ClassDetailPost>(`/shank/board/${boardId}`);
