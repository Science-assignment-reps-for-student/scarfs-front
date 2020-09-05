import { getApiDefault } from '../client';

export interface FileResponse {
  file_id: number;
  file_name: string;
}

export const getSubmittedFiles = ({ type, assignmentId }: { type: string; assignmentId: number }) =>
  getApiDefault().get<FileResponse>(
    `/rib-eye/${type.toLocaleLowerCase()}-file/status/${assignmentId}`,
  );
