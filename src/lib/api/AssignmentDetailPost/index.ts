import { getApiDefault } from '../client';

export interface AssignmentDetailPost {
  title: string;
  type: 'PERSONAL' | 'TEAM' | 'EXPERIMENT' | '';
  created_at: string;
  dead_line: string;
  description: string;
  view: number;
  next_board_title: string | null;
  pre_board_title: string | null;
  next_board_id: number | null;
  pre_board_id: number | null;
  complete: boolean;
}

export const getAssignmentDetailPost = (id: number) =>
  getApiDefault().get<AssignmentDetailPost>(`/shank/assignment/${id}`);

export interface FileResponse {
  file_name: string;
  file_id: number;
}

export const getAssignmentFiles = (id: number) =>
  getApiDefault().get<FileResponse[]>(`/rib-eye/assignment-files/${id}`);

export const getAssignmentFile = (fileId: number) =>
  getApiDefault().get<BlobPart>(`/rib-eye/assignment-file/${fileId}`, { responseType: 'blob' });

export interface Team {
  team_id: number;
  team_name: string;
  leader: boolean;
  leader_id: number;
  leader_name: string;
  member_list: Member[];
}

export interface Member {
  member_id: number;
  member_name: string;
  member_number: string;
}

export const getTeam = (assignmentId: number) =>
  getApiDefault().get<Team>(`/shank/team/${assignmentId}`);
