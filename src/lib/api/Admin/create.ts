import { getApiDefault } from '../client';
import { PrevAssignments } from '../../type';

export const apiCreateAssignment = (data: FormData) => {
  return getApiDefault().post<{}>('/rib-eye/assignment', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const apiUpdateAssignment = (assignmentId: string, data: FormData) => {
  return getApiDefault().patch<{}>(`/rib-eye/assignment/${assignmentId}`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const apiUpdateAssignmentFiles = (data: FormData, assignmentId: string) => {
  return getApiDefault().put<{}>(`/rib-eye/assignment/${assignmentId}`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const apiDeleteAssignment = (assignmentId: string) => {
  return getApiDefault().delete(`/rib-eye/assignment/${assignmentId}`);
};

export const apiGetAssignments = (assignmentId: string) => {
  return getApiDefault().post<PrevAssignments>(`/chateaubriand/assignment`, {
    assignment_id: assignmentId,
  });
};
