import { getApiDefault } from '../client';
import { CreateState } from '../../../modules/reducer/AdminCreate';

export const apiCreateAssignment = (data: FormData) => {
  return getApiDefault().post('/rib-eye/assignment', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    timeout: 10000,
  });
};

export const apiUpdateAssignment = (
  assignmentId: string,
  { deadline_1, deadline_2, deadline_3, deadline_4, typing }: CreateState,
  { description, title }: { title: string; description: string },
) => {
  return getApiDefault().patch(`/rib-eye/assignment/${assignmentId}`, {
    title,
    description,
    deadline_1,
    deadline_2,
    deadline_3,
    deadline_4,
    type: typing,
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
