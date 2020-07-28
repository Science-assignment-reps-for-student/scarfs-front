import { apiDefault, getApiDefault } from '../client';
import { CreateState } from 'src/modules/reducer/AdminCreate';

export const apiCreateAssignment = (data: FormData) => {
  return getApiDefault().post('/rib-eye/assignment', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const apiUpdateAssignment = (
  assignmentId: string,
  create: CreateState,
  texts: { title: string; description: string },
) => {
  const { deadline_1, deadline_2, deadline_3, deadline_4 } = create;
  const { title, description } = texts;
  return getApiDefault().patch(`/rib-eye/assignment/${assignmentId}`, {
    data: {
      title,
      description,
      deadline_1,
      deadline_2,
      deadline_3,
      deadline_4,
    },
  });
};

export const apiUpdateAssignmentFiles = (data: FormData, assignmentId: string) => {
  return getApiDefault().put(`/rib-eye/assignment/${assignmentId}`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const apiDeleteAssignment = (assignmentId: string) => {
  return getApiDefault().delete(`/rib-eye/assignment/${assignmentId}`);
};
