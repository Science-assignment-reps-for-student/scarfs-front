import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { apiDefault, getApiDefault } from '../client';
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
    const { data } = await axios({
      method: 'POST',
      url: `${process.env.BAST_URL}/chateaubriand/token`,
      data: {
        access_token: localStorage.getItem('accessToken'),
        refresh_token: localStorage.getItem('refreshToken'),
      },
    });
    localStorage.setItem('accessToken', data.access_token);
  } catch (err) {
    const code = err?.response?.status;
    if (code === 403) {
      useHistory().push('/chateaubriand/login');
    }
  }
};
