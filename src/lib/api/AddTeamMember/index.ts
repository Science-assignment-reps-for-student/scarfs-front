import { getApiDefault } from '../client';

export interface StudentResponse {
  id: number;
  number: string;
  name: string;
}

export const getStudents = ({ query, assignment_id }: { query: number; assignment_id: number }) =>
  getApiDefault().get<StudentResponse[]>(
    `/shank/user/search?assignment_id=${assignment_id}&query=${query}`,
  );

export const deleteTeamMember = (member_id: number) =>
  getApiDefault().delete<{}>(`/shank/member/${member_id}`);

export const addTeamMember = ({ team_id, target_id }: { team_id: number; target_id: number }) =>
  getApiDefault().post('/shank/member', {
    team_id,
    target_id,
  });
