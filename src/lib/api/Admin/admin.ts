import axios from 'axios';

import { CompressedName, FileInfo, Me, RefreshToken } from './responseTypes';

import { getApiDefault } from '../client';
import { Team } from '../../../modules/reducer/Admin/adminTeam';
import { Personal } from '../../../modules/reducer/Admin/adminPersonal';
import { Experiment } from '../../../modules/reducer/Admin/adminExperiment';

export const getAssignmentPersonal = (classNum: number) => {
  return getApiDefault().get<Personal>(`/chateaubriand/personal-assignment?class=${classNum}`);
};

export const getAssignmentTeam = (classNum: number) => {
  return getApiDefault().get<Team>(`/chateaubriand/team-assignment?class=${classNum}`);
};

export const getAssignmentExperiment = (classNum: number) => {
  return getApiDefault().get<Experiment>(`/chateaubriand/experiment-assignment?class=${classNum}`);
};

export const downloadCompressedAssignments = (
  assignmentId: number,
  setFunc?: (progress: number) => void,
) => {
  return getApiDefault().get<BlobPart>(`/rib-eye/assignment/${assignmentId}`, {
    responseType: 'blob',
    timeout: 10000,
    onDownloadProgress: (e: any) => {
      if (setFunc) {
        setFunc(Math.round((e.loaded / e.total) * 100));
      }
    },
  });
};

export const getCompressedName = (assignmentId: number) => {
  return getApiDefault().get<CompressedName>(`/rib-eye/assignments/${assignmentId}`);
};

export const downloadAssignmentExcel = (
  assignmentId: number,
  setFunc?: (progress: number) => void,
) => {
  return getApiDefault().get<BlobPart>(`/rib-eye/excel-file/${assignmentId}`, {
    responseType: 'blob',
    timeout: 10000,
    onDownloadProgress: (e: any) => {
      if (setFunc) {
        setFunc(Math.round((e.loaded / e.total) * 100));
      }
    },
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

export const getUserInfo = () => {
  return getApiDefault().get<Me>(`/shank/user/me`);
};

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
