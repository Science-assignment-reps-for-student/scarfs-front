import { apiDefault } from '../client';

export const setAxiosDefaultHeader = (accessToken: string) => {
  apiDefault.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
};

export const fetchAssignment = (classNum: number, assignmentType: string) => {
  return apiDefault.get(`/admin/${assignmentType}-assignment?class=${classNum}`);
};

export const downloadAssignmentFiles = (assignmentId: number, assignmentType: string) => {
  return apiDefault.get(`rib-eye/${assignmentType}-files/${assignmentId}`);
};

export const downloadAssignmentExcel = (assignmentId: number) => {
  return apiDefault.get(`rib-eye/excel-file/${assignmentId}`);
};

export const updateAssignmentExcel = (assignmentId: number, assignmentType: string) => {
  return apiDefault.get(`rib-eye/${assignmentType}-excel-file/${assignmentId}`);
};
