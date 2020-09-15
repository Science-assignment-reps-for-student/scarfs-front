import { getApiDefault } from '../client';

export const deleteTeam = (assignmentId: number) =>
  getApiDefault().delete(`/shank/team/${assignmentId}`);
