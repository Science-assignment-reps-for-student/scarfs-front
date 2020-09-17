import { getApiDefault } from '../client';

export interface NoticeDetailPost {
  title: string;
  content: string;
  created_at: string;
  view: number;
  next_notice_title: string | null;
  pre_notice_title: string | null;
  next_notice_id: number;
  pre_notice_id: number | null;
}

export const getNoticeDetailPost = ({ id }: { id: number }) =>
  getApiDefault().get<NoticeDetailPost>(`/shank/notice/${id}`);
