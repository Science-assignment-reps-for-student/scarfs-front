import { getApiDefault } from '../client';

export interface FileResponse {
  file_id: number;
  file_name: string;
}

interface FileApiRequest {
  type: string;
  assignmentId: number;
}

export const getSubmittedFiles = ({ type, assignmentId }: FileApiRequest) =>
  getApiDefault().get<FileResponse>(
    `/rib-eye/${type.toLocaleLowerCase()}-file/status/${assignmentId}`,
  );

export const submitFile = ({ type, assignmentId, data }: FileApiRequest & { data: FormData }) =>
  getApiDefault('multipart/form-data').post(
    `/rib-eye/${type.toLocaleLowerCase()}-file/${assignmentId}`,
    data,
  );

export const deleteSubmittedFile = ({ type, assignmentId }: FileApiRequest) =>
  getApiDefault().delete(`/rib-eye/${type.toLocaleLowerCase()}-file/${assignmentId}`);
