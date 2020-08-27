import axios from 'axios';

import { apiDefault, getApiDefault } from '../client';
import { Team } from '../../../modules/reducer/Admin/adminTeam';
import { Personal } from '../../../modules/reducer/Admin/adminPersonal';
import { Experiment } from '../../../modules/reducer/Admin/adminExperiment';

interface RefreshToken {
  access_token: string;
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

export const downloadAssignmentFiles = (assignmentId: number, assignmentType: string) => {
  return apiDefault.get(`/rib-eye/${assignmentType}-files/${assignmentId}`);
};

export const downloadAssignmentExcel = (assignmentId: number) => {
  return apiDefault.get(`/rib-eye/excel-file/${assignmentId}`);
};

export const updateAssignmentExcel = (assignmentId: number, assignmentType: string) => {
  return apiDefault.patch(`/rib-eye/${assignmentType}-excel-file/${assignmentId}`);
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
    if (code === 403) {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      window.location.href = '/admin/login';
    }
  }
};
