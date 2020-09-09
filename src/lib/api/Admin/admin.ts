import axios from 'axios';

import { getApiDefault } from '../client';
import { Team } from '../../../modules/reducer/Admin/adminTeam';
import { Personal } from '../../../modules/reducer/Admin/adminPersonal';
import { Experiment } from '../../../modules/reducer/Admin/adminExperiment';

interface RefreshToken {
  access_token: string;
}

interface Files {
  file_information: File[];
}

interface File {
  file_id: number;
  file_name: string;
}

export const getAssignmentPersonal = (classNum: number) => {
  return getApiDefault().get<Personal>(`/chateaubriand/personal-assignment?class=${classNum}`);
};

export const getAssignmentTeam = (classNum: number) => {
  return getApiDefault().get<Team>(`/chateaubriand/team-assignment?class=${classNum}`);
};

export const getAssignmentExperiment = (classNum: number) => {
  return getApiDefault().get<Experiment>(`/chateaubriand/experiment-assignment?class=${classNum}`);
};

export const downloadCompressedAssignments = (assignmentId: number) => {
  return getApiDefault().get<BlobPart>(`/rib-eye/assignment/${assignmentId}`, {
    responseType: 'blob',
  });
};

export const deleteAssignmentFile = (assignmentId: number) => {
  return getApiDefault().delete<{}>(`/rib-eye/assignment-file/${assignmentId}`);
};

export const downloadAssignmentExcel = (assignmentId: number) => {
  return getApiDefault().get<BlobPart>(`/rib-eye/excel-file/${assignmentId}`, {
    responseType: 'blob',
  });
};

export const updateAssignmentExcel = (assignmentId: number) => {
  return getApiDefault().patch<{}>(`/rib-eye/excel-file/${assignmentId}`);
};

export const tokenReIssuance = async () => {
  try {
    const { data } = await axios.post<RefreshToken>(`${process.env.BASE_URL}/chateaubriand/token`, {
      access_token: localStorage.getItem('accessToken'),
      refresh_token: localStorage.getItem('refreshToken'),
    });
    localStorage.setItem('accessToken', data.access_token);
  } catch (err) {
    const code = err?.response?.status;
    if (code === 403 || code === 500) {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      window.location.href = '/admin/login';
    }
  }
};

interface Me {
  completion_assignment: number;
  id: number;
  name: string;
  remaining_assignment: number;
  student_number: string;
  type: string;
}

export const getUserInfo = () => {
  return getApiDefault().get<Me>(`/shank/user/me`);
};

interface FileInfoItem {
  file_id: number;
  file_name: string;
}

interface FileInfo {
  file_information: FileInfoItem[];
}

export const apiFileIndex = (assignmentType: string, assignmentId: number, studentId: number) => {
  return getApiDefault().get<FileInfo>(
    `/rib-eye/${assignmentType}-files/${assignmentId}?student_id=${studentId}`,
  );
};

export const apiFileDownloadById = (type: string, fileId: number) => {
  return getApiDefault().get<Blob>(`/rib-eye/${type}-file/${fileId}`, {
    responseType: 'blob',
  });
};
